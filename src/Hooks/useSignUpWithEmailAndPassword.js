
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth ,Firestore} from '../Firebase/firebase'
import { doc, setDoc } from 'firebase/firestore';
import useShowToast from './useShowToast';
const useSignUpWithEmailAndPassword = () => {
const [ CreateUserWithEmailAndPassword, ,loading, error,] = useCreateUserWithEmailAndPassword(auth);
const showToast= useShowToast()
const signup =async(inputs) =>{
        
        if(!inputs.email || !inputs.password || !inputs.username ||!inputs.fullName){
            showToast("Error","please fill all the fields","error");
            return;
        }
        
        try{
            const newUser = await CreateUserWithEmailAndPassword(inputs.email, inputs.password)
            if(!newUser && error){
                showToast("Error",error.message,"error");
                    return;
                
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
            showToast("Error",error.message,"error");
        }
    }
    
    return  { loading,error,signup } 
}

export default useSignUpWithEmailAndPassword
