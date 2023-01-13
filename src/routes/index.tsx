
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import LoginPage from "../pages/Login/LoginPage";
import NotFoundPage from '../pages/NotFound/NotFoundPage';
import FeedPage from '../pages/feed/feedPage';


const unauthorizedRouter = createBrowserRouter([
    {
        path:'/',
        element:  <LoginPage />,
        errorElement: <NotFoundPage/>
            
    }
])

const authoriredRouter = createBrowserRouter([
    {
        path:'/',
        element:  <FeedPage />,
        errorElement: <NotFoundPage/>
    }
])


const AppRoutes = () => {
    const isAuth = true; 
  return (
    <>
     <RouterProvider router={isAuth? authoriredRouter : unauthorizedRouter  }/>
    </>
  );
};

export default AppRoutes;
