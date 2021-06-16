import React, {useState} from "react"
import loadFb from "../firebase.config";

import "firebase/auth";

import { useAuth } from "../auth";
import firebase from "firebase/app";
import "firebase/database";
import TopBar from '../components/topbar';
import { Container, Row, Col } from "reactstrap";

export default function Login(){
    
    
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [rol, setRol] = useState("");
    var db = firebase.firestore();
    
    return(
    
    
        <div>
                
                    <input onChange={(e)=> setEmail(e.target.value)}
                    type="email"
                    id="emailAddress"
                    value={email}
                    aria-describedby="email-helper-text">
                    </input>
             
                
                
                    <input onChange={(e)=> setPass(e.target.value)}
                    type="password"
                    id="pass"
                    value={pass}
                    aria-describedby="password-helper-text">
                        
                    </input>
              
                
                
                <input onChange={(e)=> setRol(e.target.value)}
                type="text"
                id="rol"
                value={rol}
                placeholder="Waiter/Kitchen/Owner"
                aria-describedby="rol-helper-text">
                    
                </input>
            
                
                
                
                    <button minWidth="40%" variant="solid"
                    variantColor="blue" isDisabled={email === "" || pass===""}
                    onClick={async () => {
                        await firebase.auth().createUserWithEmailAndPassword
                        (email,pass).then(function() {
                            if(rol == "Owner"){
                                window.location.href = "/owner/owner"
                            }else if(rol == "Waiter"){
                                window.location.href = "/waiter/index"
                            }else if(rol == "Chef"){
                                window.location.href = "/kitchen/kitchen"
                            }
                        }).catch(function (error) {
                            const message = error.message;
                            toast({
                                title: "An error occured",
                                description: message,
                                status:"error",
                                duration: 9000,
                                isClosable: true,
                            })
                            
                        })
                       
                        
                        
                        
                        
                    }}>
                        Create Account
                    </button>
                    <button minWidth="40%" variant="solid"
                    variantColor="blue" isDisabled={email === "" || pass===""}
                    onClick={async () => {
                        await firebase.auth().signInWithEmailAndPassword
                        (email,pass).then(function() {
                            if(rol == "Owner"){
                                window.location.href = "/owner/owner"
                            }else if(rol == "Waiter"){
                                window.location.href = "/waiter"
                            }else if(rol == "Chef"){
                                window.location.href = "/kitchen/kitchen"
                            }
                        }).catch(function (error) {
                            const message = error.message;
                            toast({
                                title: "An error occured",
                                description: message,
                                status:"error",
                                duration: 9000,
                                isClosable: true,
                            })
                            
                        })
      
                    }}>
                        Login
                    </button>
                    </div>
    );
}