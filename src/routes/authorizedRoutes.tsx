import { createBrowserRouter } from "react-router-dom";

import FeedPage from "../pages/Feed/feedPage";
import NotFoundPage from "../pages/NotFound/NotFoundPage";
import ProfilePage from "../pages/Profile/ProfilePage";

export const authoriredRouter = createBrowserRouter([
    {
        path:'/',
        element:  <FeedPage />,
        errorElement: <NotFoundPage/>
    },
    {
        path:'/profile/:username',
        element:  <ProfilePage />,
        errorElement: <NotFoundPage/>
    }
    
])