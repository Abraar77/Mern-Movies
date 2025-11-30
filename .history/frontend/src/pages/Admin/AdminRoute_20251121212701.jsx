import { Navigate, Outlet } from "react-router-dom",
import { useSelector } from "react-redux"
const AdminRoute = () => {
  const {userInfo}= useSelector((state)=>state.auth)
  return (
    <div>AdminRoutes</div>
  )
}

export default AdminRoute