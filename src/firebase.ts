import { reactive } from "vue";
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithRedirect, onAuthStateChanged, signOut } from "firebase/auth";
import { getFirestore} from 'firebase/firestore';
import { routes } from '@/router';
import {useRoute} from "vue-router";
import bulmaToast from 'bulma-toast';

initializeApp({
  apiKey: "AIzaSyCU5YpnSDueos6WH_yfS44ORPLGNj2FGpo",
  authDomain: "yearbook-a563c.firebaseapp.com",
  projectId: "yearbook-a563c",
  storageBucket: "yearbook-a563c.appspot.com",
  messagingSenderId: "708237611773",
  appId: "1:708237611773:web:ce4cbad19fe937767b2494"
});

const tempAuthObject = getAuth();

const authState = reactive({
  isSignedIn: !!tempAuthObject.currentUser,
  auth: tempAuthObject,
  isNavbarVisible: false,
  provider: new GoogleAuthProvider(),
  user: tempAuthObject.currentUser ?? {},
  routes: routes.filter((route) => !route.meta?.reqAuth),
  selectedRoute: useRoute(),

  signInWithGoogle: () => signInWithRedirect(authState.auth, authState.provider),
  signOut: () => signOut(authState.auth),
  signInOut: () => authState.isSignedIn ? authState.signOut() : authState.signInWithGoogle(),
  displayError: (message: string) => bulmaToast.toast({ message, type: 'is-danger' })
});

onAuthStateChanged(authState.auth, (user) => {
  authState.isSignedIn = !!user;
  authState.user = user ?? {};

  authState.routes = routes.filter((route) => !!user || !route.meta?.reqAuth)
})

const db = getFirestore();

export default authState;
export { db };