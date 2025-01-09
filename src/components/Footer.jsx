'use client'
import React, { useState } from "react";
import Container from "./Container";
import FadeIn from "./FadeIn";
import FooterNavigation from "./FooterNavigation";
import Logo from "./Logo";
import Link from "next/link";
import emailjs from "emailjs-com";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import Toastify styles

const NewsletterForm = () => {
  const [email, setEmail] = useState(""); // State to hold the email
  const [loading, setLoading] = useState(false); // Loading state

  const handleChange = (e) => {
    setEmail(e.target.value); // Update the email state
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      toast.error("Please enter a valid email address.", {
        position: toast.POSITION.TOP_RIGHT,
      });
      return;
    }

    setLoading(true); // Start loading

    // Send email using EmailJS
    emailjs
      .send(
        "service_rdg9lkr", // Replace with your EmailJS service ID
        "template_z14h68k", // Replace with your EmailJS template ID
        { email }, // Pass the email as a template parameter
        "T4TTu8-BgUxqyzHwp" // Replace with your EmailJS user ID
      )
      .then(
        (result) => {
          setLoading(false); // Stop loading
          toast.info("You have successfully subscribed to the newsletter!");
          setEmail(""); // Clear the email input field
        },
        (error) => {
          setLoading(false); // Stop loading
          toast.error("Error subscribing, please try again later.");
          console.error(error.text); // Log the error for debugging
        }
      );
  };

  return (
    <div className="newsletter-form-container">
      <form className="max-w-sm" onSubmit={handleSubmit}>
        <h2 className="font-display text-sm font-semibold tracking-wider text-neutral-950">
          Sign up for our newsletter
        </h2>
        <p className="mt-4 text-sm text-neutral-700">
          Subscribe to get the latest news, articles, resources, and inspiration.
        </p>
        <div className="relative mt-6">
          <input
            type="email"
            placeholder="Email address"
            autoComplete="email"
            aria-label="Email address"
            value={email}
            onChange={handleChange} // Update state on input change
            className="block w-full rounded-2xl border border-neutral-300 bg-transparent py-4 pl-6 pr-20 text-base/6 text-neutral-950 ring-4 ring-transparent transition placeholder:text-neutral-500 focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5"
          />
          <div className="absolute inset-y-1 right-1 flex justify-end">
            <button
              type="submit"
              aria-label="Submit"
              className="flex aspect-square h-full items-center justify-center rounded-xl bg-neutral-950 text-white transition hover:bg-neutral-800"
              disabled={loading} // Disable the button while loading
            >
              <ArrowIcon className="w-4" />
            </button>
          </div>
        </div>
      </form>

      {/* ToastContainer to show success/error notifications */}
      <ToastContainer theme="dark" position="top-right"
 />
    </div>
  );
};


const ArrowIcon = (props) => {
  return (
    <svg viewBox="0 0 16 6" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 3 10 .5v2H0v1h10v2L16 3Z"
      />
    </svg>
  );
};

const Footer = () => {
  return (
    <Container as="footer" className="mt-24 w-full sm:mt-32 lg:mt-40">
      <FadeIn>
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
          <FooterNavigation />
          <div className="flex lg:justify-end">
            <NewsletterForm />
          </div>
        </div>
        <div className="mb-20 mt-24 flex flex-wrap items-end justify-between gap-x-6 gap-y-4 border-t border-neutral-950/10 pt-12">
          <Link href={"/"} aria-label="Home">
            <Logo className="h-8" fillOnHover>
              XETAWISE
            </Logo>
          </Link>
          <p className="text-sm text-neutral-700">
            © XETAWISE Inc. {new Date().getFullYear()}
          </p>
        </div>
      </FadeIn>
    </Container>
  );
};

export default Footer;
