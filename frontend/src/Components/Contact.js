import React, { useState } from "react";
import Recaptcha from 'react-recaptcha'    
import axios from "axios";
import './data.css';

function Contact(props) {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [isverified, setIsVerified] = useState(false)


  const handleClick = () => {
    axios({
      method: "POST",
      url: "http://127.0.0.1:8000/ContactAPI/postquestion/",
      data: {
        FirstName: firstname,
        LastName: lastname,
        Email: email,
        Messages: message,
      },
    })
      .then((res) => console.log(res.data))
      .catch((e) => console.log(e));
  };

  const verifyCallback = (response) => {
    console.log(response);
    if (response) {
      setIsVerified(true);
    }
  };

  const captchaLoaded = () => {
    console.log("Captcha Loaded");
  };

  return (
    <div className="container" >
      
    <h1>Contact Us Form</h1>
    <form>
    <label for="fname">First Name</label>
    <input
      type="text"
      id="fname"
      name="firstname"
      required
      onChange={(e) => {
        setFirstname(e.target.value);
      }}
    />
    <label for="lname">Last Name</label>
    <input
      type="text"
      id="lname"
      name="lastname"
      required
      onChange={(e) => {
        setLastname(e.target.value);
      }}
    />
    <label for="Email">Email</label>
    <input
      type="email"
      id="lname"
      name="lastname"
      required
      onChange={(e) => {
        setEmail(e.target.value);
      }}
    />
    <label for="subject">Message</label>
    <textarea
      id="subject"
      name="subject"
      required
      style={{ height: "200px" }}
      onChange={(e) => {
        setMessage(e.target.value);
      }}
    ></textarea>

            <Recaptcha 
            sitekey="6LfUZMQaAAAAAMTSdXifzclKpxKteg-wj9qCmiy6"
            render="explicit"
            verifyCallback={verifyCallback}
            onloadCallback={captchaLoaded}
          />

    <input
      type="submit"
      value="SUBMIT"
      onClick={() => { if (isverified) {
        handleClick();
      } else {
        alert("Please verify yourself that you are human !!");
      }}}
    />
    </form>
  </div>

    
    
  );
}
export default Contact;
