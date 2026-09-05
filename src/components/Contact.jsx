import React, { useEffect, useRef, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import emailjs from '@emailjs/browser';
import { AiOutlineCheckCircle, AiOutlineLoading3Quarters } from 'react-icons/ai';

const SERVICE_ID = 'service_m2n2luw';
const TEMPLATE_ID = 'template_28diysx';
const PUBLIC_KEY = 'iQYIstvoyhBP5t4uH';

// Anything that lands in an email header must not be able to start a new one.
const LIMITS = { name: 80, email: 254, subject: 150, message: 3000 };
const COOLDOWN_MS = 30000;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i;

// CR/LF in a header field is how header injection works: strip, collapse, cap.
const singleLine = (value, max) =>
  value.replace(/[\r\n\t]+/g, ' ').replace(/\s{2,}/g, ' ').trim().slice(0, max);

const multiLine = (value, max) =>
  value.replace(/\r\n/g, '\n').replace(/[^\S\n]{2,}/g, ' ').trim().slice(0, max);

const EMPTY = { name: '', email: '', subject: '', message: '', website: '' };

function Contact({ setNavbarVisible }) {
  const [emailStatus, setEmailStatus] = useState('idle'); // idle | sending | success | error
  const [fields, setFields] = useState(EMPTY);
  const [error, setError] = useState('');
  const lastSentAt = useRef(0);

  useEffect(() => {
    AOS.init({ easing: 'ease-in-out' });
    emailjs.init(PUBLIC_KEY);
  }, []);

  const update = (key) => (e) =>
    setFields((prev) => ({ ...prev, [key]: e.target.value }));

  const sendEmail = (e) => {
    e.preventDefault();
    setError('');

    // Honeypot: hidden from people, irresistible to bots. Pretend it worked.
    if (fields.website) {
      setEmailStatus('success');
      setFields(EMPTY);
      return;
    }

    const name = singleLine(fields.name, LIMITS.name);
    const email = singleLine(fields.email, LIMITS.email);
    const subject = singleLine(fields.subject, LIMITS.subject);
    const message = multiLine(fields.message, LIMITS.message);

    if (!name || !email || !subject || !message) {
      setError('Please fill in every field.');
      return;
    }
    if (!EMAIL_RE.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }
    if (Date.now() - lastSentAt.current < COOLDOWN_MS) {
      setError('You have just sent a message. Please wait a moment.');
      return;
    }

    setEmailStatus('sending');

    // Send an explicit parameter object rather than scraping the form, so
    // only these four values can ever reach the template.
    emailjs
      .send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          user_name: name,
          user_email: email,
          reply_to: email,
          subject,
          message,
        },
        { publicKey: PUBLIC_KEY }
      )
      .then(
        () => {
          lastSentAt.current = Date.now();
          setEmailStatus('success');
          setFields(EMPTY);
          setNavbarVisible?.(true);
          setTimeout(() => setEmailStatus('idle'), 5000);
        },
        (err) => {
          // EmailJS reports the real cause here: 403 domain/key, 412 service
          // auth, 422 template recipient, 429 quota.
          console.error('EmailJS send failed:', err?.status, err?.text, err);
          setEmailStatus('error');
          setError(
            err?.status
              ? `Could not send (${err.status}: ${err.text || 'unknown'}). Please email me directly.`
              : 'Something went wrong. Please email me directly.'
          );
          setNavbarVisible?.(true);
          setTimeout(() => setEmailStatus('idle'), 8000);
        }
      );
  };

  const handleFocus = () => {
    if (window.innerWidth < 1024) setNavbarVisible?.(false);
  };

  const handleBlur = () => {
    if (window.innerWidth < 1024) setNavbarVisible?.(true);
  };

  const renderButtonContent = () => {
    switch (emailStatus) {
      case 'sending':
        return (
          <>
            <AiOutlineLoading3Quarters className='animate-spin mr-2' />
            Sending...
          </>
        );
      case 'success':
        return (
          <>
            <AiOutlineCheckCircle className='mr-2' />
            Sent
          </>
        );
      default:
        return 'Send Message';
    }
  };

  const inputClass =
    'bg-gray-100 border border-gray-300 rounded-md py-2 px-4 outline-none w-full placeholder-gray-500 focus:border-accent transition-all';

  return (
    <section id='contact' className='lg:section py-10 '>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row items-center gap-6'>
          <div
            data-aos='flip-up'
            data-aos-duration='1500'
            className='flex-1 flex flex-col justify-start items-start lg:mb-0 lg:ml-40 mb-8 lg:mb-0'
          >
            <div>
              <h4 className='text-xl uppercase text-accent font-medium mb-2 tracking-wide lg:text-4xl font-secondary'>
                Get in touch
              </h4>
              <h2 className='text-4xl md:text-3xl leading-none mb-4 text-gray-100 lg:text-4xl font-secondary'>
                Let's Create <br />
                Something Great!
              </h2>
              <p className='text-gray-100 mb-2 font-secondary'>
                <strong>Email:</strong> naomimbugua349@gmail.com
              </p>
              <p className='text-gray-100 font-secondary'>
                <strong>Phone:</strong> +254703937319
              </p>
            </div>
          </div>

          <form
            data-aos='flip-up'
            data-aos-duration='2500'
            onSubmit={sendEmail}
            onFocus={handleFocus}
            onBlur={handleBlur}
            noValidate
            className='text-blue-800 flex-1 bg-white bg-opacity-10 shadow-lg rounded-xl flex flex-col gap-y-4 p-6 max-w-lg mx-auto lg:max-w-xl lg:mr-40 mb-0.5'
          >
            <input
              name='user_name'
              value={fields.name}
              onChange={update('name')}
              maxLength={LIMITS.name}
              className={inputClass}
              placeholder='Your Name'
              type='text'
              autoComplete='name'
              aria-label='Your name'
              required
            />
            <input
              name='user_email'
              value={fields.email}
              onChange={update('email')}
              maxLength={LIMITS.email}
              className={inputClass}
              placeholder='Email Address'
              type='email'
              autoComplete='email'
              aria-label='Your email address'
              required
            />
            <input
              name='subject'
              value={fields.subject}
              onChange={update('subject')}
              maxLength={LIMITS.subject}
              className={inputClass}
              placeholder='Subject'
              type='text'
              aria-label='Subject'
              required
            />
            <textarea
              name='message'
              value={fields.message}
              onChange={update('message')}
              maxLength={LIMITS.message}
              className={`${inputClass} resize-none`}
              placeholder='Message'
              rows='4'
              aria-label='Message'
              required
            ></textarea>

            {/* Honeypot: off-screen and skipped by tab order, so only bots fill it */}
            <input
              type='text'
              name='website'
              value={fields.website}
              onChange={update('website')}
              className='absolute left-[-9999px] w-px h-px opacity-0'
              tabIndex='-1'
              autoComplete='off'
              aria-hidden='true'
            />

            {error && (
              <p role='alert' className='text-red-300 text-sm font-secondary'>
                {error}
              </p>
            )}

            <button
              className={`gradient text-white py-2 px-4 rounded-md shadow-md transition-all duration-300 flex items-center justify-center ${
                emailStatus === 'sending' ? 'cursor-not-allowed opacity-80' : ''
              }`}
              type='submit'
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
