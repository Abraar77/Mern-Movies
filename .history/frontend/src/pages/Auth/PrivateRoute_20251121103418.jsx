import { Outlet } from "react-router";
import { UseStore } from "react-redux";



const PrivateRoute = () => {
  return (
    <div>  
        const {userInfo}= useSelector(state= state.info)

        {userInfo && <Outlet/>}


    </div>
  )
}

export default PrivateRoute