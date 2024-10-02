import { useEffect } from "react";
import { auth, firebaseApi } from "../firebase/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../store/slices/users";
import { useNavigate } from "react-router-dom";

const useAuthenticationHandler = () => {

  const navigate = useNavigate();  

  const dispatch = useDispatch();

  useEffect(() => {
    firebaseApi.authChange(auth, (user) => {
      if (user) {
        const { uid, displayName, email } = user;
        dispatch(addUser({ uid, displayName, email }));
        navigate('/browse');
      } else {
        dispatch(removeUser());
        navigate('/')
      }
    });
  }, []);
};

export default useAuthenticationHandler;
