import {AuthProvider} from '../auth';
import {CSSReset,ThemeProvider} from "@chakra-ui/core";
import firebase from "firebase/app";
import "firebase/auth";
import loadFb from "../firebase.config";
import Router from 'next/router'
import { useEffect } from 'react'
import { useRouter } from 'next/router'




function MyApp({ Component, pageProps }) {
  
  const router = useRouter();
  loadFb();
  useEffect(() => {
    
    firebase.auth().onAuthStateChanged(function(user) {
      if (!user) {
        // User is not signed in.
        router.push('/login');
      }
    });
  
}, [])
  
  
  return (
    <ThemeProvider>
      <CSSReset />
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </ThemeProvider>
  );
}

export default MyApp;


