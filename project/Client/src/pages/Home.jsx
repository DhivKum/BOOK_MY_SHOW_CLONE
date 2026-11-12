import { getCurrentUser } from "../calls/authCalls"
import { useEffect } from "react"

function Home() {
   const getUserData = async () => {
    const userData = await getCurrentUser()
    console.log(userData)
   }

   useEffect(() => {
    getUserData()
   },[])
    
  return (
    <div> Home</div>
  )
}

export default Home