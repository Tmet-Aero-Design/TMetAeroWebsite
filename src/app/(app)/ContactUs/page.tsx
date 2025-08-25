"use client";

import React, { useState } from "react";
import emailjs from "emailjs-com";
import { toast } from "react-hot-toast";

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formData,
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID!
      );
      toast.success("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
      toast.error("Failed to send message, please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className=" flex flex-col items-center py-24 px-5 bg-white dark:bg-[#0d0d0d] text-gray-900 dark:text-white transition-colors duration-500">
      <div className="max-w-3xl w-full">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-gray-600 dark:text-gray-300">Please use the form below to contact us.</p>
        </div>

        <form 
          onSubmit={handleSubmit} 
          className="bg-gray-100 dark:bg-[#1f1f1f] p-8 rounded-2xl shadow-lg space-y-6 transition-colors duration-300"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label htmlFor="name" className="mb-2 text-sm font-medium">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="rounded-lg border border-gray-300 dark:border-[#3a3a3a] bg-white dark:bg-[#1f1f1f] px-4 py-2 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-500 focus:outline-none transition"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="email" className="mb-2 text-sm font-medium">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="rounded-lg border border-gray-300 dark:border-[#3a3a3a] bg-white dark:bg-[#1f1f1f] px-4 py-2 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-500 focus:outline-none transition"
              />
            </div>
          </div>

          <div className="flex flex-col">
            <label htmlFor="message" className="mb-2 text-sm font-medium">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className="rounded-lg border border-gray-300 dark:border-[#3a3a3a] bg-white dark:bg-[#1f1f1f] px-4 py-2 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-500 focus:outline-none transition resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full md:w-auto px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold transition transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          <div className="pt-8 mt-8 border-t border-gray-300 dark:border-[#3a3a3a] text-center space-y-2">
            <a href="mailto:rad@torontomu.ca" className="text-blue-500 hover:underline">Rad@torontomu.ca</a>
            <p className="text-gray-600 dark:text-gray-400">350 Victoria St.<br />Toronto, ON M5B 2K3</p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
