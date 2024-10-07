import { Fragment } from "react";
import Navbar from "../component/navigation/Navbar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <Fragment>
      <Navbar />
      <Outlet />
    </Fragment>
  );
}
