import { useState, useEffect } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail, updateProfile, signOut } from "firebase/auth";
import initializeAuthentication from './../Firebase/firebase.init';


initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [name, setName] = useState('');

    const auth = getAuth();

    const googleProvider = new GoogleAuthProvider();

    const verifyEmail = () => {
        sendEmailVerification(auth.currentUser)
            .then(result => {
            console.log(result)
        })
    }

    const handleResetPassword = () => {
        sendPasswordResetEmail(auth, email)
            .then(result => {
            
        })
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    const handleNameChange = (e) => {
        setName(e.target.value)
    }

    const handleLogin = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('')
        })
            .catch(error => {
                setError(error.message);
        })
    }

    const handleRegister = (e) => {
        e.preventDefault();
        if (password.length < 6) {
            setError("Password must be at least 6 character long")
        }
        if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
            setError("Password must contain uppercase")
            return;
        }
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const user = result.user;
                console.log(user);
                setError('')
                verifyEmail()
                setUserName('')
            })
            .catch((error) => {
            setError(error.message);
        })
    }

    const setUserName = () => {
        updateProfile(auth.currentUser, { displayName: name })
            .then(result => { });
    }
    
    const signInUsingGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    }

    const logOut = () => {
        signOut(auth)
            .then(() => {
            
        })
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
        })
    }, [])
    
    return {
        user,
        error,
        signInUsingGoogle,
        logOut,
        handleEmailChange,
        handleLogin,
        handleNameChange,
        handlePasswordChange,
        handleResetPassword,
        handleRegister
    }
}


export default useFirebase;