import { useRef, useState } from "react";
import "./contact.scss";
import emailjs from 'emailjs-com';

export default function Contact() {
    const formRef = useRef();
    const [message, setMessage] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_4zrl56t', 'template_fauj5ds', formRef.current, 'user_kruLh1A8Pb7YL6MKUcKJy')
            .then((result) => {
                console.log(result.text);
                setMessage(true);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div className="contact" id="contact">
            <div className="left">
                <img src="assets/shake.svg" alt="" />
            </div>
            <div className="right">
                <h2>Contact</h2>
                <form ref={formRef} onSubmit={handleSubmit}>
                    <input type="text" placeholder="Name" name="user_name" />
                    <input type="text" placeholder="Subject" name="user_subject" />
                    <input type="email" placeholder="Email" name="user_email" />
                    <textarea placeholder="Message" name="message" />
                    <button>Send</button>
                    { message && <span>Thanks, I'll reply soon.</span> }
                </form>
            </div>
        </div>
    )
}
