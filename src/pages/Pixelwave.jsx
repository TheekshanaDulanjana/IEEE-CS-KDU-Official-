import React, { useState, useEffect } from 'react';
import Pixcelwave from '../assets/Pixcelwave.png';
import Lady from '../assets/LadyI.png';
import Yaka from '../assets/DigitalYaka.png';
import Quote from '../assets/quote.png';
import { useNavigate } from 'react-router-dom';

export default function ApplicationForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    university: '',
    otherUniversity: '',
    email: '',
    contact: '',
    agree: false,
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  const universities = [
    "General Sir John Kotelawala Defence University", "University of Moratuwa", "University of Sri Jayawardenapura", "University of Jaffna",
    "University of Sabaragamuwa", "University of Colombo", "University of Kelaniya",
    "University of Peradeniya", "University of Ruhuna", "Eastern University, Sri Lanka",
    "South Eastern University of Sri Lanka", "Rajarata University of Sri Lanka",
    "Uva Wellassa University", "Wayamba University of Sri Lanka", "Open University of Sri Lanka",
    "Sri Lanka Institute of Information Technology (SLIIT)", "NSBM Green University",
    "National Institute of Business Management (NIBM)", "Informatics Institute of Technology (IIT)",
    "SLTC Research University", "Other"
  ];

  const filteredUniversities = universities.filter(uni =>
    uni.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest('.university-dropdown')) {
        setShowDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.university) newErrors.university = 'University is required';
    if (formData.university === 'Other' && !formData.otherUniversity.trim())
      newErrors.otherUniversity = 'Please specify your university';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(formData.email))
      newErrors.email = 'Invalid email address';
    if (!formData.contact.trim()) newErrors.contact = 'Contact number is required';
    else if (!/^\d{10}$/.test(formData.contact))
      newErrors.contact = 'Contact number must be 10 digits';
    if (!formData.agree) newErrors.agree = 'You must agree to the declaration';
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleUniversitySearch = (e) => {
    setSearchTerm(e.target.value);
    setShowDropdown(true);
  };

  const selectUniversity = (uni) => {
    setFormData(prev => ({ ...prev, university: uni }));
    setSearchTerm(uni);
    setShowDropdown(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('');
    setErrors({});

    const scriptURL = import.meta.env.VITE_SCRIPT_URL;

    const payload = {
      fullName: formData.fullName,
      university: formData.university === 'Other' ? formData.otherUniversity : formData.university,
      email: formData.email,
      contact: formData.contact,
      agree: formData.agree ? 'Agreed' : 'Not Agreed',
    };

    try {
      await fetch(scriptURL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
        mode: 'no-cors',
      });

      setSubmitStatus('success');
      setFormData({
        fullName: '',
        university: '',
        otherUniversity: '',
        email: '',
        contact: '',
        agree: false,
      });
      setSearchTerm('');

      setTimeout(() => setSubmitStatus(''), 3000);
    } catch (error) {
      console.error('Submission failed:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus(''), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className="min-h-screen text-white"
      style={{
        backgroundColor: '#000',
        backgroundImage: `
          linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
        `,
        backgroundSize: '40px 40px',
      }}
    >
      {/* Header */}
      <div className="absolute w-full px-4 sm:px-6 lg:px-8 mt-4 sm:mt-10">
        <header className="w-full h-18 bg-white/10 backdrop-blur-sm p-4 sm:p-5 rounded-2xl shadow-2xl border border-white/20 flex justify-center items-center gap-5 sm:gap-10">
          <button
            className="text-white uppercase text-sm sm:text-base font-medium hover:text-[#7f00ff] transition"
            onClick={() => navigate('/')}
          >
            IEEE Computer Society Student Branch Chapter of General Sir John Kotelawala Defence University
          </button>
        </header>
      </div>

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between px-4 sm:px-8 py-8 sm:py-16 max-w-7xl mx-auto">
        {/* Left: Logo & Text */}
        <div className="md:w-1/2 text-left space-y-2 mt-30 md:mt-0">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-belleza uppercase font-semibold leading-tight">
            Welcome
          </h1>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl -mt-5 uppercase font-belleza font-semibold leading-tight">
            to the
          </h2>
          <img 
            src={Pixcelwave} 
            alt="Pixelwave Logo" 
            className="mt-6 w-full max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl" 
          />
        </div>

        {/* Right: Lady Image - Hidden on small screens */}
        <div className="md:block md:w-1/2 mt-10 md:mt-0 flex justify-end">
          <img 
            src={Lady} 
            alt="Lady" 
            className="w-[300px] md:w-[400px] ml-20 lg:w-[500px]"  
          />
        </div>
      </section>

      {/* Registration Info */}
      <div className="bg-white/10 font-poppins backdrop-blur-sm rounded-2xl shadow-2xl border border-white/20 p-2 sm:p-8 max-w-7xl mx-4 md:mx-5 lg:mx-auto sm:mx-auto text-center mb-8 sm:mb-10">
          <h2
            className="text-2xl sm:text-3xl mt-4 font-bold mb-1"
            style={{
              background: "linear-gradient(90deg, #7f00ff, #b344ec)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            PARTICIPANT REGISTRATION
          </h2>

          <h3 className="text-lg sm:text-xl font-semibold mb-4 text-white">PixelWave 2025</h3>
          <p className="text-white text-sm sm:text-base">
            Welcome to the official registration Web Page for PixelWave 2025 :
            A Digital Art Exhibition, <br className="hidden sm:block" /> Organized by the IEEE Computer Society Student Branch Chapter of General Sir John Kotelawala Defence University.
          </p>

          <div className="mt-8 sm:mt-10 flex flex-col md:flex-row items-center justify-center gap-8 sm:gap-20 text-white">
            {/* Yaka Image */}
            <div className="w-full md:w-1/3 flex justify-center">
              <img src={Yaka} alt="Yaka Character" className="w-[240px] sm:w-[150px] md:w-[300px]" />
            </div>

            {/* Quote Content */}
            <div className="w-full md:w-2/3 space-y-4 sm:space-y-6">
              {/* Event Phases */}
              <div className="flex items-start gap-3 sm:gap-4">
                <img src={Quote} alt="Quote Icon" className="w-12 sm:w-16 mt-1" />
                <div className="text-left">
                  <h4 className="font-bold text-xl sm:text-2xl">Event Phases:</h4>
                  <ul className="list-disc list-inside text-sm sm:text-base">
                    <li>E-Poster Round</li>
                    <li>24-Hour Digital Art Challenge</li>
                    <li>Final Exhibition & Awards Ceremony</li>
                  </ul>
                </div>
              </div>

              {/* Eligibility */}
              <div className="flex items-start gap-3 sm:gap-4">
                <img src={Quote} alt="Quote Icon" className="w-12 sm:w-16 mt-1" />
                <div className="text-left">
                  <h4 className="font-bold text-xl sm:text-2xl">Eligibility:</h4>
                  <ul className="list-disc list-inside text-sm sm:text-base">
                    <li>Open to all <span className='font-semibold text-[#7f00ff]'> Undergraduates across Sri Lanka.</span></li>
                    <li className='font-semibold text-[#7f00ff]'>Please note: Participation is strictly individual.</li>
                  </ul>
                </div>
              </div>

              <p className="text-sm sm:text-base font-poppins text-left">
                Kindly fill out the form below to <span className='text-[#7f00ff] font-semibold'>confirm </span>  your interest and <span className='text-[#7f00ff] font-semibold'>register for the competition. </span>
              </p>
            </div>
          </div>
        </div>

      {/* Form Section */}
      <div className="flex flex-col lg:flex-row items-center justify-center px-4 sm:px-6 pb-8 sm:pb-16 max-w-7xl mx-auto gap-6 lg:gap-12 w-full">
        {/* Left form */}
        <div className="w-full lg:w-2/3">
          <div className="w-full bg-white/10 backdrop-blur-sm p-6 sm:p-8 rounded-2xl shadow-2xl border border-white/20">
            <h1 className="text-2xl sm:text-3xl font-semibold text-white font-poppins mb-6 text-center">
              Apply to <span className="text-[#7f00ff] font-poppins font-semibold">PixelWave</span>
            </h1>

            {submitStatus === 'success' && (
              <div className="mb-4 p-3 bg-[#404040] border border-[#7f00ff] rounded-lg text-center text-[#ffffff]">
                ✅ Application submitted successfully!
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="mb-4 p-3 bg-red-500/20 border border-red-500/30 rounded-lg text-center text-red-400">
                ❌ Submission failed. Please try again.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
              <div>
                <label className="block text-sm text-white mb-2">Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg bg-white/80 text-black"
                  disabled={isSubmitting}
                />
                {errors.fullName && <p className="text-red-400 text-xs">{errors.fullName}</p>}
              </div>

              <div className="relative university-dropdown">
                <label className="block text-sm text-white mb-2">University</label>
                <input
                  type="text"
                  value={searchTerm}
                  onChange={handleUniversitySearch}
                  onFocus={() => setShowDropdown(true)}
                  placeholder="Search or select your university"
                  className="w-full px-4 py-2 rounded-lg bg-white/80 text-gray-600"
                  disabled={isSubmitting}
                />
                {showDropdown && (
                  <div className="absolute z-10 mt-1 w-full bg-white rounded-lg shadow-lg border border-gray-200">
                    <select
                      name="university"
                      value={formData.university}
                      onChange={(e) => selectUniversity(e.target.value)}
                      size={Math.min(8, filteredUniversities.length)}
                      className="w-full text-gray-600 rounded-lg"
                      disabled={isSubmitting}
                    >
                      {filteredUniversities.map((uni, index) => (
                        <option 
                          key={index} 
                          value={uni}
                          className="px-4 py-2 hover:bg-[#7f00ff] hover:text-white cursor-pointer"
                        >
                          {uni}
                        </option>
                      ))}
                    </select>
                  </div>
                )}
                {errors.university && <p className="text-red-400 text-xs">{errors.university}</p>}
              </div>

              {formData.university === 'Other' && (
                <div>
                  <label className="block text-sm text-white mb-2">Enter your University</label>
                  <input
                    type="text"
                    name="otherUniversity"
                    value={formData.otherUniversity}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg bg-white/80 text-black"
                    disabled={isSubmitting}
                  />
                  {errors.otherUniversity && <p className="text-red-400 text-xs">{errors.otherUniversity}</p>}
                </div>
              )}

              <div>
                <label className="block text-sm text-white mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg bg-white/80 text-black"
                  disabled={isSubmitting}
                />
                {errors.email && <p className="text-red-400 text-xs">{errors.email}</p>}
              </div>

              <div>
                <label className="block text-sm text-white mb-2">Contact Number (WhatsApp)</label>
                <input
                  type="text"
                  name="contact"
                  value={formData.contact}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg bg-white/80 text-black"
                  disabled={isSubmitting}
                />
                {errors.contact && <p className="text-red-400 text-xs">{errors.contact}</p>}
              </div>

              <div className="flex items-start space-x-2">
                <input
                  type="checkbox"
                  name="agree"
                  checked={formData.agree}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className="mt-1"
                />
                <p className="text-white text-xs sm:text-sm">
                  By submitting this form, I confirm the accuracy of my details, agree to the solo-participant rules, deadlines, and consent to be contacted via email or phone regarding this event.
                </p>
              </div>
              {errors.agree && <p className="text-red-400 text-xs">{errors.agree}</p>}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#7f00ff] text-white font-semibold py-2 hover:cursor-pointer rounded-lg hover:bg-[#513767] transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Application'}
              </button>
            </form>
          </div>
        </div>

        {/* Right form - Contact Info */}
        <div className="w-full lg:w-1/3">
          <div className="w-full bg-white/10 backdrop-blur-sm p-6 sm:p-8 rounded-2xl shadow-2xl border border-white/20">
            <h1 className="text-lg sm:text-xl font-poppins text-white mb-4 text-center">
              For more information,<br /> please contact: 
            </h1>

            <div className="text-left text-white font-poppins space-y-4 sm:space-y-5">
              <p>
                <strong className="text-base sm:text-lg">Dinuka Wickramasinghe</strong><br />
                <span className="text-xs sm:text-sm font-normal">
                  Chairperson <br />
                  IEEE Computer Society Student Branch Chapter <br />
                  General Sir John Kotelawala Defence University <br />
                  Contact: +94 76 719 6896
                </span>
              </p>

              <p>
                <strong className="text-base sm:text-lg">Malithi Induwari</strong><br />
                <span className="text-xs sm:text-sm font-normal">
                  Project Co-chair – PixelWave <br />
                  IEEE Computer Society Student Branch Chapter <br />
                  General Sir John Kotelawala Defence University <br />
                  Contact: +94 77 322 0915
                </span>
              </p>

              <p>
                <strong className="text-base sm:text-lg">Dinitha Nawod</strong><br />
                <span className="text-xs sm:text-sm font-normal">
                  Project Co-chair – PixelWave <br />
                  IEEE Computer Society Student Branch Chapter <br />
                  General Sir John Kotelawala Defence University <br />
                  Contact: +94 74 058 6120
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}