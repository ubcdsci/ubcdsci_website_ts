import type { FirebaseOptions } from "firebase/app";
import { initializeApp } from "firebase/app";

import { getAuth, Persistence } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Configurations for Firebase.
// TODO: Move to .env file.
const firebaseConfig: FirebaseOptions = {
	apiKey: "AIzaSyCiSduBcerHcnvoLBVuaee5wqXTlgUdLX8",
	authDomain: "ubc-dsciclub-site.firebaseapp.com",
	projectId: "ubc-dsciclub-site",
	storageBucket: "ubc-dsciclub-site.appspot.com",
	messagingSenderId: "1029258542273",
	appId: "1:1029258542273:web:63fb44250683a1014de840",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);

auth.setPersistence('local' as unknown as Persistence);

export { db, storage, auth };
