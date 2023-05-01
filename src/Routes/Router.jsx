import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Login from "../Log-Res-Form/Login";
import Booking from "../Log-Res-Form/Booking";
import Home from "../Pages/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root/>,
        children:[
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/booking",
                element: <Booking/>
            },
            {
                path: "/login",
                element: <Login/>
            }
        ]
    }
])

export default router;