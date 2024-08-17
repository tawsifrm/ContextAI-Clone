'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '../assets/logo.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="fixed top-0 left-0 w-full bg-white bg-opacity-70 py-4 shadow-sm z-50">
            <div className="max-w-5xl mx-auto flex items-center justify-between px-4">
                <div className="flex items-center">
                    <Link href="/" className="flex items-center">
                        <Image src={Logo} alt="Context Logo" width={102} height={52} className="mr-2" />
                    </Link>
                </div>
                
                <div className="hidden md:flex items-center space-x-8">
                    <Link href="/pricing" className="text-gray-700 hover:text-gray-900">
                        Pricing
                    </Link>
                    <Link href="/about-us" className="text-gray-700 hover:text-gray-900">
                        About Us
                    </Link>
                    <Link href="/blog" className="text-gray-700 hover:text-gray-900">
                        Blog
                    </Link>
                    <Link href="/docs" className="text-gray-700 hover:text-gray-900">
                        Docs
                    </Link>
                    <Link href="/book-a-demo" className="border border-blue-500 text-blue-500 px-4 py-2 rounded-md hover:bg-blue-50">
                        Book a demo
                    </Link>
                    <Link href="/get-started" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                        Get Started
                    </Link>
                </div>
                
                {/* Mobile Menu Button */}
                <button 
                    className="md:hidden flex items-center p-2"
                    onClick={toggleMenu}
                >
                    <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                    </svg>
                </button>
            </div>

            {/* Mobile Menu */}
            <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-white bg-opacity-70`}>
                <div className="flex flex-col items-center py-4 space-y-4">
                    <Link href="/pricing" className="text-gray-700 hover:text-gray-900" onClick={toggleMenu}>
                        Pricing
                    </Link>
                    <Link href="/about-us" className="text-gray-700 hover:text-gray-900" onClick={toggleMenu}>
                        About Us
                    </Link>
                    <Link href="/blog" className="text-gray-700 hover:text-gray-900" onClick={toggleMenu}>
                        Blog
                    </Link>
                    <Link href="/docs" className="text-gray-700 hover:text-gray-900" onClick={toggleMenu}>
                        Docs
                    </Link>
                    <Link href="/book-a-demo" className="border border-blue-500 text-blue-500 px-4 py-2 rounded-md hover:bg-blue-50" onClick={toggleMenu}>
                        Book a demo
                    </Link>
                    <Link href="/get-started" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600" onClick={toggleMenu}>
                        Get Started
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
