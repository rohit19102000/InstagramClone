import { Container, Flex } from "@chakra-ui/react"
import ProfileHeader from "../../Components/Profile/ProfileHeader"
import ProfileTabs from "../../Components/Profile/ProfileTabs"
import ProfilePosts from "../../Components/Profile/ProfilePosts"


function ProfilePage() {
  return (
    <Container maxW='container.lg'py={5}>
        <Flex 
        py={10}
        px={4}
        pl={{base:4,md:10}}
        w={"full"}
        mx={"auto"}
        flexDirection={"column"}
        >
            <ProfileHeader/>
        </Flex>
        <Flex >
        <ProfileTabs/>
        <ProfilePosts/>
        </Flex>
    </Container>
  )
}

export default ProfilePage