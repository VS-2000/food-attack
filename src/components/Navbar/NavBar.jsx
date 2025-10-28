import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { assets } from '../../assets/frontend_assets/assets';

export default function Navbar({ dark, setDark, setShowLogin }) {
    const [menuOpen, setMenuOpen] = useState(false);

    const cartCount = 0;

    return (
        <nav className="bg-black shadow-sm fixed top-0 left-0 w-full z-50">
            <div className="container mx-auto px-4 py-2 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <Link to="/">
                        <img
                            src={assets.logo}
                            alt="FoodWay Logo"
                            className="w-10 h-10 object-contain"
                        />
                    </Link>
                    <span className="text-3xl font-semibold text-yellow-500 tracking-wide">
                        Food Attack
                    </span>
                </div>

                <div className="hidden md:flex navbar-menu gap-6 text-[16px] font-medium">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            `${isActive ? 'text-orange-400' : 'text-yellow-500'} hover:text-orange-400 transition-colors duration-300`
                        }
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/about"
                        className={({ isActive }) =>
                            `${isActive ? 'text-orange-400' : 'text-yellow-500'} hover:text-orange-400 transition-colors duration-300`
                        }
                    >
                        About
                    </NavLink>
                    <NavLink
                        to="/contact"
                        className={({ isActive }) =>
                            `${isActive ? 'text-orange-400' : 'text-yellow-500'} hover:text-orange-400 transition-colors duration-300`
                        }
                    >
                        Contact
                    </NavLink>
                </div>

                <div className="navbar-right hidden md:flex items-center gap-4">
                    <img
                        src={assets.search_icon}
                        alt="Search"
                        className="w-5 h-5 cursor-pointer hover:scale-110 transition-transform"
                    />
                    <Link to="/cart" className="relative">
                        <img src={assets.basket_icon} alt="Cart" className="w-5 h-5" />
                        {cartCount > 0 && (
                            <span className="absolute -top-2 -right-2 bg-[#f15a29] text-white text-[10px] px-1 rounded-full">
                                {cartCount}
                            </span>
                        )}
                    </Link>

                    <button
                        onClick={() => setDark(!dark)}
                        className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 hover:bg-[#fff4f2] transition"
                        title={dark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
                    >
                        {dark ? '☀️' : '🌙'}
                    </button>

                    <button
                        onClick={() => setShowLogin(true)}
                        className="px-3 py-1.5 bg-black text-yellow-500 rounded-md hover:bg-orange-500 transition"
                    >
                        Sign In
                    </button>
                </div>

                <button
                    className="md:hidden flex flex-col justify-center items-center space-y-1"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <span className="w-5 h-0.5 bg-gray-700"></span>
                    <span className="w-5 h-0.5 bg-gray-700"></span>
                    <span className="w-5 h-0.5 bg-gray-700"></span>
                </button>
            </div>

            {menuOpen && (
                <div className="md:hidden bg-white border-t border-gray-200 py-3 px-4 space-y-2 shadow-sm">
                    <NavLink
                        to="/"
                        onClick={() => setMenuOpen(false)}
                        className="block text-gray-700 hover:text-[#f15a29]"
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/about"
                        onClick={() => setMenuOpen(false)}
                        className="block text-gray-700 hover:text-[#f15a29]"
                    >
                        About
                    </NavLink>
                    <NavLink
                        to="/contact"
                        onClick={() => setMenuOpen(false)}
                        className="block text-gray-700 hover:text-[#f15a29]"
                    >
                        Contact
                    </NavLink>

                    <div className="flex items-center justify-between pt-3 border-t border-gray-200">
                        <img src={assets.search_icon} alt="Search" className="w-4 h-4" />
                        <button
                            onClick={() => {
                                setDark(!dark);
                                setMenuOpen(false);
                            }}
                            className="w-7 h-7 flex items-center justify-center rounded-full border border-gray-300 hover:bg-[#fff4f2] transition"
                        >
                            {dark ? '☀️' : '🌙'}
                        </button>
                        <Link to="/cart" onClick={() => setMenuOpen(false)} className="relative">
                            <img src={assets.basket_icon} alt="Cart" className="w-4 h-4" />
                            {cartCount > 0 && (
                                <span className="absolute -top-2 -right-2 bg-[#f15a29] text-white text-[10px] px-1 rounded-full">
                                    {cartCount}
                                </span>
                            )}
                        </Link>
                    </div>

                    <button
                        onClick={() => {
                            setShowLogin(true);
                            setMenuOpen(false);
                        }}
                        className="w-full mt-3 text-sm py-1.5 bg-[#f15a29] text-white rounded-md hover:bg-orange-500 transition"
                    >
                        Sign In
                    </button>
                </div>
            )}
        </nav>
    );
}
