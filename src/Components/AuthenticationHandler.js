import React from "react";

import { useEffect } from "react";
import { auth, firebaseApi } from "../firebase/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../store/slices/users";
import { useNavigate } from "react-router-dom";
const AuthenticationHandler = () => {
  console.log("rednerrrrrrrr");

  const navigate = useNavigate();

  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = firebaseApi.authChange(auth, (user) => {
      console.log("anuj user = ", user);

      if (user) {
        const { uid, displayName, email } = user;
        dispatch(addUser({ uid, displayName, email }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();

  }, []);
  return <></>;
};

export default AuthenticationHandler;
