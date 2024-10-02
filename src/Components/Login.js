import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkEmailNamePasswordForLogin } from "../utils/validation";
import { auth, firebaseApi } from "../firebase/firebase";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
    apiError: "",
  });

  const name = useRef(null);
  const password = useRef(null);
  const email = useRef(null);

  const handleAlreadyRegistered = () => setIsSignIn(!isSignIn);

  const signUpUser = async ({ name, email, password } = {}) => {
    try {
      return await firebaseApi.signUpWithEmailPassword(auth, email, password);
    } catch (error) {
      console.log("signupError: ", error);

      const errorCode = error.code;
      const errorMessage = error.message;
      setErrors({ apiError: errorCode + "  " + errorMessage });
    }
  };

  const signInUser = async ({ email, password } = {}) => {
    try {
      return await firebaseApi.signInWithEmailPassword(auth, email, password);
    } catch (error) {
      console.log("signinError: ", error);

      const errorCode = error.code;
      const errorMessage = error.message;
      setErrors({ apiError: errorCode + "  " + errorMessage });
    }
  };

  const handleSigninSignUp = () => {
    const validationResponse = checkEmailNamePasswordForLogin({
      name: name.current?.value,
      password: password.current.value,
      email: email.current.value,
    });

    setErrors(validationResponse);

    for (const key in validationResponse) {
      if (validationResponse[key]) return;
    }

    if (isSignIn)
      return signInUser({
        email: email.current?.value,
        password: password.current.value,
      });

    signUpUser({
      name: "",
      email: email.current?.value,
      password: password.current.value,
    });
  };

  return (
    <div>
      <Header />
      <div>
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/bfc0fc46-24f6-4d70-85b3-7799315c01dd/web/IN-en-20240923-TRIFECTA-perspective_74e21c19-980e-45ef-bd6c-78c1a6ce9381_small.jpg" />
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute flex-col top-0 flex  items-center my-36 mx-auto left-0 right-0 w-[30%] bg-black min-h-80 py-8 rounded-lg font-sans text-white px-8"
      >
        <p className="text-white text-xl font-bold mt-2">
          {isSignIn ? "Sign In" : "Sign Up"}
        </p>
        {!isSignIn && (
          <>
            <input
              ref={name}
              className="px-2 py-2 m-2 mt-5 bg-gray-700 rounded-lg w-full"
              placeholder="Please Enter Full Name"
            ></input>
            {errors.name && (
              <p className="text-md text-red-500 font-semibold">
                {errors.name}
              </p>
            )}
          </>
        )}

        <input
          ref={email}
          type="email"
          className="px-2 py-2 m-2 mt-5 bg-gray-700 rounded-lg w-full"
          placeholder="Please Enter Email"
        ></input>
        {errors.email && (
          <p className="text-md text-red-500 font-semibold">{errors.email}</p>
        )}

        <input
          ref={password}
          type="password"
          className="px-2 py-2 m-2 mt-5 bg-gray-700 rounded-lg w-full"
          placeholder="Please Enter Password"
        ></input>
        {errors.password && (
          <p className="text-md text-red-500 font-semibold">
            {errors.password}
          </p>
        )}

        <button
          onClick={handleSigninSignUp}
          className="px-2 py-2 m-2 mt-5 bg-red-600 rounded-lg w-full"
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>

        <p onClick={handleAlreadyRegistered} className="mt-5 cursor-pointer">
          {isSignIn
            ? "New to Netflix? Sign Up Now"
            : "Already registered? Sign In Now."}
        </p>
        {errors.apiError && (
          <p className="text-md text-red-500 font-semibold">
            {errors.apiError}
          </p>
        )}
      </form>
    </div>
  );
};

export default Login;
