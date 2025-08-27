import { createContext, useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import {auth } from '../firebase/firebase.init'
export const AuthContext=createContext(null);
const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)
    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email ,password)
    }
    const signInUser=(email,password)=>{
       return signInWithEmailAndPassword(auth,email,password)
    }
    const updateProfiles=(name,photo)=>{
       return updateProfile(auth.currentUser,{
             displayName:name,photoURL:photo
        })
    }
    const value={
         createUser,
          updateProfiles,
          signInUser,
          user,
          setUser
    }
    return (
        <div>
            <AuthContext.Provider value={value}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;