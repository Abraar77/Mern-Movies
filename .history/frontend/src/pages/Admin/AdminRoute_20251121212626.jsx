import { Navigate, Outlet } from "react-router-dom",
import { UseSelector } from "react-redux"
const AdminRoute = () => {
  const {userInfo}= use
  return (
    <div>AdminRoutes</div>
  )
}

export default AdminRoute