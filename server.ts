"use strict";

import dotenv from "dotenv";
dotenv.config();
import express, { type Express, type Request, type Response, type NextFunction } from "express";
import helmet from "helmet";
import fs from "node:fs";
import path from "node:path";

const PORT = process.env.PORT || 5174;
const SSR_OUTLET = "<!--ssr-outlet-->";

function getClientPaths() {
  return {
    clientDistDir: path.resolve(__dirname, "../dist"),
    templatePath: path.resolve(__dirname, "../dist/index.html"),
  };
}

export type CreateAppDeps = {
  template: string;
  render: (url: string) => Promise<{ appHtml: string }>;
  staticDir: string;
};

const safeErrorHtml = (message: string) =>
  `<!DOCTYPE html><html><head><meta charset="utf-8"><title>Error</title></head><body><h1>Something went wrong</h1><p>${message}</p></body></html>`;

export function createApp(deps: CreateAppDeps): Express {
  const { template, render: renderFn, staticDir } = deps;
  const app = express();

  app.use(
    helmet({
      contentSecurityPolicy: {
        directives: {
          ...helmet.contentSecurityPolicy.getDefaultDirectives(),
          "img-src": ["'self'", "data:", "https:"],
        },
      },
    })
  );
  app.use(express.static(staticDir, { index: false }));

  app.get("/health", (_req: Request, res: Response) => {
    res.status(200).json({ status: "ok" });
  });

  app.get(/.*/, async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { appHtml } = await renderFn(req.originalUrl);
      const html = template.replace(SSR_OUTLET, appHtml);
      res.status(200).type("text/html").end(html);
    } catch (err) {
      next(err);
    }
  });

  app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
    const message = process.env.NODE_ENV === "production" ? "Server error" : (err?.message ?? "Unknown error");
    res.status(500).type("text/html").end(safeErrorHtml(message));
  });

  return app;
}

async function createServer() {
  const { clientDistDir, templatePath } = getClientPaths();
  const { render } = require("./src/entry-server");

  const template = fs.readFileSync(templatePath, "utf-8");
  const app = createApp({
    template,
    render,
    staticDir: clientDistDir,
  });

  const server = app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });

  const shutdown = () => {
    server.close(() => {
      process.exit(0);
    });
  };

  process.on("SIGTERM", shutdown);
  process.on("SIGINT", shutdown);
}

const isEntry = process.argv[1] && [path.resolve(process.argv[1])].some((p) =>
  p.endsWith("server.js") || p.endsWith("server.ts")
);
if (isEntry) {
  createServer();
}
