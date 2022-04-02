import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_d1wyt17",
        "template_licqs1b",
        form.current,
        "_z8QXPPZa4pGtwsGt"
      )
      .then(
        (result) => {
          console.log(result.text);
          Swal.fire({
            title: "Message Sent Successfully",
            icon: "success",
          });
        },
        (error) => {
          Swal.fire({
            title: "Ooops, something went wrong",
            text: error.text,
            icon: "error",
          });
        }
      );
    e.target.reset();
  };
  return (
    <div className="container-page">
      <form ref={form} onSubmit={sendEmail} className="bg-blue-500">
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
    </div>
  );
};

export default Contact;
