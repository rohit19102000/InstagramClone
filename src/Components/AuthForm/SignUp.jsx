import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react"
import { useState } from "react"
import useSignUpWithEmailAndPassword from "../../Hooks/useSignUpWithEmailAndPassword";

function SignUp() {

    const [inputs,setInputs] = useState({
        fullName:'',
        username:'',
        email:'',
        password:'',

    })
const [showPassword,setShowPassword] = useState(false);
    const { loading ,error,signup } = useSignUpWithEmailAndPassword()    
  return (
    <>

    <Input placeholder="Email" fontSize={14} type="email" 
    value={inputs.email} 
    size={"sm"}
    onChange={(e) =>setInputs({...inputs,email:e.target.value})}
    />
    <Input placeholder="username" fontSize={14} type="text" 
    value={inputs.username} 
    onChange={(e) =>setInputs({...inputs,username:e.target.value})}
    />
    <Input placeholder="Full name" fontSize={14} type="text" 
    value={inputs.fullName}
    size={"sm"}
    onChange={(e) =>setInputs({...inputs,fullName:e.target.value})}
    />

    <InputGroup>
    <Input  
    placeholder="password" fontSize={14}
    type={showPassword ? "text" : "password"}
    value={inputs.password}
    size={"sm"}
    onChange={(e) =>setInputs({...inputs,password:e.target.value})}
    />

    <InputRightElement h={"full"}>
        <Button variant={"ghost"} size={"sm"} onClick={()=> setShowPassword(!showPassword)}>
        {showPassword ? <ViewIcon/> : <ViewOffIcon/>} 
        </Button>


    </InputRightElement>

    </InputGroup>

    <Button w={"full"} colorScheme="blue" fontSize={14} size={"sm"}  onClick={()=>signup(inputs)}>
        sign in 
    </Button>

    </>
  )
}

export default SignUp