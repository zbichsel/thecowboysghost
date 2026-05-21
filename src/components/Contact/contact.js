import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css';

export default function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
        .sendForm(
            process.env.REACT_APP_EMAILJS_SERVICE_ID,
            process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
            form.current,
            process.env.REACT_APP_EMAILJS_PUBLIC_KEY
        )
        .then(
            () => {
                alert("Message sent successfully!");
                form.current.reset();
            },
            (error) => {
                console.log(error);
                alert("Failed to send message.");
            }
        );
    };

    return (
        <section className='contact'>
            <h2>Contact</h2>

            <form ref={form} onSubmit={sendEmail}>
                <input
                type="text"
                name="user_name"
                placeholder="Full Name"
                required
                />

                <input
                type="email"
                name="user_email"
                placeholder="Email Address"
                required
                />

                <input
                type="title"
                name="user_title"
                placeholder="Subject"
                required
                />
                <textarea
                name="message"
                placeholder="Message"
                rows="6"
                required
                />

                <button type="submit">
                    Send Message
                </button>
            </form>
        </section>
    )
}