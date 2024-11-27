import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import ftimg from "../assets/more/24.jpg";

const Footer = () => {
  return (
    <section>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg  p-8 w-full container mx-auto">
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold text-primary mb-2">
              Espresso Emporium
            </h1>
            <p className="text-gray-700">
              Always ready to be your friend. Come & Contact with us to share
              your memorable moments, to share with your best companion.
            </p>
          </div>
          <div className="flex flex-wrap justify-between">
            {/* Social Media Icons */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Get in Touch
              </h2>
              <div className="text-gray-700 mb-2">
                <span role="img" aria-label="phone">
                  📞
                </span>{" "}
                +88 01533 333 333
              </div>
              <div className="text-gray-700 mb-2">
                <span role="img" aria-label="email">
                  📧
                </span>{" "}
                info@gmail.com
              </div>
              <div className="text-gray-700 mb-2">
                <span role="img" aria-label="address">
                  📍
                </span>{" "}
                72, Wall street, King Road, Dhaka
              </div>
              <div className="flex space-x-4 mt-4">
                <FaFacebook className="text-primary text-2xl hover:text-blue-800" />
                <FaTwitter className="text-blue-400 text-2xl hover:text-blue-600" />
                <FaInstagram className="text-pink-600 text-2xl hover:text-pink-800" />
                <FaLinkedin className="text-blue-700 text-2xl hover:text-blue-900" />
              </div>
            </div>
            {/* Contact Form */}
            <div className="w-full md:w-1/2">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Connect with Us
              </h2>
              <form>
                <div className="mb-4">
                  <input
                    type="text"
                    id="name"
                    className="input input-bordered w-full"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="email"
                    id="email"
                    className="input input-bordered w-full"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="mb-4">
                  <textarea
                    id="message"
                    className="input input-bordered w-full"
                    placeholder="Enter your message"
                    rows="10"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="rounded-lg border-2 border-primary px-5 py-2"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full py-3" style={{ backgroundImage: `url(${ftimg})` }}>
        <p className="text-center text-white">
          Copyright Espresso Emporium ! All Rights Reserved
        </p>
      </div>
    </section>
  );
};

export default Footer;
