import {createBrowserRouter, RouterProvider} from 'react-router-dom'

import LoginPage from "../pages/Login/LoginPage";


const router = createBrowserRouter([
    {
        path:'/',
        element:  <LoginPage />,
        errorElement: (
            <><h1>Página não encontrada</h1></>
        )
    }
])

const AppRoutes = () => {
  return (
    <>
     <RouterProvider router={router}/>
    </>
  );
};

export default AppRoutes;
