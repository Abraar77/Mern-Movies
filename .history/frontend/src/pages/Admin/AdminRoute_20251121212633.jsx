import { Navigate, Outlet } from "react-router-dom",
import { useSelector, UseSelector } from "react-redux"
const AdminRoute = () => {
  const {userInfo}= useSelector((stat))
  return (
    <div>AdminRoutes</div>
  )
}

export default AdminRoute