import React, { useRef, useState } from "react";
import "../styles/Contact.css";
import Phone from "../assets/phone.png";
import Email from "../assets/email.png";
import Address from "../assets/address.png";
import emailjs from "emailjs-com";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    emailjs.sendForm("service_41qoe1p", "template_dni271f", formRef.current, "user_32y7800mtrwtyTrLhTO9i")
      .then((resp) => {
        setDone(true);
      }, (err) => {
        console.log({err});
      });
  } 

  return (
    <div className="Contact">
      <div className="Contact-bg"></div>
      <div className="Contact-wrapper">
        <div className="Contact-left">
          <h1 className="Contact-title">Let's discuss your project</h1>
          <div className="Contact-info">
            <div className="Contact-info-item">
              <img src={Phone} alt="phone icon" className="Contact-icon" />
              +1.360.503.9489
            </div>
            <div className="Contact-info-item">
              <img src={Email} alt="email icon" className="Contact-icon" />
              brandonbee013@gmail.com
            </div>
            <div className="Contact-info-item">
              <img src={Address} alt="address icon" className="Contact-icon" />
              Seattle, WA
            </div>
          </div>
        </div>
        <div className="Contact-right">
          <p className="Contact-description">
            <b>What's your story?</b> Get in touch. Always available for freelancing if the right project comes along.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" name="user_name" />
            <input type="text" placeholder="Subject" name="user_subject" />
            <input type="text" placeholder="Email" name="user_email" />
            <textarea rows="5" placeholder="Message" name="message" />
            <button>Submit</button>
            {
              done && "Thank you for your inquiry"
            }
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;