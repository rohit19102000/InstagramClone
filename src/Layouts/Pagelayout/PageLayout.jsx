import { Box, Flex, Spinner } from "@chakra-ui/react"
import Sidebar from "../../Components/SideBar/Sidebar"
import { useLocation } from "react-router-dom"
import{ useAuthState } from "react-firebase-hooks/auth"
import { auth } from "../../Firebase/firebase"
import Navbar from "../../Components/Navbar/Navbar"

function PageLayout({children}) {
const {pathname} = useLocation()
const [user ,loading] = useAuthState(auth);
const canRenderSidebar = pathname !=="/auth" && user;
const canRenderNavbar = !user && !loading && pathname !== "/auth";

const checkingUserIsAuth = !user && loading;
if(checkingUserIsAuth) return <PageLayoutSpinner/>;

    return (
    <Flex flexDirection={canRenderNavbar ? "column":"row"}>
                            {/* sidebar on left */}
{canRenderSidebar? (
    <Box w={{base:"70px",md:"240px"}}>
        <Sidebar />
    </Box>): null }

    {/* nav bar */}

    {canRenderNavbar ? <Navbar/> :null}
                            {/* page content on right */}
    
    <Box flex={1} w={{base:"calc(100%-70px",md:"calc(100%-240px"}} mx={"auto"}>

    {children}
    </Box>
    </Flex>

    )
}

export default PageLayout


const PageLayoutSpinner =() =>{
    return (

        <Flex flexDir='column' h='100vh' alignItems='center' justifyContent='center'>
            <Spinner size='xl'/>

        </Flex>
    )
}