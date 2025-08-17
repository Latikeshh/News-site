import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ContactAdmin.css'; // External CSS for dark theme

const ContactPage = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch all contacts from backend
  const fetchContacts = async () => {
    try {
      const res = await axios.get('http://localhost:8000/admincontacts'); // your backend route
      setContacts(res.data);
      setLoading(false);
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  return (
    <div className="contact-admin-container">
      <h2 className="contact-admin-title mb-4">All Contacts</h2>
      {loading ? (
        <p className="contact-admin-loading">Loading...</p>
      ) : (
        <div className="contact-admin-table-responsive table-responsive">
          <table className="contact-admin-table table table-dark table-striped table-hover">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Address</th>
                <th>Message</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((contact, index) => (
                <tr key={contact._id}>
                  <td>{index + 1}</td>
                  <td>{contact.name}</td>
                  <td>{contact.email}</td>
                  <td>{contact.address}</td>
                  <td>{contact.message}</td>
                  <td>
                    {contact.isDeleted ? (
                      <span className="contact-admin-badge badge bg-danger">Deleted</span>
                    ) : (
                      <span className="contact-admin-badge badge bg-success">Active</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ContactPage;
