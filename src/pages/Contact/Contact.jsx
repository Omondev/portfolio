import React, { useState } from "react";
import emailjs from "emailjs-com";
import "../Contact/Contact.css";


const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .send(
                "YOUR_SERVICE_ID", // EmailJS service ID
                "YOUR_TEMPLATE_ID", // EmailJS template ID
                formData,
                "YOUR_USER_ID" // EmailJS user ID
            )
            .then((response) => {
                alert("Message sent successfully!");
                setFormData({ name: "", email: "", message: "" });
            })
            .catch((error) => {
                alert("Failed to send message.");
            });
    };

    return (
        <div className="container">
        <div className="contact-container">
            <h2 className="title">CONTACT <span>ME</span></h2>
            <div className="contact-content">
                <form className="contact-form" onSubmit={sendEmail}>
                    <h3>Message Me</h3>
                    <div className="input-group">
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <textarea
                        name="message"
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    ></textarea>
                    <button type="submit">Send</button>
                </form>
                <div className="contact-info">
                    <div className="info-item">
                        <i className="fas fa-phone"></i>
                        <div>
                            <h4>Call Me</h4>
                            <p>+998 88 136 06 15</p>
                        </div>
                    </div>
                    <div className="info-item">
                        <i className="fas fa-envelope"></i>
                        <div>
                            <h4>Email Me</h4>
                            <p>omon964@gmail.com</p>
                        </div>
                    </div>
                    <div className="info-item" onClick={() => window.open("https://maps.google.com?q=Tashkent,Khadra", "_blank")}>
                        <i className="fas fa-map-marker-alt"></i>
                        <div>
                            <h4>Address</h4>
                            <p>Tashkent, Khadra</p>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Contact;