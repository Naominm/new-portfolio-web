import React, { useEffect, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import emailjs from '@emailjs/browser';

function Contact() {
  useEffect(() => {
    AOS.init({
      easing: 'ease-in-out',
    });

    // Initialize EmailJS with the public key
    emailjs.init('QzP77jUEK6t5JPxC2');
  }, []);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_m2n2luw', 'template_78lb1uj', form.current)
      .then(
        (result) => {
          console.log('Email sent successfully:', result.text);
          alert('Email sent successfully!');
        },
        (error) => {
          console.error('Email sending error:', error.text);
          alert('Failed to send email. Please try again.');
        }
      );
    e.target.reset();
  };

  return (
    <section id="contact" className="lg:section py-16">
      <div className="container mx-auto p-5">
        <div className="ml-40 flex flex-col lg:flex-row items-center">
          <div data-aos="flip-up" data-aos-duration="1500" className="flex-1 flex flex-col justify-start items-start lg:mb-0">
            <div>
              <h4 className="text-xl uppercase text-blue-600 font-medium mb-2 tracking-wide lg:text-4xl font-secondary">Get in touch</h4>
              <h2 className="text-4xl md:text-3xl leading-none mb-4 text-gray-100 lg:text-4xl font-secondary">
                Let's Create <br />
                Something Great!
              </h2>
              <p className="text-gray-100 mb-2 font-secondary">
                <strong>Email:</strong> naomimbugua536@gmail.com
              </p>
              <p className="text-gray-100 font-secondary">
                <strong>Phone:</strong> +254703937319
              </p>
            </div>
          </div>

          <form
            data-aos="flip-up"
            data-aos-duration="2500"
            ref={form}
            onSubmit={sendEmail}
            className="mr-40 text-blue-800 flex-1 bg-white bg-opacity-10 shadow-lg rounded-xl flex flex-col gap-y-4 p-6 max-w-md mx-auto lg:ml-8"
          >
            <input
              name="user_name"
              className="border border-gray-300 rounded-md py-2 px-4 outline-none w-full placeholder-gray-500 focus:border-blue-500 transition-all"
              placeholder="Full Name"
              type="text"
              required
            />
            <input
              name="user_email"
              className="bg-gray-100 border border-gray-300 rounded-md py-2 px-4 outline-none w-full placeholder-gray-500 focus:border-blue-500 transition-all"
              placeholder="Email Address"
              type="email"
              required
            />
            <input
              name="subject"
              className="bg-gray-100 border border-gray-300 rounded-md py-2 px-4 outline-none w-full placeholder-gray-500 focus:border-blue-500 transition-all"
              placeholder="Subject"
              type="text"
              required
            />
            <textarea
              name="message"
              className="bg-gray-100 border border-gray-300 rounded-md py-2 px-4 outline-none w-full placeholder-gray-500 focus:border-blue-500 transition-all resize-none"
              placeholder="Message"
              rows="4"
              required
            ></textarea>
            <button
              className="bg-blue-600 text-white py-2 px-4 rounded-md shadow-md hover:bg-blue-700 transition-all duration-300"
              type="submit"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
