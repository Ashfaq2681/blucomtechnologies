import { useState } from "react";

export default function ContactForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = { name, email, message };

        const res = await( {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        });

        const data = await res.json();
        if (data.success) {
            alert("Form submitted!");
            setName(""); setEmail(""); setMessage("");
        } else {
            alert(data.error || "Error submitting form");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
            <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
            <textarea placeholder="Message" value={message} onChange={e => setMessage(e.target.value)} />
            <button type="submit">Submit</button>
        </form>
    );
}