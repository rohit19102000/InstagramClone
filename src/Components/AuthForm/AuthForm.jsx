import { Box, Flex, Image, Text, VStack } from "@chakra-ui/react"
import { useState } from "react"
import Login from "./Login";
import SignUp from "./SignUp";
import GoogleAuth from "./GoogleAuth";

function AuthForm() {
 
    const [isLogIn, setIsLogIn] = useState(false);

    



return (
        <>
   <Box border={"1px solid gray"} borderRadius={4} padding={5} >
    <VStack spacing={4}>
    <Image src="/logo.png" h={24} cursor={"pointer"} alt="instagram "/>
  

        {isLogIn ? <Login/> : <SignUp/>}


    {/*  or section */}
    <Flex alignItems={"center"}justifyContent={"center"}  my={4} gap={1} w={"full"}>
        <Box flex= {2} h={"1px"} bg={"gray.400 "} />
        <Text mx={1} color={"white"}>
            or
        </Text>
        <Box flex= {2} h={"1px"} bg={"gray.400 "} />
    </Flex>

    <GoogleAuth/> 

    </VStack>
   </Box>

   <Box>

   </Box>
<Box border={"1px asolid gray "} borderRadius={4} padding={5}>

<Flex alignItems={"center"} justifyContent={"center"}>

<Box mx={2} fontSize={14}>
{isLogIn? "Dont have an account?": "already have an account?"}


</Box>
<Box onClick={() => setIsLogIn(!isLogIn)} color={"blue.500"} cursor={"pointer"}>

{isLogIn? "Sign up":"log in"}

</Box>
</Flex>
</Box>
   </>
    )
}

export default AuthForm