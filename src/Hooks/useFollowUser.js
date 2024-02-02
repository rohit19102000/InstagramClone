import { useEffect, useState } from "react"
import useAuthStore from "../Store/authStore";
import useUserProfileStore from "../Store/userProfileStore";
import useShowToast from "./useShowToast";
import { firestore } from "../Firebase/firebase";
import { arrayRemove, arrayUnion, doc, updateDoc } from "firebase/firestore";


const useFollowUser = (userId) => {
 const [isUpdating,setIsUpdating] = useState(false);
 const [isFollowing,setIsFollowing] = useState(false);
const { authUser,setAuthUser }  =useAuthStore();
const { userProfile,setUserProfile } = useUserProfileStore();
const showToast = useShowToast();

const handleFollowUser = async () =>{
    setIsUpdating(true)
    try{
        const currentUserRef = doc(firestore,"users",authUser.uid)
        const userToFollowOrUnfollow = doc(firestore,"users",userId)

        await updateDoc(currentUserRef,{
            following:isFollowing ? arrayRemove(userId):arrayUnion(userId)
        })

        await updateDoc(userToFollowOrUnfollow,{
            followers:isFollowing ? arrayRemove(authUser.uid):arrayUnion(authUser.uid) 
        })

        if(isFollowing) {
            // follow


        }else{
            // unFollow
            
        }
    }catch(error){
        showToast("Error",error.message,"error");
    }finally{
        setIsUpdating(false);
    }
}




 useEffect(() => {
    if(authUser){
        const isFollowing = authUser.following.includes(userId)
        setIsFollowing(isFollowing);
    }

 },[authUser,userId]);

 return{isUpdating,isFollowing,handleFollowUser}
}

export default useFollowUser
