import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../Header";

export default function Layout() {
  return (
    <>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <Header />
    </>
  );
}
