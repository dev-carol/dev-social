import { createBrowserRouter } from "react-router-dom";

import LoginPage from "../pages/Login/LoginPage";
import NotFoundPage from "../pages/NotFound/NotFoundPage";
import ProfilePage from "../pages/Profile/ProfilePage";

export const unauthorizedRouter = createBrowserRouter([
    {
        path:'/',
        element:  <LoginPage />,
        errorElement: <NotFoundPage/>
            
    },
    {
        path:'/profile/:usernam',
        element:  <ProfilePage />,
        errorElement: <NotFoundPage/>
    }
])
