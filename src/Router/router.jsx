import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../MainLayout/MainLayout';

import Home from '../pages/Home';
import AllBlog from '../pages/AllBlog';
import SingleBlog from '../pages/SingleBlog';
import Contact from '../pages/Contact';

// admin routes
import Dashboard from '../admin/pages/Dashboard';
import Login from '../admin/pages/Login';
import Register from '../admin/pages/Register';

// blog routes
import AllBlogs from '../admin/pages/AllBlogs';
import AddBlog from '../admin/pages/AddBlog';
import EditBlog from '../admin/pages/EditBlog';
import UserDetails from '../admin/pages/UserDetails';

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
        path: '/allblog',
        element: <AllBlog />,
      },
      {
        path: '/blog/:id',
        element: <SingleBlog />,
        loader: ({ params }) =>
          fetch(`https://check.vercel.app/api/v1/allblogs/${params.id}`),
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
        path: '/dashboard/login',
        element: <Login />,
      },
      {
        path: '/dashboard/register',
        element: <Register />,
      },
      {
        path: '/dashboard/user-details',
        element: <UserDetails />,
      },

      //blog routes
      {
        path: '/dashboard/all-blogs',
        element: <AllBlogs />,
      },
      {
        path: '/dashboard/add-blog',
        element: <AddBlog />,
      },
      {
        path: '/dashboard/edit-blog/:id',
        element: <EditBlog />,
        loader: ({ params }) =>
          fetch(
            `https://saimums-backend.vercel.app/api/v1/allblogs/${params.id}`
          ),
      },
    ],
  },
]);

export default router;