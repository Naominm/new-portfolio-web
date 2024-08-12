import React, { useEffect, useRef, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import emailjs from '@emailjs/browser';
import { AiOutlineCheckCircle, AiOutlineLoading3Quarters } from 'react-icons/ai';

function Contact({ setNavbarVisible }) {
  const [emailStatus, setEmailStatus] = useState('idle'); // idle, sending, success, error
  const form = useRef();

  useEffect(() => {
    AOS.init({
      easing: 'ease-in-out',
    });

    emailjs.init('iQYIstvoyhBP5t4uH');
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    setEmailStatus('sending');

    emailjs
      .sendForm('service_m2n2luw', 'template_28diysx', form.current)
      .then(
        (result) => {
          console.log('Email sent successfully:', result.text);
          setEmailStatus('success');
          setNavbarVisible(true);
          setTimeout(() => {
            setEmailStatus('idle');
          }, 5000); // Reset status after 5 seconds
        },
        (error) => {
          console.error('Email sending error:', error.text);
          setEmailStatus('error');
          setNavbarVisible(true);
          setTimeout(() => {
            setEmailStatus('idle');
          }, 5000); // Reset status after 5 seconds
        }
      );
    e.target.reset();
  };

  const handleFocus = () => {
    if (window.innerWidth < 1024) { // Adjust breakpoint as needed
      setNavbarVisible(false);
    }
  };

  const handleBlur = () => {
    if (window.innerWidth < 1024) { // Adjust breakpoint as needed
      setNavbarVisible(true);
    }
  };

  const renderButtonContent = () => {
    switch (emailStatus) {
      case 'sending':
        return (
          <>
            <AiOutlineLoading3Quarters className="animate-spin mr-2" />
            Sending...
          </>
        );
      case 'success':
        return (
          <>
            <AiOutlineCheckCircle className="mr-2" />
            Sent
          </>
        );
      case 'error':
        return 'Send Message';
      default:
        return 'Send Message';
    }
  };

  return (
    <section id="contact" className="lg:section py-10">
      <div className="container mx-auto px-5">
        <div className="flex flex-col lg:flex-row items-center gap-6">
          <div
            data-aos="flip-up"
            data-aos-duration="1500"
            className="flex-1 flex flex-col justify-start items-start lg:mb-0 lg:ml-40 mb-8 lg:mb-0"
          >
            <div>
              <h4 className="text-xl uppercase text-blue-600 font-medium mb-2 tracking-wide lg:text-4xl font-secondary">
                Get in touch
              </h4>
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
            onFocus={handleFocus}
            onBlur={handleBlur}
            className="text-blue-800 flex-1 bg-white bg-opacity-10 shadow-lg rounded-xl flex flex-col gap-y-4 p-6 max-w-lg mx-auto lg:max-w-xl lg:mr-40"
            style={{ maxHeight: 'calc(100vh - 200px)' }} // Adjust the value as needed
          >
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
              className={`bg-blue-600 text-white py-2 px-4 rounded-md shadow-md transition-all duration-300 flex items-center justify-center ${
                emailStatus === 'sending' ? 'cursor-not-allowed' : ''
              }`}
              type="submit"
              disabled={emailStatus === 'sending'}
            >
              {renderButtonContent()}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
