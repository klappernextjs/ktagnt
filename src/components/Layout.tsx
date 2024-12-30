import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useWeb3Modal } from '@web3modal/wagmi/react';
import { useAccount } from 'wagmi';
import { Cat, Store, PlusCircle, Home } from 'lucide-react';

export default function Layout() {
  const { open } = useWeb3Modal();
  const { address } = useAccount();

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="flex items-center space-x-2">
                <Cat className="h-8 w-8 text-purple-600" />
                <span className="text-xl font-bold text-gray-900">CatAgents</span>
              </Link>
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                <Link to="/" className="flex items-center px-3 py-2 text-sm font-medium text-gray-900 hover:text-purple-600">
                  <Home className="h-5 w-5 mr-1" />
                  Home
                </Link>
                <Link to="/generate" className="flex items-center px-3 py-2 text-sm font-medium text-gray-900 hover:text-purple-600">
                  <PlusCircle className="h-5 w-5 mr-1" />
                  Generate
                </Link>
                <Link to="/marketplace" className="flex items-center px-3 py-2 text-sm font-medium text-gray-900 hover:text-purple-600">
                  <Store className="h-5 w-5 mr-1" />
                  Marketplace
                </Link>
              </div>
            </div>
            <div className="flex items-center">
              <button
                onClick={() => open()}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700"
              >
                {address ? `${address.slice(0, 6)}...${address.slice(-4)}` : 'Connect Wallet'}
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main>
        <Outlet />
      </main>
    </div>
  );
}