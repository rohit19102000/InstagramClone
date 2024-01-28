
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth ,Firestore} from '../Firebase/firebase'
import {collection, doc,getDocs,setDoc,where ,query} from 'firebase/firestore';
import useShowToast from './useShowToast';
import useAuthStore from '../Store/authStore'

const useSignUpWithEmailAndPassword = () => {
const [ CreateUserWithEmailAndPassword, ,loading, error,] = useCreateUserWithEmailAndPassword(auth);
const showToast= useShowToast()
const loginUser = useAuthStore(state => state.login);    

const signup =async(inputs) =>{

        if(!inputs.email || !inputs.password || !inputs.username ||!inputs.fullName){
            showToast("Error","please fill all the fields","error");
            return;
        }

        const usersRef = collection(Firestore,'users');
        const q =query(usersRef,where("username","==",inputs.username));
        const querySnapshot = await getDocs(q)
        if(!querySnapshot.empty){
            showToast("Error","username already exists","error");
            return;
        }
        

        try {
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
                loginUser(userDoc);
            }
        }catch(error){
            showToast("Error",error.message,"error");
        }
    }
    
    return  { loading,error,signup } 
}

export default useSignUpWithEmailAndPassword
