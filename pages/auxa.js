
        <Flex>
            <div className="row">
        <div className="column">
          <div style={{color: 'black'}} onClick={toggle1} >
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

          <div  id="b1" className="containerTab" style={{display: showMe1?"block":"none",background:'green'}}>
            <span onClick={toggle1} className="closebtn" >&times;</span>
            <h2>Box 1</h2>
            <p>Lorem ipsum dolor sit amet, te quo doctus abhorreant, et pri deleniti intellegat, te sanctus inermis ullamcorper nam. Ius error diceret deseruisse ad</p>
          </div>
          <div  id="b2" className="containerTab" style={{display: showMe2?"block":"none",background:'green'}}>
            <span onClick={toggle2} className="closebtn">&times;</span>
            <h2>Box 2</h2>
            <p>Lorem ipsum dolor sit amet, te quo doctus abhorreant, et pri deleniti intellegat, te sanctus inermis ullamcorper nam. Ius error diceret deseruisse ad</p>
          </div>
          <div id="b3"  className="containerTab" style={{display: showMe3?"block":"none",background:'green'}}>
            <span onClick={toggle3} className="closebtn" >&times;</span>
            <h2>Box 3</h2>
            <p>Lorem ipsum dolor sit amet, te quo doctus abhorreant, et pri deleniti intellegat, te sanctus inermis ullamcorper nam. Ius error diceret deseruisse ad</p>
          </div>
          </div>
          </div>

            
            
          
          <div class="row">
            <div class="column"><text >{`User ID: ${user ? user.email: "No user signed in"
          }`}</text></div>

            <div class="column"><button variant="solid" variantColor="blue"
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