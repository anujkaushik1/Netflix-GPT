import React, { useEffect } from "react";
import Header from "./Header";
import Login from "./Login";
import {
  createBrowserRouter,
  RouterProvider,
  useNavigate,
} from "react-router-dom";
import { Browse } from "./Browse";
import { useDispatch } from "react-redux";
import { auth, firebaseApi } from "../firebase/firebase";
import { addUser, removeUser } from "../store/slices/users";

const Body = () => {
  const dispatch = useDispatch();

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);

  useEffect(() => {
    firebaseApi.authChange(auth, (user) => {
      if (user) {
        const { uid, displayName, email } = user;
        dispatch(addUser({ uid, displayName, email }));
      } else {
        dispatch(removeUser());
      }
    });
  }, []);

  return <RouterProvider router={appRouter}></RouterProvider>;
};

export default Body;
