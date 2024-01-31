import { Flex, Image, Text } from "@chakra-ui/react"
import { useSignInWithGoogle } from "react-firebase-hooks/auth"
import { auth, firestore } from "../../Firebase/firebase"
import  useShowToast  from "../../Hooks/useShowToast"
import useAuthStore  from "../../Store/authStore"
import { doc, setDoc } from "firebase/firestore"

function GoogleAuth({prefix}) {

  const [signInWithGoogle, , , error] =useSignInWithGoogle(auth);
  const showToast = useShowToast();
  const loginUser = useAuthStore((state)=> state.login);



    const handleGoogleAuth = async ()=>{
      try{
        
        const newUser = await signInWithGoogle();
        if(!newUser && error){
          showToast("Error",error.message,"error");
          return ;
        }

        if(newUser){
          const userDoc = {
          uid:newUser.user.uid,
          email: newUser.user.email,
          username:newUser.user.email.split("@")[0],
          fullName:newUser.user.displayName,
          bio:"",
          profilePicUrl:newUser.user.photoURL,
          followers:[],
          following:[],
          posts:[],
          createdAt:Date.now(),
        };
        await setDoc(doc(firestore,"users",newUser.user.uid),userDoc);
        localStorage.setItem("user-info",JSON.stringify(userDoc));
        loginUser(userDoc);
    }
      }catch(error){
        showToast("Error",error.message,"error");


      }
    }

  return (
    <Flex alignItems={"center"} justifyContent={"center"}  cursor={"pointer"} onClick={handleGoogleAuth}>
<Image src="/google.png" w={5} alt="Google logo" />
    <Text mx="2" color={"blue.500"}>{prefix} with google  </Text>
    </Flex>
  )
}

export default GoogleAuth