import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useState } from "react";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";
import { AnimatePresence } from "framer-motion";
import Home from "@pages/Home";
import About from "@pages/About";
import Event from "@pages/Event";
import Sponsor from "@pages/Sponsor";
import SignUp from "@pages/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/events",
    element: <Event />,
  },
  {
    path: "/sponsors",
    element: <Sponsor />,
  },
]);

export default function App() {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <AnimatePresence>
      <MantineProvider>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </MantineProvider>
    </AnimatePresence>
  );
}
