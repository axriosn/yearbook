import { reactive } from "vue";
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithRedirect, onAuthStateChanged, signOut } from "firebase/auth";
import { getFirestore} from 'firebase/firestore';
import router, { routes } from '@/router';
import * as bulmaToast from 'bulma-toast';
import {ToastType} from "bulma-toast";

initializeApp({
  apiKey: "AIzaSyCU5YpnSDueos6WH_yfS44ORPLGNj2FGpo",
  authDomain: "yearbook-a563c.firebaseapp.com",
  projectId: "yearbook-a563c",
  storageBucket: "yearbook-a563c.appspot.com",
  messagingSenderId: "708237611773",
  appId: "1:708237611773:web:ce4cbad19fe937767b2494"
});

const authObject = getAuth();

const authState = reactive({
  isSignedIn: !!authObject.currentUser,
  auth: authObject,
  isNavbarVisible: false,
  provider: new GoogleAuthProvider(),
  user: authObject.currentUser ?? {},
  routes: routes.filter((route) => !route.meta?.reqAuth),
  selectedRoute: router.currentRoute,

  authStateVerified: new Promise<void>((resolve) => {
    onAuthStateChanged(authObject, (user) => {
      resolve();

      authState.isSignedIn = !!user;
      authState.user = user ?? {};
      authState.routes = routes.filter((route) => !!user || !route.meta?.reqAuth)
    });
  }),

  signInWithGoogle: () => signInWithRedirect(authState.auth, authState.provider),
  signOut: () => signOut(authState.auth),
  signInOut: () => authState.isSignedIn ? authState.signOut() : authState.signInWithGoogle(),
  displayToast: (message: string, type: ToastType) => bulmaToast.toast({ message, type }),
});

const db = getFirestore();

export default authState;
export { db };