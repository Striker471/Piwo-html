import { useEffect, useState } from "react";
import { auth, googleProvider, gitProvider } from "./init";
import {
    signInWithPopup,
    signOut,
} from "firebase/auth"
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";

export const logInWithGoogle = async () => {
    try {
        await signInWithPopup(auth, googleProvider);
    }catch(err){
        console.log({err});
        alert(err.message);
    }
};

export const logInWithGithub = async () => {
    try {
        await signInWithPopup(auth, gitProvider);
    }catch(err){
        console.log({err});
        alert(err.message);
    }
};

export const useAuth = () => {
    const [user, setUser] = useState(null);

    useEffect(() =>{

    }, [])
    return user;
}

export const useUser = () =>{
    const[user,setUser] = useState(null);

    useEffect (() => {
        const unsubscribe = auth.onAuthStateChanged(( user) =>{
            setUser(user);
        });
        return () => unsubscribe();
    },[]);
return user;
};  



export const registerWithEmail = async (email, password, displayName) => {
  const auth = getAuth();
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password)
    const user = userCredential.user;
    
    await updateProfile(user, { displayName });
  } catch (error) {
    console.error(error);
  }
}

export const loginWithEmail = async (email, password) => {
  const auth = getAuth();
  try {
    await signInWithEmailAndPassword(auth, email, password)
  } catch (error) {
    console.error(error);
  }
}

export const logout = () => signOut(auth);

