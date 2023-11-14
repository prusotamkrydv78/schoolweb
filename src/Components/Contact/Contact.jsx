import React from "react";
import "./Contact.scss";
const Contact = () => {
  return (
    <div className="Contact">

      <div className="contactHeading">
        <h1>Contact Us</h1>
      </div>
      <div className="contact">
        <div className="conLeft">
          <form action="">
            <div>
              <label htmlFor="name">Enter Your Name</label>
              <input type="text" id="name" />
            </div>
            <div>
              <label htmlFor="name">Enter Your Email</label>
              <input type="text" id="name" />
            </div>
            <div>
              <label htmlFor="name">Tell Us About Your Subject</label>
              <input type="text" id="name" />
            </div>
            <div>
              <label htmlFor="message">Write What You Want To Tell Us</label>
              <textarea
                name="message"
                id="message"
                cols="15"
                rows="7"
              ></textarea>
            </div>
          </form>
          <button type="submit">Send</button>
        </div>
        <div className="conRight">
            <div className="map">

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d634.8911980440978!2d86.04910085172281!3d26.870224460682024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ec11270f1183e7%3A0x8296f4cef65e7347!2sShree%20Sunrise%20English%20Boarding%20School!5e1!3m2!1sne!2snp!4v1699888733049!5m2!1sne!2snp"
            width="600px"
            height="450px"
            style={{border:0}}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
          
            </div>
            <div className="content">
                <p>Address: Kishanpur-7, Dhanusha Dham, Janakpur, Nepal </p>
                <p>Mobile No: .........., ..........</p>
                Email: info@Sunrise.Edu.Np
            </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
