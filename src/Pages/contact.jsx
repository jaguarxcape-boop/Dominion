import { useEffect } from "react";
import "../css/contact.css";
import { animateScroll } from "../js/animateScroll";

export default function Contact() {
    useEffect(()=> animateScroll())
    return (
        <section className="contact-section">
            <div className="contact-container">

                <div className="contact-header animate-on-scroll">
                    <h1>Contact Us</h1>
                    <p>Get in touch with Advanced Dominion Academy</p>
                </div>

                <div className="contact-grid animate-on-scroll">
                    {/* Contact Form */}
                    <form className="contact-form">
                        <div className="form-group">
                            <label>Full Name</label>
                            <input type="text" placeholder="Your name" required />
                        </div>

                        <div className="form-group">
                            <label>Email Address</label>
                            <input type="email" placeholder="you@example.com" required />
                        </div>

                        <div className="form-group">
                            <label>Message</label>
                            <textarea rows="5" placeholder="Write your message..." required></textarea>
                        </div>

                        <button type="submit" className="submit-btn">Send Message</button>
                    </form>

                    {/* Map */}
                    <div className="contact-map animate-on-scroll">
                        <iframe
                            title="Advanced Dominion Academy Location"
                            src="https://maps.app.goo.gl/kYzH5Ze9YPk54Y7EA"
                            loading="lazy"
                        ></iframe>
                    </div>
                </div>

                {/* Contact Details */}
                <div
                    role="button"
                    tabIndex={0}
                    className="contact-cards animate-on-scroll"
                    style={{ cursor: "pointer" }}
                    onClick={() => window.location.href = "tel:+1234567890"}
                    onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                            window.location.href = "tel:+2334567890";
                        }
                    }}
                >

                    <div className="contact-card animate-on-scroll">
                        <div className="icon phone">☎</div>
                        <div>
                            <h3>Phone</h3>
                            <p>+233 591 579 411</p>
                        </div>
                    </div>

                    <div className="contact-card animate-on-scroll">
                        <div className="icon email">✉</div>
                        <div>
                            <h3>Email</h3>
                            <p>info@advanceddominionacademy.com</p>
                        </div>
                    </div>

                    <a
                        href="https://wa.me/233591579411"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact-card whatsapp"
                    >
                        <div className="icon whatsapp">💬</div>
                        <div>
                            <h3>WhatsApp</h3>
                            <p>Chat with us instantly</p>
                        </div>
                    </a>
                </div>
            </div>
        </section >
    );
}
