import React, { useState } from 'react';
import { signIn, signOut, useSession } from 'next-auth/client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { SunIcon, MoonIcon, MenuIcon, XIcon } from '@heroicons/react/outline';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [session, loading] = useSession();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
  };

  return (
    <header className="bg-white dark:bg-gray-800 shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-gray-800 dark:text-white">
          <Link href="/">
            <a>My Website</a>
          </Link>
        </div>
        <nav className="hidden md:flex space-x-4">
          <Link href="/">
            <a className="text-gray-800 dark:text-white hover:text-blue-500">Home</a>
          </Link>
          <Link href="/about">
            <a className="text-gray-800 dark:text-white hover:text-blue-500">About</a>
          </Link>
          <Link href="/contact">
            <a className="text-gray-800 dark:text-white hover:text-blue-500">Contact</a>
          </Link>
          {!loading && !session && (
            <button onClick={() => signIn()} className="text-gray-800 dark:text-white hover:text-blue-500">
              Sign In
            </button>
          )}
          {!loading && session && (
            <button onClick={() => signOut()} className="text-gray-800 dark:text-white hover:text-blue-500">
              Sign Out
            </button>
          )}
        </nav>
        <div className="flex items-center space-x-4">
          <button onClick={toggleDarkMode} className="text-gray-800 dark:text-white">
            {isDarkMode ? <SunIcon className="h-6 w-6" /> : <MoonIcon className="h-6 w-6" />}
          </button>
          <button onClick={toggleMenu} className="md:hidden text-gray-800 dark:text-white">
            {isMenuOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <motion.nav
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="md:hidden bg-white dark:bg-gray-800 shadow-md"
        >
          <Link href="/">
            <a className="block px-4 py-2 text-gray-800 dark:text-white hover:text-blue-500">Home</a>
          </Link>
          <Link href="/about">
            <a className="block px-4 py-2 text-gray-800 dark:text-white hover:text-blue-500">About</a>
          </Link>
          <Link href="/contact">
            <a className="block px-4 py-2 text-gray-800 dark:text-white hover:text-blue-500">Contact</a>
          </Link>
          {!loading && !session && (
            <button onClick={() => signIn()} className="block px-4 py-2 text-gray-800 dark:text-white hover:text-blue-500">
              Sign In
            </button>
          )}
          {!loading && session && (
            <button onClick={() => signOut()} className="block px-4 py-2 text-gray-800 dark:text-white hover:text-blue-500">
              Sign Out
            </button>
          )}
        </motion.nav>
      )}
    </header>
  );
};

export default Header;
