import React from "react";
import {useAuth} from "../../auth";
import firebase from "firebase/app";
import "firebase/auth";




export default function Kitchen() {

    const {user} = useAuth();
    return (<div >
      <div className="row">
        <h1>Touch</h1>
      </div>
      <div className="row">
        <div className="column">
          Opciones:
          <div onClick={toggle1} >
          Box 1
        </div>
        <div onClick={toggle2}  >
          Box 2
        </div>
        <div onClick={toggle3} >
          Box 3
        </div>
        </div>
        <div className="column">
          Contenido:          
          <div  id="b1" className="containerTab" style={{display: showMe1?"block":"none"}}>
            <span onClick={toggle1} className="closebtn" >&times;</span>
            <h2>Box 1</h2>
            <p>Lorem ipsum dolor sit amet, te quo doctus abhorreant, et pri deleniti intellegat, te sanctus inermis ullamcorper nam. Ius error diceret deseruisse ad</p>
          </div>
          <div  id="b2" className="containerTab" style={{display: showMe2?"block":"none"}}>
            <span onClick={toggle2} className="closebtn">&times;</span>
            <h2>Box 2</h2>
            <p>Lorem ipsum dolor sit amet, te quo doctus abhorreant, et pri deleniti intellegat, te sanctus inermis ullamcorper nam. Ius error diceret deseruisse ad</p>
          </div>
          <div id="b3"  className="containerTab" style={{display: showMe3?"block":"none"}}>
            <span onClick={toggle3} className="closebtn" >&times;</span>
            <h2>Box 3</h2>
            <p>Lorem ipsum dolor sit amet, te quo doctus abhorreant, et pri deleniti intellegat, te sanctus inermis ullamcorper nam. Ius error diceret deseruisse ad</p>
          </div>
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
          
    </div>)
}