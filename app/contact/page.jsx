"use client";
import React, { useState, useEffect } from "react";

const Page = () => {
    const [formData, setFormData] = useState({
        email: "",
        subject: "",
        message: "",
    });

    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("/api/saveData", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });
            if (response.ok) {
                alert("Message sent successfully!");
                // Reload messages after submission
                fetchMessages();
                // Reset form
                setFormData({ email: "", subject: "", message: "" });
            } else {
                alert("Failed to send message.");
            }
        } catch (error) {
            console.error("Error:", error);
            alert("An error occurred while sending the message.");
        }
    };

    const fetchMessages = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch("http://192.168.206.237:2000/messages");
            if (!response.ok) {
                throw new Error(`Failed to fetch messages: ${response.statusText}`);
            }
            const data = await response.json();
            setMessages(data);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchMessages();
    }, []);

    return (
        <div>
            <section className="bg-white dark:bg-gray-900 ">
                <div className="py-1 lg:py-16 px-4 mx-auto max-w-screen-md">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
                        Contact Us
                    </h2>
                    <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
                        Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.
                    </p>
                    <form onSubmit={handleSubmit} className="space-y-8">
                        <div>
                            <label
                                htmlFor="email"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            >
                                Your email
                            </label>
                            <input
                                type="email"
                                id="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                                placeholder="name@flowbite.com"
                                required
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="subject"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            >
                                Subject
                            </label>
                            <input
                                type="text"
                                id="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                                placeholder="Let us know how we can help you"
                                required
                            />
                        </div>
                        <div className="sm:col-span-2">
                            <label
                                htmlFor="message"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                            >
                                Your message
                            </label>
                            <textarea
                                id="message"
                                rows="6"
                                value={formData.message}
                                onChange={handleChange}
                                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                placeholder="Leave a comment..."
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="py-3 px-5 text-sm font-medium text-center bg-blue-400 text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                        >
                            Send message
                        </button>
                    </form>
                </div>
            </section>

            {/* Display messages from database */}
            <section className="py-8 mx-2">
                <h2 className="text-2xl font-bold mb-4">Messages</h2>
                {loading && <p>Loading messages...</p>}
                {error && <p className="text-red-500">Error: {error}</p>}
                <ul className="space-y-4">
                    {messages.map((msg) => (
                        <li key={msg.id} className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md">
                            <p>
                                <strong>Email:</strong> {msg.email}
                            </p>
                            <p>
                                <strong>Subject:</strong> {msg.subject}
                            </p>
                            <p>
                                <strong>Message:</strong> {msg.message}
                            </p>
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    );
};

export default Page;
