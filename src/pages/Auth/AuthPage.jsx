import React, { useState } from 'react';
import './AuthPage.css';
import { assets } from '../../assets/frontend_assets/assets';

export default function AuthPage({ setIsAuthenticated }) {
    const [isLogin, setIsLogin] = useState(true);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setError('');
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Basic Validation
        if (!formData.email || !formData.password) {
            setError('Please fill in all required fields');
            return;
        }

        if (!isLogin) {
            if (!formData.name) {
                setError('Name is required for registration');
                return;
            }
            if (formData.password !== formData.confirmPassword) {
                setError('Passwords do not match');
                return;
            }
        }

        // Mock Authentication
        // In a real app, this would be an API call
        localStorage.setItem("isAuthenticated", "true");
        setIsAuthenticated(true);
    };

    return (
        <div className="auth-container" style={{ backgroundImage: `url(${assets.header_img})` }}>
            <div className="auth-overlay"></div>

            <div className="auth-card">
                <img src={assets.logo} alt="Logo" className="auth-logo" />

                <h2 className="auth-title">{isLogin ? 'Welcome Back' : 'Create Account'}</h2>
                <p className="auth-subtitle">
                    {isLogin
                        ? 'Login to access your favorite food'
                        : 'Sign up to start ordering delicious meals'}
                </p>

                <form onSubmit={handleSubmit} className="auth-form">
                    {!isLogin && (
                        <input
                            type="text"
                            name="name"
                            placeholder="Full Name"
                            className="auth-input"
                            value={formData.name}
                            onChange={handleChange}
                        />
                    )}

                    <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        className="auth-input"
                        value={formData.email}
                        onChange={handleChange}
                    />

                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        className="auth-input"
                        value={formData.password}
                        onChange={handleChange}
                    />

                    {!isLogin && (
                        <input
                            type="password"
                            name="confirmPassword"
                            placeholder="Confirm Password"
                            className="auth-input"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                        />
                    )}

                    {error && <p className="auth-error">{error}</p>}

                    <button type="submit" className="auth-btn">
                        {isLogin ? 'Login' : 'Sign Up'}
                    </button>
                </form>

                <div className="auth-switch">
                    {isLogin ? "Don't have an account?" : "Already have an account?"}
                    <span onClick={() => setIsLogin(!isLogin)}>
                        {isLogin ? 'Sign Up' : 'Login'}
                    </span>
                </div>
            </div>
        </div>
    );
}
