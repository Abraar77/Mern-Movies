import { Outlet } from "react-router";
import { UseStore } from "react-redux";



const PrivateRoute = () => {
  return (
    <div>  
        const {userInfo}= useSelector((state)=> state.auth)

        {userInfo && <Outlet/>}


    </div>
  )
}

export default PrivateRoute