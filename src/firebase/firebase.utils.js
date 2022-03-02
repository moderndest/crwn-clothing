import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyCXdsYuX8sShOGz62awPB_Ove0ToQIwdQY",
    authDomain: "crwn-db-62afb.firebaseapp.com",
    projectId: "crwn-db-62afb",
    storageBucket: "crwn-db-62afb.appspot.com",
    messagingSenderId: "799772922490",
    appId: "1:799772922490:web:935a1d43ba2f0b8f2ba1c3",
    measurementId: "G-ZLRY002ETX"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })

        }catch(error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
};



export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;