import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../Components/Button"

const ContactFormPage = () => {
  // State for form inputs
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // You can integrate API call here
    alert("Form submitted successfully!");
  };

  return (
    <div className="flex justify-center items-center py-16">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-10 w-full max-w-[1300px] px-10"
      >
        <div className="bg-white shadow-lg p-8 md:p-12">
          {/* Heading */}
          <div className="flex flex-col justify-center items-center mb-10">
            <span className="text-2xl text-gray-500 mb-2">
              Let's build something
            </span>
            <span className="text-6xl text-emerald-500 underline decoration-gray-500 decoration-emerald-300">
              Great Together
            </span>
          </div>

          {/* Info Section */}
          <div className="grid md:grid-cols-3 gap-6 mb-10 text-gray-500">
            <div>
              <p className="font-medium mb-1">Office:</p>
              <p>Islamabad</p>
            </div>
            <div>
              <p className="font-medium mb-1">Phone:</p>
              <p>+92-303-5907230 | +92-334-0011126</p>
            </div>
            <div>
              <p className="font-medium mb-1">Email:</p>
              <p>connect@blucomtechnologies.com</p>
            </div>
          </div>

          {/* Form Inputs */}
          <div className="space-y-6">
            {/* Name & Email */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm mb-2">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  className="w-full px-4 py-3 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-black"
                  required
                />
              </div>
              <div>
                <label className="block text-sm mb-2">Email address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your email address"
                  className="w-full px-4 py-3 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-black"
                  required
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm mb-2">Message</label>
              <textarea
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write something..."
                className="w-full px-4 py-3 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-black"
                required
              />
            </div>

            {/* Submit Button */}
            <div className="w-full flex justify-start">
              <Button type="submit" variant="emerald">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactFormPage;