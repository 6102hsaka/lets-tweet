import { 
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    updateProfile,
    signOut
} from "firebase/auth";

import app from './config';


const auth = getAuth(app);

const registerUser = (email, password) => createUserWithEmailAndPassword(auth, email, password);

const loginUser = (email, password) => signInWithEmailAndPassword(auth, email, password);

const updateUserProfile = userDetail => updateProfile(auth.currentUser, userDetail);

const logout = () => signOut(auth);

export {
    registerUser, loginUser, onAuthStateChanged, updateUserProfile, logout
}
