// src/components/ContactList.jsx
import { useEffect, useState } from "react";
import { getContacts } from "../api";

export default function ContactList() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    getContacts().then(res => setContacts(res.data));
  }, []);

  return (
    <div>
      <h2>All Contacts</h2>
      {contacts.map(c => (
        <div key={c.id}>
          <p>Name: {c.name}</p>
          <p>Email: {c.email}</p>
          <p>Message: {c.message}</p>
        </div>
      ))}
    </div>
  );
}