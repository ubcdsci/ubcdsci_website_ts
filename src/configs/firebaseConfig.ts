import type { FirebaseOptions } from "firebase/app";
import { initializeApp } from "firebase/app";
import { initializeAppCheck, ReCaptchaV3Provider } from "firebase/app-check";

import { getAuth, browserLocalPersistence } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Configurations for Firebase.
// TODO: Change to production config when deploying.
const firebaseConfig: FirebaseOptions = {
	apiKey: "AIzaSyCiSduBcerHcnvoLBVuaee5wqXTlgUdLX8",
	authDomain: "ubc-dsciclub-site.firebaseapp.com",
	projectId: "ubc-dsciclub-site",
	storageBucket: "ubc-dsciclub-site.appspot.com",
	messagingSenderId: "1029258542273",
	appId: "1:1029258542273:web:63fb44250683a1014de840",
};

const app = initializeApp(firebaseConfig);

initializeAppCheck(app, {
	provider: new ReCaptchaV3Provider("6Lex_ysnAAAAAC3DzwneICZeitx4saCGjiAh-R82"),
	isTokenAutoRefreshEnabled: true,
});

const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);

auth.setPersistence(browserLocalPersistence);

export { db, storage, auth };
