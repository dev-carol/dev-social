import {createBrowserRouter, RouterProvider} from 'react-router-dom'

import LoginPage from "../pages/Login/LoginPage";
import NotFoundPage from '../pages/NotFound/NotFoundPage';


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
        element:  <LoginPage />,
        errorElement: <NotFoundPage/>
    }
])


const AppRoutes = () => {
    const isAuth = false; 
  return (
    <>
     <RouterProvider router={isAuth? authoriredRouter : unauthorizedRouter  }/>
    </>
  );
};

export default AppRoutes;
