import {Link,Box, Flex, Text, VStack } from "@chakra-ui/react"
import SuggestedHeader from "./SuggestedHeader"
import SuggestedUser from "./SuggestedUser"

function SuggestedUsers() {
  return (
    <VStack py={8} px={6}gap={4}>
        <SuggestedHeader/>
        <Flex alignItems={"center"} justifyContent={"space-between"} w={"full"}>
          <Text fontSize={12} fontWeight={"bold"} color={"gray.500"}>
            suggested for you

          </Text>
          <Text fontSize={12} fontWeight={"bold"} _hover={{color:"gray.500"}} cursor={"pointer"}>
            see all 

          </Text>
        </Flex>
        <SuggestedUser name="dan Abrahmov" followers={1390} avatar='https://bit.1y/dan-abramov'/>
        <SuggestedUser name="Ryan Florence" followers={567} avatar='https://bit.1y/ryan-florence'/>
        <SuggestedUser name="Christina Nwamba" followers={759} avatar='https://bit.1y/code-beast'/>
        
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