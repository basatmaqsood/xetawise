'use client'
import React, { useState } from "react";
import FadeIn from "./FadeIn";
import TextInput from "./TextInput";
import Button from "./Button";
import emailjs from "emailjs-com";
import { toast, ToastContainer, ToastPosition } from "react-toastify"; // Import ToastPosition separately
import "react-toastify/dist/ReactToastify.css"; // Import Toastify styles

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Access the form element directly (e.target)
    emailjs
      .sendForm(
        "service_rdg9lkr", // Replace with your service ID
        "template_f1tvuoj", // Replace with your template ID
        e.target, // Pass the form element here
        "T4TTu8-BgUxqyzHwp" // Replace with your user ID
      )
      .then(
        (result) => {
          console.log("Message sent successfully:", result.text);
          // Show success notification
          toast.info("Message sent successfully!");
        },
        (error) => {
          console.log("Error sending message:", error.text);
          // Show error notification
          toast.error("Error sending message, please try again later.");
        }
      );

    // Reset form
    setFormData({
      name: "",
      email: "",
      company: "",
      phone: "",
      message: "",
    });
  };

  return (
    <FadeIn>
      <form onSubmit={handleSubmit}>
        <h2 className="font-display text-base font-semibold text-neutral-950">
          Work inquiries
        </h2>
        <div className="isolate mt-6 -space-y-px rounded-2xl bg-white/50">
          <TextInput
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            autoComplete="name"
          />
          <TextInput
            label="Email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            autoComplete="email"
          />
          <TextInput
            label="Company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            autoComplete="organization"
          />
          <TextInput
            label="Phone"
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            autoComplete="tel"
          />
          <TextInput
            label="Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
        </div>
        <Button type="submit" className="mt-10">
          Let’s work together
        </Button>
      </form>

      {/* Add the ToastContainer here */}
      <ToastContainer position="top-right"
      theme="dark"
      />
    </FadeIn>
  );
};

export default ContactForm;
