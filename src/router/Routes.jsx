import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Dashboard from "../components/Dashboard";

export const router = createBrowserRouter([
    {
        path: "/",
        element:<App/>,
        errorElement: <div>Error 404 !!!</div>,
        children:[
            {
                path: "/",
                index:true,
                element: <Dashboard/>
            }
        ]
    }
])