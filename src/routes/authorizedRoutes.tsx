import { createBrowserRouter } from 'react-router-dom';

import PostPage from '../pages/Post/PostPage';
import FeedPage from '../pages/Feed/feedPage';
import NotFoundPage from '../pages/NotFound/NotFoundPage';
import ProfilePage from '../pages/Profile/ProfilePage';

 const authorizedRouter = createBrowserRouter([
  {
    path: '/',
    element: <FeedPage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: '/profile/:username',
    element: <ProfilePage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: '/new/post',
    element: <PostPage />,
    errorElement: <NotFoundPage />,
  },
]);
export default  authorizedRouter;