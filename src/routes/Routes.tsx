import { Suspense, lazy } from "react";
import { Routes as AppRoutes, Route } from "react-router-dom";
import Layout from "./Layout";
import HomePage from "../pages/HomePage";
import PageSkeleton from "../components/PageSkeleton";

const DetailPage = lazy(() => import("../pages/DetailPage"));
const WishListPage = lazy(() => import("../pages/WishListPage"));

export default function Routes() {
  return (
    <AppRoutes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/movie/:id"
          element={
            <Suspense fallback={<PageSkeleton />}>
              <DetailPage />
            </Suspense>
          }
        />
        <Route
          path="/wishlist"
          element={
            <Suspense fallback={<PageSkeleton />}>
              <WishListPage />
            </Suspense>
          }
        />
      </Route>
    </AppRoutes>
  );
}
