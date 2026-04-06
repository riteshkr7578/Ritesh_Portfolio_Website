import React, { useRef, useState } from "react";
import Particle from "./Particle";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Contact() {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_hdnzruf",
        "template_f07qc6u",
        form.current,
        "y4i7raivwnWuFSdqN"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Message sent successfully!");
          e.target.reset();
          setLoading(false);
        },
        (error) => {
          console.log(error.text);
          toast.error("Failed to send message. Please try again later.");
          setLoading(false);
        }
      );
  };

  return (
    <div className="contact-section relative z-10 pt-20 pb-8">
      <Particle />
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-center">
          <div
            className="w-full md:w-8/12 pt-8 pb-16"
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 className="text-4xl md:text-5xl font-bold pb-5">
              Get in <strong className="text-purple-primary">Touch</strong>
            </h1>
            <p className="text-base md:text-lg opacity-80 mb-8">
              I'm always open to discussing new projects, creative ideas or
              opportunities to be part of your visions.
            </p>

            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              {/* Name Field */}
              <div>
                <label className="block text-sm md:text-base font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  name="user_name"
                  required
                  className="contact-input w-full px-4 py-3 rounded-lg border transition-all duration-300 hover:border-purple-primary focus:border-purple-primary focus:outline-none"
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.05)",
                    color: "#ffffff",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                  }}
                />
              </div>

              {/* Email Field */}
              <div>
                <label className="block text-sm md:text-base font-medium mb-2">
                  Email address
                </label>
                <input
                  type="email"
                  placeholder="Enter email"
                  name="email"
                  required
                  className="contact-input w-full px-4 py-3 rounded-lg border transition-all duration-300 hover:border-purple-primary focus:border-purple-primary focus:outline-none"
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.05)",
                    color: "#ffffff",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                  }}
                />
              </div>

              {/* Message Field */}
              <div>
                <label className="block text-sm md:text-base font-medium mb-2">
                  Message
                </label>
                <textarea
                  rows={5}
                  placeholder="Write your message here..."
                  name="message"
                  required
                  className="contact-input w-full px-4 py-3 rounded-lg border transition-all duration-300 hover:border-purple-primary focus:border-purple-primary focus:outline-none resize-none"
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.05)",
                    color: "#ffffff",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                  }}
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="contact-btn w-full md:w-auto px-6 py-3 rounded-lg font-semibold text-white transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 disabled:opacity-70 disabled:cursor-not-allowed"
                style={{
                  backgroundColor: "#a855f7",
                }}
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer position="bottom-right" theme="dark" />
    </div>
  );
}

export default Contact;
