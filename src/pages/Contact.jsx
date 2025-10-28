import React, { useState } from "react";

export default function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Message sent! (Static form, no backend)");
        setName("");
        setEmail("");
        setMessage("");
    };

    return (
        <div className="max-w-5xl mx-auto mt-20 p-6 md:p-12 bg-white rounded-xl shadow-md">
            <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">
                Contact Us
            </h1>
            <p className="text-center text-gray-600 mb-12">
                Have questions or feedback? We’re here to help. Reach out to us using
                the form below or via our support email.
            </p>

            <div className="flex flex-col md:flex-row gap-10">
             
                <div className="md:w-1/2 bg-orange-50 p-6 rounded-lg flex flex-col justify-center">
                    <h2 className="text-2xl font-semibold mb-4 text-orange-600">
                        Get in Touch
                    </h2>
                    <p className="text-gray-700 mb-2">
                        <strong>Email:</strong> support@foodattack.com
                    </p>
                    <p className="text-gray-700 mb-2">
                        <strong>Phone:</strong> +91 9061197109
                    </p>
                    <p className="text-gray-700 mb-2">
                        <strong>Address:</strong> 123 Foodattack Street, City, Country
                    </p>
                </div>

               
                <form
                    onSubmit={handleSubmit}
                    className="md:w-1/2 flex flex-col gap-4"
                >
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Your Name"
                        required
                        className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-300"
                    />
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Your Email"
                        required
                        className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-300"
                    />
                    <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Your Message"
                        required
                        rows="5"
                        className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-300"
                    ></textarea>
                    <button
                        type="submit"
                        className="w-full bg-orange-400 hover:bg-orange-500 text-white font-semibold py-3 rounded transition-colors"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
}
