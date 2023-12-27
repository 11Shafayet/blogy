import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../MainLayout/MainLayout';

import Home from '../pages/Home';
import AllBlogs from '../pages/AllBlogs';
import SingleBlog from '../pages/SingleBlog';
import Contact from '../pages/Contact';
import LogAndReg from '../pages/LogAndReg';

// admin routes
import Dashboard from '../admin/pages/Dashboard';

// blog routes
import AdminAllBlogs from '../admin/pages/AllBlogs';
import AddBlog from '../admin/pages/AddBlog';
import UserDashboard from '../admin/pages/UserDashboard';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/login',
        element: <LogAndReg />,
      },
      {
        path: '/allblogs',
        element: <AllBlogs />,
      },
      {
        path: '/blog/:id',
        element: <SingleBlog />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
    ],
  },
  // admin routes
  {
    path: '/dashboard',
    element: <Dashboard />,
    children: [
      {
        path: '/dashboard',
        element: <AdminAllBlogs />,
      },
      {
        path: '/dashboard/add-blog',
        element: <AddBlog />,
      },
      {
        path: '/dashboard/:id',
        element: <UserDashboard />,
      },
    ],
  },
]);

export default router;
