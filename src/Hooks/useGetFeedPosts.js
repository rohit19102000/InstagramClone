import { useEffect, useState } from "react"
import usePostStore from "../Store/postStore";
import useAuthStore from "../Store/authStore";
import useShowToast from "./useShowToast";
import useUserProfileStore  from '../Store/userProfileStore'
import { collection, getDocs, query, where } from "firebase/firestore";
import { firestore } from "../Firebase/firebase";
const useGetFeedPosts = () => {
 const [ isLoading , setIsLoading ] = useState(true);
 const { posts , setPosts } =usePostStore();
 const authUser = useAuthStore ((state)=>state.user);
 const showToast = useShowToast();
 const { setuserProfile } = useUserProfileStore()

useEffect(()=>{
    const getFeedPost = async () =>{
       setIsLoading(true);
       if(authUser.following.length === 0) {
        setIsLoading(false);
        setPosts([]);
        return ;
       }

       const q = query(collection(firestore,"posts"),where("createdBy","in",authUser.following))
        try{
            const querySnapshot = await getDocs(q)
            const feedPosts = [];
            querySnapshot.forEach(doc =>{ 
                feedPosts.push({id:doc.id,...doc.data()})
            })

            feedPosts.sort((a,b) => b.createdAt - a.createdAt);
            setPosts(feedPosts);

        }catch(error){

            showToast("Error",error.message,"error");
        
        }finally{
         
            setIsLoading(false);
        }
    }


    if(authUser) getFeedPost();
 
},[authUser,showToast,setPosts,setuserProfile])
  

return { isLoading , posts };

};

export default useGetFeedPosts;
