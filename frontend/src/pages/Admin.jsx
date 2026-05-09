import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Admin() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost/backend/api/getContacts.php")
      .then(res => setContacts(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="p-10">
      <h2 className="text-3xl mb-5">Leads</h2>

      {contacts.map((item) => (
        <div key={item.id} className="border p-4 mb-3">
          <p><b>Name:</b> {item.name}</p>
          <p><b>Email:</b> {item.email}</p>
          <p><b>Message:</b> {item.message}</p>
        </div>
      ))}
    </div>
  );
}