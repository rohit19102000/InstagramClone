import { Box, Container, Flex } from "@chakra-ui/react"
import Feedposts  from '../../Components/FeedPosts/FeedPosts'
function HomePage() {
  return (
    <Container maxW={"container.lg"}>
   <Flex gap={20} >

    <Box flex={2} py={10} >
    <Feedposts/>
    </Box>  
    <Box 
    flex={3} 
    mr={20} 
    display={{base:"none",lg:"block"}} 
    maxW={"300px"} 

    >
      suggested
    </Box>  
   </Flex>
    </Container>
  )
}

export default HomePage