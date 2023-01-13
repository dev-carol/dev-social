
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import { authoriredRouter } from './authorizedRoutes';
import { unauthorizedRouter } from './unauthorizedRoutes';


const AppRoutes = () => {
    const isAuth = true; 
  return (
    <>
     <RouterProvider router={isAuth? authoriredRouter : unauthorizedRouter  }/>
    </>
  );
};

export default AppRoutes;
