import React from 'react'
import { auth, firebaseApi } from '../firebase/firebase';
import { useDispatch } from 'react-redux';
import { removeUser } from '../store/slices/users';

export const Browse = () => {
  const dispatch = useDispatch();
  return (
    <div>

      <button onClick={async() => {
        
        try {
          const res=await firebaseApi.signOutUser(auth);
          console.log(res);
          

        dispatch(removeUser())
        } catch (error) {
          console.log(error);
           
        }
        
      }}>Don't Click</button>
    </div>
  )
}


export default Browse;