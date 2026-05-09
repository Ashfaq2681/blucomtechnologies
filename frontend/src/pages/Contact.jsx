// frontend/src/pages/Contact.jsx
import React, { useState } from "react";
import Button from "../Components/Button";
import axios from "axios";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // ✅ Form data to send
    const formData = { name, email, phone, company, title, message };

    console.log("🚀 Sending Data:", formData);

    try {
      // ✅ POST request to your PHP backend
      const res = await axios.post(
        "http://localhost/backend/api/contact.php",
        formData
      );

      console.log("✅ Response:", res.data);

      if (res.data.success) {
        alert("Message sent successfully!");

        // Reset form
        setName("");
        setEmail("");
        setPhone("");
        setCompany("");
        setTitle("");
        setMessage("");
      } else if (res.data.error) {
        alert("Error: " + res.data.error);
      }

    } catch (err) {
      console.error("❌ FULL ERROR:", err);
      alert("Something went wrong. Check console (F12) for details.");
    }
  };

  return (
    <div className="flex flex-col items-center py-20 px-10 md:px-0 gap-2 mt-5">
      {/* Header */}
      <div className="flex flex-col justify-start items-center m-10 w-auto text-center">
        <span className="text-2xl text-gray-500 m-5">Let's build something</span>
        <span className="text-6xl text-emerald-500 underline decoration-gray-500 decoration-emerald-300">
          Great Together
        </span>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="flex flex-col gap-10 w-full max-w-[1300px] px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 lg:gap-20 xl:gap-x-40 gap-y-10">
          <input
            type="text"
            className="landingInput"
            placeholder="First Name*"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <input
            type="text"
            className="landingInput"
            placeholder="Last Name*"
          />

          <input
            type="email"
            className="landingInput"
            placeholder="Email*"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="text"
            className="landingInput"
            placeholder="Company Name*"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            required
          />
        </div>

        <input
          type="text"
          className="landingInput"
          placeholder="Your Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          className="landingInput"
          placeholder="What you want to say?"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={5}
          required
        />

        <div className="w-full flex justify-start">
          <Button type="submit" variant="emerald">
            Contact Us
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Contact;