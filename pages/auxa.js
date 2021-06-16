
        <Flex>
        <Box w={500} p={4} my={12} mx="auto">
            <Heading as="h2" textAlign="left">
                Login
            </Heading>
            <FormControl isRequired>
                <FormLabel htmlFor="email">Email</FormLabel>
                <Input onChange={(e)=> setEmail(e.target.value)}
                type="email"
                id="emailAddress"
                value={email}
                aria-describedby="email-helper-text">
                </Input>
            </FormControl>
            <FormControl isRequired>
            
                <FormLabel htmlFor="password">Password</FormLabel>
                <Input onChange={(e)=> setPass(e.target.value)}
                type="password"
                id="pass"
                value={pass}
                aria-describedby="password-helper-text">
                    
                </Input>
            </FormControl>
            <FormControl isRequired>
            
            <FormLabel htmlFor="rol">Rol</FormLabel>
            <Input onChange={(e)=> setRol(e.target.value)}
            type="text"
            id="rol"
            value={rol}
            placeholder="Waiter/Kitchen/Owner"
            aria-describedby="rol-helper-text">
                
            </Input>
        </FormControl>
            
            
            <Stack justify="center" mt={6} isInline spacing={10}>
                <Button minWidth="40%" variant="solid"
                variantColor="blue" isDisabled={email === "" || pass===""}
                onClick={async () => {
                    await firebase.auth().createUserWithEmailAndPassword
                    (email,pass).then(function() {
                        if(rol == "Owner"){
                            window.location.href = "/owner/owner"
                        }else if(rol == "Waiter"){
                            window.location.href = "/waiter/waiter"
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
                </Button>
                <Button minWidth="40%" variant="solid"
                variantColor="blue" isDisabled={email === "" || pass===""}
                onClick={async () => {
                    await firebase.auth().signInWithEmailAndPassword
                    (email,pass).then(function() {
                        if(rol == "Owner"){
                            window.location.href = "/owner/owner"
                        }else if(rol == "Waiter"){
                            window.location.href = "/waiter/waiter"
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
                </Button>
            </Stack>
        </Box>
    </Flex>