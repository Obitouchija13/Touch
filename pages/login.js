import React, {useState} from "react"
import "firebase/auth";
import firebase from "firebase/app";
import "firebase/database";


export default function Login(){
    
    
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [rol, setRol] = useState("");
    var db = firebase.firestore();
    
    
   
    
    return(
    
    
        <div>
                   <div className="row">
                    <h1>Touch</h1>
                    </div>
                    <div className="row">
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

                <select id="ddlViewBy">
                    <option value="owner" selected="selected">Owner</option>
                    <option value="kitchen" >Kitchen</option>
                    <option value="waiter"  >Waiter</option>
                </select>
            
                
                
                
                    <button  variant="solid"
                    variantColor="blue" isDisabled={email === "" || pass===""}
                    onClick={async () => {
                        await firebase.auth().createUserWithEmailAndPassword
                        (email,pass).then(function() {
                            var e = document.getElementById("ddlViewBy");
                            var strUser = e.value;
                                    db.collection("users").doc(email).set({
                                        email: email,
                                        password: pass,
                                    })
                                    .then(() => {
                                        console.log("Document successfully written!");
                                    })
                                    .catch((error) => {
                                        console.error("Error writing document: ", error);
                                    });
                                    window.location.href = "/"+strUser;
                                
                           
                        }).catch(function (error) {
                            const message = error.message;
    
                        })
  
                    }}>
                        Create Account
                    </button>
                    <button minWidth="40%" variant="solid"
                    variantColor="blue" isDisabled={email === "" || pass===""}
                    onClick={async () => {
                        await firebase.auth().signInWithEmailAndPassword
                        (email,pass).then(function() {
                            var e = document.getElementById("ddlViewBy");
                            var strUser = e.value;

                                window.location.href = "/"+strUser;
 
                        }).catch(function (error) {
                            const message = error.message;
   
                        })
                    }}>
                        Login
                    </button>
                    </div>
                </div>
        
        
    );
}