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
            showConfirmButton: false,
            timer: 2000,
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
      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col gap-5 w-2/6 h-5/6 p-10 bg-red-700 text-white font-body rounded-lg shadow-black shadow-lg"
      >
        <h1 className="text-xl text-center font-bold">Contact us</h1>
        <label>Name</label>
        <input
          type="text"
          name="user_name"
          placeholder="Type name here ..."
          className="text-gray-800 px-2 py-1 rounded-md focus:outline-none"
        />
        <label>Email</label>
        <input
          type="email"
          name="user_email"
          placeholder="Type email here ..."
          className="text-gray-800 px-2 py-1 rounded-md focus:outline-none"
        />
        <label>Message</label>
        <textarea
          name="message"
          placeholder="Type messages here ..."
          className="h-full rounded-lg py-2 px-4 text-gray-800 focus:outline-none"
        />
        <input
          type="submit"
          value="Send"
          className="bg-gray-900 rounded-lg py-1"
        />
      </form>
    </div>
  );
};

export default Contact;
