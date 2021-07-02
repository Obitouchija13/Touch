import React, { useState } from "react";
import {useAuth} from "../../auth";
import firebase from "firebase/app";
import "firebase/auth";

import { useRouter } from 'next/router'

export default function Owner() {
  const {user} = useAuth();
  var db = firebase.firestore();
  const router = useRouter();
  var doneTheStuff;
  
  function loadRestaurants() {
    if (user && !doneTheStuff) {
      doneTheStuff = true;
      db.collection("restaurants").where("ownermail", "==", user.email )
        .get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              var elem = document.createElement('div');
              var elemText= document.createTextNode(doc.data().name);
              elem.appendChild(elemText);
              var e = document.getElementById("restaurants");
              elem.classList.add('column');
              elem.addEventListener('click', function(){
                router.push({
                  pathname: '/owner/restaurant',
                  query: { email: doc.data().email,name: doc.data().name},
              })
            });
              e.appendChild(elem);
              console.log(doc.id, " => ", doc.data());
            });
        })
        .catch((error) => {
            console.log("Error getting documents: ", error);
        });
    }
  };
  loadRestaurants();
    return (
      <div>
        <div className="row">
          <div className="column">
            <h1>Touch</h1>
          </div>
          <div  className='column'><text >{`User ID: ${user ? user.email: "No user signed in"
        }`}</text>
        <button variant="solid" variantColor="blue"
              width="100%" isDisabled={!user} onClick={async () => {
                  await firebase.auth().signOut().then(() => {
                      window.location.href = "/login";
                  }).catch((error) => {
                      const message = error.message;
                      toast({
                          title: "An error occured",
                          description: message,
                          status:"error",
                          duration: 9000,
                          isClosable: true,
                      });
                  });
              }}>
                Ajustes de perfil
            </button>
        <button variant="solid" variantColor="blue"
              width="100%" isDisabled={!user} onClick={async () => {
                  await firebase.auth().signOut().then(() => {
                      window.location.href = "/login";
                  }).catch((error) => {
                      const message = error.message;
                      toast({
                          title: "An error occured",
                          description: message,
                          status:"error",
                          duration: 9000,
                          isClosable: true,
                      });
                  });
              }}>
                Sing Out
            </button>
            
            </div>
        </div>
        <div className="row" >  
          <div id="restaurants"></div>
          
 
        </div>
      </div>

              
      
            
            
      );
}