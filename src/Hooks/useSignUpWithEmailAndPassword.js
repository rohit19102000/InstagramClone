
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth ,Firestore} from '../Firebase/firebase'
import { doc, setDoc } from 'firebase/firestore';
const useSignUpWithEmailAndPassword = () => {
const [
    CreateUserWithEmailAndPassword,
    user,
    loading,
    error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const signup =async(inputs) =>{
        
        if(!inputs.email || !inputs.password || !inputs.username ||!inputs.fullName){
            console.log("Please fill all the fields")
            return
        }

        try{
            const newUser = await CreateUserWithEmailAndPassword(inputs.email, inputs.password)
            if(!newUser && error){
                console.log(error)
                    return
                
            }

            if(newUser){
                const userDoc = {
                    uid:newUser.user.uid,
                    email:inputs.email,
                    username:inputs.username,
                    fullName:inputs.fullName,
                    bio:"",
                    profilePicUrl:"",
                    followers:[],
                    following:[],
                    posts:[],
                    createdAt:Date.now(),
                }
                await setDoc(doc(Firestore,"users",newUser.user.uid),userDoc);
                localStorage.setItem("user-info",JSON.stringify(userDoc));
            }
        }catch(error){
            console.log(error);
        }
    }
    
    return  { loading,error,signup } 
}

export default useSignUpWithEmailAndPassword
