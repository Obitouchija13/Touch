import {AuthProvider} from '../auth';
import firebase from "firebase/app";
import "firebase/auth";
import loadFb from "../firebase.config";
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import TopBar from '../components/topbar';
import { Col, Container, Row } from 'react-bootstrap';
import '../styles/globals.css';



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
    
      <AuthProvider>
            <Component {...pageProps} />
      </AuthProvider>
    
  );
}

export default MyApp;


