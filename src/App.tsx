import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { WagmiConfig } from 'wagmi';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { initializeWeb3 } from './config/web3/initialize';
import { wagmiConfig } from './config/web3/wagmi';
import Layout from './components/Layout';
import Home from './pages/Home';
import Generator from './pages/Generator';
import Marketplace from './pages/Marketplace';

// Initialize Web3 configuration
initializeWeb3();

// Create React Query client
const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/generate', element: <Generator /> },
      { path: '/marketplace', element: <Marketplace /> }
    ]
  }
]);

export default function App() {
  return (
    <WagmiConfig config={wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </WagmiConfig>
  );
}