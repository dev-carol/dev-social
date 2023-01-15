import LoginPage from '../pages/Login/LoginPage';
import NotFoundPage from '../pages/NotFound/NotFoundPage';
import ProfilePage from '../pages/Profile/ProfilePage';
import { createBrowserRouter } from 'react-router-dom';



export const unauthorizedRouter = createBrowserRouter([
  {
    path: '/',
    element: <LoginPage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: '/profile/:username',
    element: <ProfilePage />,
    errorElement: <NotFoundPage />,
  },
]);

export default unauthorizedRouter;