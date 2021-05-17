import React from "react";
import Link from "next/link";
import {useAuth} from "../auth";
import Container from "../components/container";
import {Flex, Box, Button, Text, Heading, Stack} from "@chakra-ui/core";




export default function Home() {

  
   

  
    return (
      <Container>
            <Heading as="h2" textAlign="center">
              Welcome to the index page.
            </Heading>   
      </Container>
      
        
      
    )
  
}
