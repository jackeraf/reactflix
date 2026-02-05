import { describe, it } from "node:test";
import assert from "node:assert";
import request from "supertest";
import { createApp } from "./server";

describe("server (createApp)", () => {
  function appWithMocks(overrides?: { template?: string; appHtml?: string }) {
    const template =
      overrides?.template ??
      "<!DOCTYPE html><html><body><!--ssr-outlet--></body></html>";
    const appHtml =
      overrides?.appHtml ?? '<div id="root">Rendered</div>';
    return request(
      createApp({
        template,
        render: async () => ({ appHtml }),
        staticDir: "/tmp/static",
      })
    );
  }

  describe("GET /*", () => {
    it("returns 200 and Content-Type text/html", async () => {
      const res = await appWithMocks().get("/");
      assert.strictEqual(res.status, 200);
      assert.match(res.headers["content-type"] ?? "", /text\/html/);
    });

    it("calls render with request URL", async () => {
      let capturedUrl: string | undefined;
      const captureRender = async (url: string) => {
        capturedUrl = url;
        return { appHtml: "<div>Rendered</div>" };
      };
      const agent = request(
        createApp({
          template: "<html><!--ssr-outlet--></html>",
          render: captureRender,
          staticDir: "/tmp",
        })
      );
      await agent.get("/movie/a1");
      assert.strictEqual(capturedUrl, "/movie/a1");
    });

    it("handles root and arbitrary paths", async () => {
      const urls: string[] = [];
      const captureRender = async (url: string) => {
        urls.push(url);
        return { appHtml: "<div>Rendered</div>" };
      };
      const agent = request(
        createApp({
          template: "<html><!--ssr-outlet--></html>",
          render: captureRender,
          staticDir: "/tmp",
        })
      );
      const root = await agent.get("/");
      const movie = await agent.get("/movie/c1");
      const wishlist = await agent.get("/wishlist");
      assert.strictEqual(root.status, 200);
      assert.strictEqual(movie.status, 200);
      assert.strictEqual(wishlist.status, 200);
      assert.deepStrictEqual(urls, ["/", "/movie/c1", "/wishlist"]);
    });

    it("returns 500 when render throws", async () => {
      const agent = request(
        createApp({
          template: "<html><!--ssr-outlet--></html>",
          render: async () => {
            throw new Error("SSR failed");
          },
          staticDir: "/tmp",
        })
      );
      const res = await agent.get("/");
      assert.strictEqual(res.status, 500);
      assert.ok(res.text.includes("Something went wrong"));
    });
  });

  describe("createApp", () => {
    it("returns an Express app", () => {
      const app = createApp({
        template: "<html><!--ssr-outlet--></html>",
        render: async () => ({ appHtml: "" }),
        staticDir: "/tmp",
      });
      assert.ok(app);
      assert.strictEqual(typeof app.listen, "function");
      assert.strictEqual(typeof app.use, "function");
      assert.strictEqual(typeof app.get, "function");
    });
  });
});
