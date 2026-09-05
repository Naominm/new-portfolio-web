import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaEnvelope, FaWhatsapp, FaLinkedin, FaGithub } from 'react-icons/fa';
import { BsCopy, BsCheck2 } from 'react-icons/bs';

const EMAIL = 'naomimbugua349@gmail.com';
const PHONE = '254703937319';

const channels = [
  {
    icon: <FaEnvelope />,
    label: 'Email',
    value: EMAIL,
    // a prefilled subject saves the sender a decision
    href: `mailto:${EMAIL}?subject=${encodeURIComponent('Project enquiry')}`,
    note: 'Best for detailed enquiries',
  },
  {
    icon: <FaWhatsapp />,
    label: 'WhatsApp',
    value: '+254 703 937 319',
    href: `https://wa.me/${PHONE}?text=${encodeURIComponent(
      "Hi Naomi, I found your portfolio and I'd like to talk about a project."
    )}`,
    note: 'Quickest for a short question',
  },
  {
    icon: <FaLinkedin />,
    label: 'LinkedIn',
    value: 'mbugua-naomi',
    href: 'https://www.linkedin.com/in/mbugua-naomi/',
    note: 'Roles and professional network',
  },
  {
    icon: <FaGithub />,
    label: 'GitHub',
    value: 'Naominm',
    href: 'https://github.com/Naominm',
    note: 'Code behind the projects',
  },
];

function Contact() {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    AOS.init({ easing: 'ease-in-out' });
  }, []);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (e) {
      // clipboard blocked (insecure origin, denied permission): the address is
      // on screen and the mailto card still works, so fail quietly
    }
  };

  return (
    <section id='contact' className='section lg:h-auto py-20'>
      <div className='container mx-auto'>
        <div
          data-aos='fade-up'
          data-aos-duration='1200'
          className='text-center max-w-2xl mx-auto mb-12'
        >
          <h4 className='text-xl uppercase text-accent font-medium mb-2 tracking-wide lg:text-2xl font-secondary'>
            Get in touch
          </h4>
          <h2 className='h2 text-4xl lg:text-5xl leading-tight mb-4 text-gray-100 font-secondary'>
            Let's Create Something Great!
          </h2>
          <p className='text-white/70'>
            Open to full stack roles and freelance work. Pick whichever channel
            suits you.
          </p>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto'>
          {channels.map((channel) => (
            <a
              key={channel.label}
              href={channel.href}
              target='_blank'
              rel='noopener noreferrer'
              data-aos='fade-up'
              data-aos-duration='1000'
              className='group flex flex-col items-center text-center bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-white/30 hover:bg-white/10'
            >
              <span className='w-14 h-14 mb-4 flex justify-center items-center rounded-full bg-white/10 text-accent text-2xl transition-transform duration-500 group-hover:scale-110'>
                {channel.icon}
              </span>
              <span className='text-white font-secondary font-semibold text-lg mb-1'>
                {channel.label}
              </span>
              <span className='text-gradient font-secondary text-sm break-all mb-2'>
                {channel.value}
              </span>
              <span className='text-white/50 font-secondary text-sm'>
                {channel.note}
              </span>
            </a>
          ))}
        </div>

        {/* Some people would rather paste the address than open a mail client */}
        <div
          data-aos='fade-up'
          data-aos-duration='1000'
          className='flex justify-center mt-10'
        >
          <button
            type='button'
            onClick={copyEmail}
            aria-label={`Copy ${EMAIL} to the clipboard`}
            className='flex items-center gap-x-3 h-[48px] px-6 rounded-full border border-white/25 text-white font-secondary text-sm hover:bg-white/10 transition-colors duration-300'
          >
            {copied ? (
              <>
                <BsCheck2 className='text-accent' /> Copied
              </>
            ) : (
              <>
                <BsCopy className='text-accent' /> Copy email address
              </>
            )}
          </button>
        </div>
      </div>
    </section>
  );
}

export default Contact;
