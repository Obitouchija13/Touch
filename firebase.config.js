import firebase from 'firebase';
import '@firebase/firestore';




const loadFb= () => {
    try {
        const config = {
            apiKey: process.env.FIREBASE_API_KEY,
            databaseURL: process.env.FIREBASE_DATABASE,
            storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
            messagingSenderId: process.env.FIREBASE_SENDER_ID,
            appId: process.env.FIREBASE_APP_ID,
            authDomain: process.env.FIREBASE_AUTH_DOMAIN,
            projectId: process.env.FIREBASE_PROJECT_ID,
        };
        firebase.initializeApp(config);

        }catch (error) {

            if (!/already exist/.test(error.message)){
                console.error('Firebase already exist',error.stack);
            }
            
        }

        return firebase;
};

export default loadFb;