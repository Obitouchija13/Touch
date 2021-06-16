import React from "react";
import {useAuth} from "../../auth";
import firebase from "firebase/app";
import "firebase/auth";




export default function Kitchen() {

    const {user} = useAuth();
    return (<div>

      Welcome to the kitchen page.

    <text >{`User ID: ${user ? user.email: "No user signed in"
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
      Sing Out
    </button>
</div>)
}