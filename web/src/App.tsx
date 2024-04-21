import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useState } from 'react';
import Home from '@pages/Home';
import About from '@pages/About';
import Event from '@pages/Event';
import Sponsor from '@pages/Sponsor';
import Login from '@pages/Login';
import SignUp from '@pages/Signup';
import Setting from '@pages/Setting';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/signup',
    element: <SignUp />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/events',
    element: <Event />,
  },
  {
    path: '/sponsors',
    element: <Sponsor />,
  },
  {
    path: '/settings',
    element: <Setting />,
  },
]);

export default function App() {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}
