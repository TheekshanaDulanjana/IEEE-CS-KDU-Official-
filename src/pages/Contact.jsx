import React, { useRef, useState } from 'react';
import { FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [popupMessage, setPopupMessage] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({ first_name: '', last_name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: 'Write to us!',
      content: (
        <a href="https://mail.google.com/mail/?view=cm&to=ieeecskdu@kdu.ac.lk">
          ieeecskdu@kdu.ac.lk
        </a>
      )
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'Address',
      content: (
        <>
          IEEE Computer Society Student Chapter,<br />
          Kotelawala Defence University,<br />
          Ratmalana, Sri Lanka.
        </>
      )
    }
  ];

  const validateEmail = email => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.first_name.trim()) newErrors.first_name = 'First name is required';
    if (!formData.last_name.trim()) newErrors.last_name = 'Last name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!validateEmail(formData.email)) newErrors.email = 'Invalid email';
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const sendEmail = e => {
    e.preventDefault();

    if (!validateForm()) {
      setPopupMessage('Please fill all required fields.');
      setShowPopup(true);
      return;
    }

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      form.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
      .then(() => {
        setPopupMessage('Request sent successfully!');
        setShowPopup(true);
        form.current.reset();
        setFormData({ first_name: '', last_name: '', email: '', subject: '', message: '' });
        setErrors({});
      })
      .catch(() => {
        setPopupMessage('Failed to send the request!');
        setShowPopup(true);
      });
  };

  return (
    <div className="flex flex-col items-center justify-center w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 py-8 md:py-12 lg:py-20 gap-6 lg:gap-12" style={{ fontFamily: 'poppins, serif', color: '#2c2264' }}>
      <h1 className="text-center text-4xl font-semibold font-poppins text-black mb-6">
        Contact <span className='text-[#f9a319]'> Us!</span>
      </h1>
      <p className="text-center text-md font-poppins text-gray-700 -mt-10">
        If you have any questions or need more information, feel free to reach out to us. <br />
        You can use our contact form for easy communication, or you can contact us directly using the details below. <br />
        We are here to help and look forward to hearing from you!
      </p>

      <div className="w-screen h-80 overflow-hidden -mt-5">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.6061986813543!2d79.887764574756!3d6.817657593180075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25acc4a4a86e1%3A0x23e8b8390853ca4f!2sGeneral%20Sir%20John%20Kotelawala%20Defence%20University!5e0!3m2!1sen!2slk!4v1749739112034!5m2!1sen!2slk"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Maps Location"
        />
      </div>

      {showPopup && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
          <div className="absolute top-0 left-0 w-full h-full bg-black/60 backdrop-blur-xs" />
          <div className="relative rounded-2xl bg-white p-6 shadow-xl w-11/12 sm:w-3/4 md:w-1/2 lg:w-1/3 max-w-md text-center">
            <p className="text-lg font-poppins text-black">{popupMessage}</p>
            <button
              onClick={() => setShowPopup(false)}
              className="mt-4 px-6 py-2 bg-[#f9a319] text-white font-semibold rounded-full font-poppins hover:scale-105 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}

      <div className="flex flex-col lg:flex-row w-full gap-6 lg:gap-12">
        <form ref={form} onSubmit={sendEmail} className="w-full lg:w-1/2 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <input
                name="first_name"
                value={formData.first_name}
                onChange={handleChange}
                placeholder="First Name"
                className="w-full border px-4 py-2 h-10 focus:border-black"
              />
              {errors.first_name && <p className="text-red-500 text-sm mt-1">{errors.first_name}</p>}
            </div>
            <div>
              <input
                name="last_name"
                value={formData.last_name}
                onChange={handleChange}
                placeholder="Last Name"
                className="w-full border px-4 py-2 h-10 focus:border-black"
              />
              {errors.last_name && <p className="text-red-500 text-sm mt-1">{errors.last_name}</p>}
            </div>
          </div>

          <div>
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full border px-4 py-2 h-10 focus:border-black"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>

          <div>
            <input
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject"
              className="w-full border px-4 py-2 h-10 focus:border-black"
            />
            {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
          </div>

          <div>
            <textarea
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              className="w-full border px-4 py-2 focus:border-black"
            />
            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
          </div>

          <button
            type="submit"
            className="w-full h-10 border border-black bg-transparent text-black font-medium transition hover:scale-105"
          >
            Send Your Request!
          </button>
        </form>

        <div className="w-full lg:w-1/2 space-y-6">
          <h1 className="text-2xl text-black font-poppins font-semibold">Let's Connect!</h1>
          <p className="text-md text-gray-700 font-poppins -mt-5">
            If you have any inquiries, project ideas, or opportunities for collaboration, <br />
            We warmly invite you to get in touch with us. <br />
            Our team is eager to explore <br />how we can work together and support your needs.
          </p>

          <div className="grid grid-row sm:grid-row gap-6">
            {contactInfo.map(({ icon, title, content }, i) => (
              <div key={i} className="flex flex-col items-start gap-2">
                <div className="flex flex-row items-center gap-2">
                  <div className="text-2xl text-black">{icon}</div>
                  <div className="text-lg font-semibold font-poppins text-black">{title}</div>
                </div>

                <div
                  className={`text-md font-normal font-poppins text-gray-700 space-y-1`}
                  style={title === 'Address' ? {
                    display: '-webkit-box',
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                  } : {}}
                >
                  {content}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
