import {Link,Box, Flex, Text, VStack } from "@chakra-ui/react"
import SuggestedHeader from "./SuggestedHeader"
import SuggestedUser from "./SuggestedUser"
import useGetSuggestedUsers from "../../Hooks/useGetSuggestedUsers"

function SuggestedUsers() {
  const { isLoading,suggestedUsers } = useGetSuggestedUsers();
//  optional : render loading skeleton
  if(isLoading) return null;
  return (
    <VStack py={8} px={6}gap={4}>
        <SuggestedHeader/>
        {/*  render sauggested users if  there are users that are not yet followed*/}
       
        {suggestedUsers.length !== 0 && (

       <Flex alignItems={"center"} justifyContent={"space-between"} w={"full"}>
          <Text fontSize={12} fontWeight={"bold"} color={"gray.500"}>
            suggested for you

          </Text>
          <Text fontSize={12} fontWeight={"bold"} _hover={{color:"gray.500"}} cursor={"pointer"}>
            see all 

          </Text>
        </Flex> 


        )}


        {suggestedUsers.map((user) => (
				<SuggestedUser user={user} key={user.id} />
			))}
        <Box
        alignSelf={"start"} fontSize={12}  color={"gray.500"} mt={5}> 
          @2024 Built by {" "}
          <Link href="https://github.com/rohit19102000" target="_blank" color={"blue.500"} fontSize={12}>
          Rohit kedar
          </Link>
        </Box>

        </VStack>
  )
}

export default SuggestedUsers