import { Outlet } from "react-router";
import { UseStore } from "react-redux";



const PrivateRoute = () => {
    const {userInfo}= useSelector((state)=> state.auth)
  return (
    <div>  
        {userInfo && <Outlet/>}


    </div>
  )
}

export default PrivateRoute