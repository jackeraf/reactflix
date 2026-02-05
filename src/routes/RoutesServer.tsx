import { Routes as AppRoutes, Route } from "react-router-dom";
import Layout from "./Layout";
import HomePage from "../pages/HomePage";
import DetailPage from "../pages/DetailPage";
import WishListPage from "../pages/WishListPage";

export default function RoutesServer() {
  return (
    <AppRoutes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/movie/:id" element={<DetailPage />} />
        <Route path="/wishlist" element={<WishListPage />} />
      </Route>
    </AppRoutes>
  );
}
