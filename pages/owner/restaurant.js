import { useRouter } from "next/router";
import React, { useState } from "react";
import {useAuth} from "../../auth";
import firebase from "firebase/app";
import "firebase/auth";
import { useEffect } from 'react';
import 'reactjs-popup/dist/index.css';

export default function Restaurant() {
    const router = useRouter()
    const [id, setId] = useState("");
    const [zone, setZone] = useState("");
    const [showMe1, setShowMe1] = useState(true);
    const [showMe2, setShowMe2] = useState(false);
    const [showMe3, setShowMe3] = useState(false);
    const {user} = useAuth();
    var db = firebase.firestore();
    useEffect(() => { 
        db.collection("restaurants").doc(router.query.email).collection("tables")
        .get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                var elem = document.createElement('div');
                var elemText= document.createTextNode(doc.id);
                elem.appendChild(elemText);
                var e = document.getElementById("tables");
                elem.classList.add('column');
                elem.addEventListener('click', function(){
                router.push({
                    pathname: '/owner/table',
                    query: { id: doc.id,email: router.query.email}
                })
            });
                e.appendChild(elem);
                console.log(doc.id, " => ", doc.data());
            });
        })
        .catch((error) => {
            console.log("Error getting documents: ", error);
        });
        
        
        },[user]);

 
    
    function toggle2(){
      setShowMe2(!showMe2);
      
    }
    function toggle3(){
      setShowMe3(!showMe3);
      
    }
    function viewTables() {
        setShowMe1(!showMe1);
        
    }
    
    return (<div>


        
 <div >
        <div className="row">
          
     <div className="column">
     <h1 onClick={()=>router.push('/owner')}>Touch&nbsp;</h1><h1 style={{color: 'grey'}}>{
    router.query.name}</h1>
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
        <div className="row">
          <div className="column">
            Opciones:
            <div onClick={viewTables} >
            Mesas
          </div>
          <div onClick={toggle2}  >
            Carta
          </div>
          <div onClick={toggle3} >
            Equipo
          </div>
          </div>
          <div className="column">
            Contenido:          
            
            <div  id="tables" className="row" style={{display: showMe1?"block":"none"}}>
              <span onClick={()=>{setShowMe1(!showMe1)}} >&times;</span>
              <h2>Mesas</h2>
              <div className="column" id="button" onClick={()=>{ 
                  document.getElementById("myForm").style.display = "block";
                  document.getElementById("button").style.display = "none";
                  }}>Añadir mesa</div>
              
              <div id="myForm" className="column" style={{display: 'none'}}>
                  <label>Número de mesa</label>
                    <input onChange={(e)=> setId(e.target.value)}
                    type="text"
                    id="id"
                    value={id}
                    aria-describedby="id-helper-text">
                    </input><label>Zona</label>
                    <input onChange={(e)=> setZone(e.target.value)}
                    type="text"
                    id="zone"
                    value={zone}
                    aria-describedby="zone-helper-text">
                        
                    </input>
                    <div className="column" onClick={()=>{ document.getElementById("myForm").style.display = "none";
                    document.getElementById("button").style.display = "block";
                    db.collection("restaurants").doc(router.query.email).collection("tables").doc(id).set({
                        id: id,
                        ticket: 0,
                        zone: zone,
                        waiter: "empty"
 
                    })
                    .then(() => {
                        console.log("Document successfully written!");
                    })
                    .catch((error) => {
                        console.error("Error writing document: ", error);
                    });
                    
                    
                    }}>Aceptar</div>
                  <div className="column" onClick={()=>{ document.getElementById("myForm").style.display = "none";
                document.getElementById("button").style.display = "block";}}>Cerrar</div>
                
                </div>
            </div>
            <div  id="b2" className="row" style={{display: showMe2?"block":"none"}}>
              <span onClick={toggle2} className="closebtn">&times;</span>
              <h2>Carta</h2>
              <p>Lorem ipsum dolor sit amet, te quo doctus abhorreant, et pri deleniti intellegat, te sanctus inermis ullamcorper nam. Ius error diceret deseruisse ad</p>
            </div>
            <div id="b3"  className="row" style={{display: showMe3?"block":"none"}}>
              <span onClick={toggle3} className="closebtn" >&times;</span>
              <h2>Equipo</h2>
              <p>Lorem ipsum dolor sit amet, te quo doctus abhorreant, et pri deleniti intellegat, te sanctus inermis ullamcorper nam. Ius error diceret deseruisse ad</p>
            </div>
            
          </div>
        </div>           
      </div>
    </div>);
    
}