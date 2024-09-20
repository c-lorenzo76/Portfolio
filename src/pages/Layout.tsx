import { Outlet } from "react-router-dom";

export const Layout = () => {
    return <div className="bg-gray-100 flex items-start justify-center h-full min-h-screen">
        <Outlet />
    </div>

}