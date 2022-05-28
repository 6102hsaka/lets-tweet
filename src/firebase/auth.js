import { 
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut
} from "firebase/auth";

import app from './config';


const auth = getAuth(app);

const registerUser = (email, password) => createUserWithEmailAndPassword(auth, email, password);

const loginUser = (email, password) => signInWithEmailAndPassword(auth, email, password);

const logout = () => signOut(auth);

export {
    registerUser, loginUser, onAuthStateChanged, logout
}
