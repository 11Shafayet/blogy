import ReactDOM from 'react-dom/client';
import AuthProvider from './Provider/AuthProvider.jsx';
import { RouterProvider } from 'react-router-dom';
import router from './Router/router.jsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import './index.css';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </QueryClientProvider>
);
