import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ErrorBoundary from "./components/ErrorBoundary";
import RoutesServer from "./routes/RoutesServer";

export async function render(url: string) {
  const queryClient = new QueryClient();

  const appHtml = renderToString(
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <StaticRouter location={url}>
          <RoutesServer />
        </StaticRouter>
      </QueryClientProvider>
    </ErrorBoundary>
  );

  return { appHtml };
}
