import React from "react";
import Link from "next/link";
import {useAuth} from "../auth";
import Container from "../components/container";
import {Flex, Box, Button, Text, Heading, Stack} from "@chakra-ui/core";
import firebase from "firebase/app";
import "firebase/auth";




export default function Authenticated() {
  

  const {user} = useAuth();

  if(!user)
    return (<p>Redirecting...</p>);
    
    return (
      <Container>
        <Flex>
          <Box w={500} p={4} my={12} mx="auto">
            <Heading as="h2" textAlign="center">
              Welcome to the home page.
            </Heading>
            <Text mt={8} textAlign="center">{`User ID: ${user ? user.email: "No user signed in"
          }`}</Text>
          <Stack
          mt={8}
          alignItems="center"
          justifyContent="center"
          isInline
          width="100%"
          >
            <Button variant="solid" variantColor="blue"
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
            </Button>
          </Stack>
          </Box>
        </Flex>
      </Container>
      
        
      
    )
  
}