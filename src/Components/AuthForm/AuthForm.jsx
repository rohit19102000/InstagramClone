import { Box, Button, Flex, Image, Input, Text, VStack } from "@chakra-ui/react"
import { useState } from "react"
import { useNavigate } from "react-router-dom";

function AuthForm() {
 
    const navigate = useNavigate();
    const [isLogIn, setIsLogIn] = useState(false);

    const [inputs,setInputs] = useState({
        email:'',
        password:'',
        confirmPassword:'',
    })
const handleAut =() => {
    if(!inputs.email ||  !inputs.password ){
        alert('Please fill all the  fields ');
        return

    }
    navigate("/");
}



return (
        <>
   <Box border={"1px solid gray"} borderRadius={4} padding={5} >
    <VStack spacing={4}>
    <Image src="/logo.png" h={24} cursor={"pointer"} alt="instagram "/>
    <Input placeholder="Email" fontSize={14} type="email" 
    value={inputs.email} 
    onChange={(e) =>setInputs({...inputs,email:e.target.value})}
    />
    <Input  placeholder="password" fontSize={14} type="password"
        value={inputs.password}
    onChange={(e) =>setInputs({...inputs,password:e.target.value})}
    />


        {isLogIn ? (
    <Input placeholder=" confirm password" fontSize={14} type="password"
    value={inputs.confirmPassword}
    onChange={(e) =>setInputs({...inputs,confirmPassword:e.target.value})}
    />
        ): null}




    <Button w={"full"} colorScheme="blue" fontSize={14} size={"sm"}  onClick={handleAut}>
        {isLogIn ? "sign in": "log in " }
    </Button>

    {/*  or section */}
    <Flex alignItems={"center"}justifyContent={"center"}  my={4} gap={1} w={"full"}>
        <Box flex= {2} h={"1px"} bg={"gray.400 "} />
        <Text mx={1} color={"white"}>
            or
        </Text>
        <Box flex= {2} h={"1px"} bg={"gray.400 "} />
    </Flex>

    <Flex alignItems={"center"} justifyContent={"center"}  cursor={"pointer"}>
<Image src="/google.png" w={5} alt="Google logo" />
    <Text mx="2" color={"blue.500"}>login with google </Text>
    </Flex> 

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

{isLogIn? "Log in":"Sign up"}

</Box>
</Flex>
</Box>
   </>
    )
}

export default AuthForm