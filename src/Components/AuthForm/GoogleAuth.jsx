import { Flex, Image, Text } from "@chakra-ui/react"

function GoogleAuth() {
  return (
    <Flex alignItems={"center"} justifyContent={"center"}  cursor={"pointer"}>
<Image src="/google.png" w={5} alt="Google logo" />
    <Text mx="2" color={"blue.500"}>login with google  </Text>
    </Flex>
  )
}

export default GoogleAuth