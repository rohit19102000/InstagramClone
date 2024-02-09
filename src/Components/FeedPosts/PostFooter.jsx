import { Box, Button, Flex, Input, InputGroup, InputRightElement, Text } from "@chakra-ui/react"
import { useRef, useState } from "react"
import { CommentLogo, NotificationsLogo, UnlikeLogo } from '../../assets/constants';
import usePostComment from "../../Hooks/usePostComment";
import useAuthStore from "../../Store/authStore";
import useLikePost from "../../Hooks/useLikePost";

function PostFooter({post ,username,isProfilePage}) {
const { isCommenting, handlePostComment } = usePostComment();
const [comment,setComment] = useState('');
const  authUser =  useAuthStore((state)=> state.user);
const commentRef = useRef(null);
const {handleLikePost, isLiked,  likes} = useLikePost(post);


const handleSubmitComment = async ()=>{
  await handlePostComment(post.id,comment);
  setComment("");
}

return (
    <Box mb={10} marginTop={"auto"}>
    <Flex alignItems={"center"} gap={4} w={"full"} pt={0} mb={2} mt={4}>
    <Box onClick={handleLikePost}
    cursor={"pointer"}
    fontSize={18}
    >
    {/* notifications logo --  liked ,  unlike logo -  not liked  */}
    {!isLiked ? <NotificationsLogo/> : <UnlikeLogo/> }
    </Box>
    <Box cursor={"pointer"}
    fontSize={18}
    onClick={() => commentRef.current.focus()}
    >
      <CommentLogo/>
    </Box>
    </Flex>
    <Text fontWeight={600}  fontSize={"sm"}>
      {likes} likes
    </Text>
   {!isProfilePage && (

    <>
      <Text fontSize='sm' fontWeight={700}>
    {username}_{" "} 
      <Text as='span' fontWeight={400}>
        Feeling good
      </Text>
    </Text>
      <Text fontSize='sm' color={"gray"}>
        view all 1,000 comments
      </Text>
    </>
   )}
   {authUser && (

<Flex 
alignItems={"center"}
gap={2}  
justifyContent={"space-between"}
w={"full"}
>
  <InputGroup>
  <Input variant={"flushed"} placeholder={"Add a comment..."} fontSize={14} 
  onChange={(e)=>setComment(e.target.value)}
  value={comment}
  ref={commentRef}
  />
    <InputRightElement>
    <Button 
    fontSize={14}
    color={"blue.500"}
    fontWeight={600}
    cursor={"pointer"}
    _hover={{color:"White"}}
    bg={"transparent"}  
    onClick={handleSubmitComment}
    isLoading={isCommenting}
    >
      post
    </Button>
    </InputRightElement>

  
  </InputGroup>

</Flex>
   ) }
    
    </Box>
  )
}

export default PostFooter