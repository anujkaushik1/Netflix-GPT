import React from "react";
import Login from "./Login";
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  useNavigate,
} from "react-router-dom";
import { Browse } from "./Browse";
import AuthenticationHandler from "./AuthenticationHandler";

const Layout = () => {
  return (
    <>
      <AuthenticationHandler />
      <Outlet />
    </>
  );
};

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Login />,
        },
        {
          path: "/browse",
          element: <Browse />,
        },
        {
          path: '/test'
        }
      ],
    },
  ]);

  return <RouterProvider router={appRouter}></RouterProvider>;
};

export default Body;
