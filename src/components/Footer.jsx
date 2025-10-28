import React from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../assets/frontend_assets/assets'


export default function Footer() {
   return (
  <footer className="bg-gray-900 text-white mt-8">
    <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center">
      <div className="text-sm text-gray-300">
        © {new Date().getFullYear()} <span className="font-semibold text-white">Food on the Way</span>
      </div>
      <div className="flex gap-6 mt-3 md:mt-0">
        <Link to="/about" className="hover:text-orange-400 transition-colors duration-300">
          About
        </Link>
        <Link to="/contact" className="hover:text-orange-400 transition-colors duration-300">
          Contact
        </Link>
      </div>
    </div>
  </footer>
);

}

