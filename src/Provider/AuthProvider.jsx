import { useEffect, useState } from "react";
import { createContext } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup,signOut } from "firebase/auth";

import app from "../firebase/firebase.config";
export const AuthContex = createContext(null)
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState('')
    const [loadding, setloadding] = useState(true)
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();


    const register = (email, password) => {
        setloadding(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const login = (email, password) => {
        setloadding(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const googlePopUp = () => {
        setloadding(true)
        return signInWithPopup(auth, provider)
    }
    const logOut = () => {
        setloadding(true)
        return signOut(auth)
    }

 

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setloadding(false)
        })
        return () => {
            unsubscribe;
        }
    }, [])

    const value = {
        user, loadding, register, login, googlePopUp,logOut
    }



    return (
        <AuthContex.Provider value={value}>
            {children}
        </AuthContex.Provider>
    );
};

export default AuthProvider;