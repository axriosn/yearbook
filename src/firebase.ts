import { reactive } from "vue";
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithRedirect, onAuthStateChanged, signOut } from "firebase/auth";
// import { }/**/
import { routes } from '@/router';
import {useRoute} from "vue-router";

initializeApp({
  apiKey: "AIzaSyCU5YpnSDueos6WH_yfS44ORPLGNj2FGpo",
  authDomain: "yearbook-a563c.firebaseapp.com",
  projectId: "yearbook-a563c",
  storageBucket: "yearbook-a563c.appspot.com",
  messagingSenderId: "708237611773",
  appId: "1:708237611773:web:ce4cbad19fe937767b2494"
});

const routerRoutes = routes.filter((route) => !route.meta?.doNotShow);

const authState = reactive({
  isSignedIn: false,
  auth: getAuth(),
  isNavbarVisible: false,
  provider: new GoogleAuthProvider(),
  user: {},
  routes: routerRoutes.filter((route) => !route.meta?.reqAuth),
  selectedRoute: useRoute(),

  signInWithGoogle: () => signInWithRedirect(authState.auth, authState.provider),
  signOut: () => signOut(authState.auth),
  signInOut: () => authState.isSignedIn ? authState.signOut() : authState.signInWithGoogle(),
});

onAuthStateChanged(authState.auth, (user) => {
  authState.isSignedIn = !!user;
  authState.user = user ?? {};

  authState.routes = routerRoutes.filter((route) => !!user || !route.meta?.reqAuth)
})

export default authState;