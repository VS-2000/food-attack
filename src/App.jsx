import React, { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/NavBar'
import Home from './pages/Home'
import Checkout from './pages/Checkout/Checkout'
import About from './pages/About'
import Contact from './pages/Contact'
import OrderConfirmation from './pages/OrderConfirmation/OrderConfirmation'
import Footer from './components/Footer';
import Cart from './pages/Cart/Cart'
import LoginPopup from "./components/LoginPopup/LoginPopup";
import SearchBar from './components/SearchBar'

export default function App() {
    const [dark, setDark] = useState(false);
    const [showLogin, setShowLogin] = useState(false)

    useEffect(() => {
        if (dark) document.documentElement.classList.add('dark');
        else document.documentElement.classList.remove('dark');
    }, [dark]);


    return (
        <>
            <Navbar dark={dark} setDark={setDark} setShowLogin={setShowLogin} />
            {showLogin && <LoginPopup setShowLogin={setShowLogin} />}
            <main className="flex-1 container mx-auto px-4 py-6">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/searchbar" element={<SearchBar />} />
                    <Route path="/checkout" element={<Checkout />} />
                    <Route path="/order-confirmation" element={<OrderConfirmation />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </main>
            <Footer />
        </>
    )
}