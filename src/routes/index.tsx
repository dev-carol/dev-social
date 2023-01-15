import { RouterProvider } from 'react-router-dom';
import authorizedRouter from './authorizedRoutes';
import unauthorizedRouter from './unauthorizedRoutes';


const AppRoutes = () =>  {
  const isAuth = true;

  return (
    <RouterProvider router={isAuth ? authorizedRouter : unauthorizedRouter} />
  );
}


export default AppRoutes;