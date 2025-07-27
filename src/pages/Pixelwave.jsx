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
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const navigate = useNavigate();

  // Countdown timer effect
  useEffect(() => {
    const calculateTimeLeft = () => {
      const deadline = new Date('July 29, 2025 00:00:00').getTime();
      const now = new Date().getTime();
      const difference = deadline - now;
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);

  const universities = [
    "General Sir John Kotelawala Defence University", 
    "University of Moratuwa", 
    "University of Sri Jayawardenapura", 
    "University of Jaffna",
    "University of Sabaragamuwa", 
    "University of Colombo", 
    "University of Kelaniya",
    "University of Peradeniya", 
    "University of Ruhuna", 
    "Eastern University, Sri Lanka",
    "South Eastern University of Sri Lanka", 
    "Rajarata University of Sri Lanka",
    "Uva Wellassa University", 
    "Wayamba University of Sri Lanka", 
    "Open University of Sri Lanka",
    "Sri Lanka Institute of Information Technology (SLIIT)", 
    "NSBM Green University",
    "National Institute of Business Management (NIBM)", 
    "Informatics Institute of Technology (IIT)",
    "SLTC Research University", 
    "Other"
  ];

  const filteredUniversities = universities.filter(uni =>
    uni.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest('.university-input')) {
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
      className="min-h-screen text-white bg-black"
      style={{
        backgroundImage: `
          linear-gradient(to right, rgba(169, 169, 169, 0.1) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(169, 169, 169, 0.1) 1px, transparent 1px)
        `,
        backgroundSize: '40px 40px',
      }}
    >
      {/* Header */}
      <div className="w-full px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6">
        <header className="w-full bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20 flex justify-center">
          <button
            className="text-white uppercase text-xs sm:text-sm font-medium hover:text-[#7f00ff] transition text-center"
            onClick={() => navigate('/')}
          >
            IEEE Computer Society Student Branch Chapter of General Sir John Kotelawala Defence University
          </button>
        </header>
      </div>

      {/* Hero Section */}
      <section className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left: Logo & Text */}
        <div className="md:w-1/2 flex flex-col justify-start space-y-10">
          <div className="space-y-2">
            <h1 className="text-4xl lg:ml-40 sm:text-5xl md:text-6xl font-belleza uppercase font-semibold">
              Welcome
            </h1>
            <h2 className="text-3xl lg:ml-40 sm:text-4xl md:text-5xl -mt-2 uppercase font-belleza font-semibold">
              to the
            </h2>
            <img 
              src={Pixcelwave} 
              alt="Pixelwave Logo" 
              className="mt-2 lg:ml-40 w-full max-w-md" 
            />
          </div>

          {/* Countdown Timer */}
          <div className="pt-2">
            <h3 className="text-lg sm:text-xl font-poppins font-semibold uppercase mb-3 text-center">
              Registration Deadline
            </h3>
            <div className="flex justify-center gap-2 sm:gap-3">
              {Object.entries(timeLeft).map(([unit, value]) => (
                <div key={unit} className="text-center">
                  <div className="bg-[#7f00ff] rounded-lg p-2 w-16 sm:w-20">
                    <div className="text-xl sm:text-2xl font-bold">{value}</div>
                    <div className="text-xs uppercase">{unit}</div>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-center mt-2 text-xs sm:text-sm font-poppins italic text-red-700">
              *Until July 29, 2025 at 00:00 AM
            </p>
          </div>
        </div>

        {/* Right: Lady Image - Hidden on mobile */}
        <div className=" md:block md:w-1/2 flex justify-center">
          <img 
            src={Lady} 
            alt="Lady" 
            className="w-full max-w-md"  
          />
        </div>
      </section>

      {/* Registration Info */}
      <div className="container mx-auto px-4 sm:px-6 py-6 sm:py-8">
        <div className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 p-4 sm:p-6 text-center">
          <h2 className="text-xl sm:text-2xl font-bold mb-2 bg-gradient-to-r from-[#7f00ff] to-[#b344ec] bg-clip-text text-transparent">
            PARTICIPANT REGISTRATION
          </h2>
          <h3 className="text-lg sm:text-xl font-semibold mb-3">PixelWave 2025</h3>
          <p className="text-sm sm:text-base mb-6">
            Welcome to the official registration Web Page for PixelWave 2025: A Digital Art Exhibition,<br className="hidden sm:block" /> 
            Organized by the IEEE Computer Society Student Branch Chapter of General Sir John Kotelawala Defence University.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6 sm:gap-8">
            {/* Yaka Image */}
            <div className="w-full md:w-1/3 max-w-xs">
              <img src={Yaka} alt="Yaka Character" className="w-full" />
            </div>

            {/* Quote Content */}
            <div className="w-full md:w-2/3 space-y-4 text-left">
              {/* Event Phases */}
              <div className="flex items-start gap-3">
                <img src={Quote} alt="Quote Icon" className="w-8 sm:w-10 mt-1" />
                <div>
                  <h4 className="font-bold text-lg sm:text-xl">Event Phases:</h4>
                  <ul className="list-disc list-inside text-sm sm:text-base ml-4">
                    <li>E-Poster Round</li>
                    <li>24-Hour Digital Art Challenge</li>
                    <li>Final Exhibition & Awards Ceremony</li>
                  </ul>
                </div>
              </div>

              {/* Eligibility */}
              <div className="flex items-start gap-3">
                <img src={Quote} alt="Quote Icon" className="w-8 sm:w-10 mt-1" />
                <div>
                  <h4 className="font-bold text-lg sm:text-xl">Eligibility:</h4>
                  <ul className="list-disc list-inside text-sm sm:text-base ml-4">
                    <li>Open to all <span className='font-semibold text-[#7f00ff]'>Undergraduates across Sri Lanka</span></li>
                    <li className='font-semibold text-[#7f00ff]'>Please note: Participation is strictly individual</li>
                  </ul>
                </div>
              </div>

              <p className="text-sm sm:text-base">
                Kindly fill out the form below to <span className='text-[#7f00ff] font-semibold'>confirm</span> your interest and <span className='text-[#7f00ff] font-semibold'>register for the competition</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="container mx-auto px-4 sm:px-6 pb-8 sm:pb-12">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left form */}
          <div className="w-full lg:w-2/3">
            <div className="bg-white/10 backdrop-blur-sm p-5 sm:p-6 rounded-xl border border-white/20">
              <h1 className="text-xl sm:text-2xl font-semibold mb-4 text-center">
                Apply to <span className="text-[#7f00ff]">PixelWave</span>
              </h1>

              {submitStatus === 'success' && (
                <div className="mb-4 p-3 bg-[#404040] border border-[#7f00ff] rounded-lg text-center">
                  ✅ Application submitted successfully!
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="mb-4 p-3 bg-red-500/20 border border-red-500/30 rounded-lg text-center text-red-400">
                  ❌ Submission failed. Please try again.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm mb-1">Full Name</label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full px-3 py-2 rounded-lg bg-white/80 text-black"
                    disabled={isSubmitting}
                  />
                  {errors.fullName && <p className="text-red-400 text-xs mt-1">{errors.fullName}</p>}
                </div>

                <div className="relative university-input">
                  <label className="block text-sm mb-1">University</label>
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={handleUniversitySearch}
                    onFocus={() => setShowDropdown(true)}
                    placeholder="Search or select your university"
                    className="w-full px-3 py-2 rounded-lg bg-white/80 text-gray-600"
                    disabled={isSubmitting}
                  />
                  <select
                    name="university"
                    value={formData.university}
                    onChange={(e) => {
                      handleChange(e);
                      setSearchTerm(e.target.value);
                    }}
                    className="hidden"
                  >
                    <option value="">Select your university</option>
                    {universities.map((uni, index) => (
                      <option key={index} value={uni}>{uni}</option>
                    ))}
                  </select>
                  
                  {showDropdown && filteredUniversities.length > 0 && (
                    <div className="absolute z-10 mt-1 w-full bg-white rounded-lg shadow-lg border border-gray-200 max-h-60 overflow-y-auto">
                      {filteredUniversities.map((uni, index) => (
                        <div
                          key={index}
                          onClick={() => selectUniversity(uni)}
                          className={`px-3 py-2 hover:bg-[#7f00ff] hover:text-white cursor-pointer ${
                            formData.university === uni ? 'bg-[#7f00ff] text-white' : 'text-gray-600'
                          }`}
                        >
                          {uni}
                        </div>
                      ))}
                    </div>
                  )}
                  {errors.university && <p className="text-red-400 text-xs mt-1">{errors.university}</p>}
                </div>

                {formData.university === 'Other' && (
                  <div>
                    <label className="block text-sm mb-1">Enter your University</label>
                    <input
                      type="text"
                      name="otherUniversity"
                      value={formData.otherUniversity}
                      onChange={handleChange}
                      className="w-full px-3 py-2 rounded-lg bg-white/80 text-black"
                      disabled={isSubmitting}
                    />
                    {errors.otherUniversity && <p className="text-red-400 text-xs mt-1">{errors.otherUniversity}</p>}
                  </div>
                )}

                <div>
                  <label className="block text-sm mb-1">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 py-2 rounded-lg bg-white/80 text-black"
                    disabled={isSubmitting}
                  />
                  {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label className="block text-sm mb-1">Contact Number (WhatsApp)</label>
                  <input
                    type="text"
                    name="contact"
                    value={formData.contact}
                    onChange={handleChange}
                    className="w-full px-3 py-2 rounded-lg bg-white/80 text-black"
                    disabled={isSubmitting}
                  />
                  {errors.contact && <p className="text-red-400 text-xs mt-1">{errors.contact}</p>}
                </div>

                <div className="flex items-start gap-2">
                  <input
                    type="checkbox"
                    name="agree"
                    checked={formData.agree}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className="mt-1"
                  />
                  <p className="text-xs sm:text-sm">
                    By submitting this form, I confirm the accuracy of my details, agree to the solo-participant rules, deadlines, and consent to be contacted via email or phone regarding this event.
                  </p>
                </div>
                {errors.agree && <p className="text-red-400 text-xs mt-1">{errors.agree}</p>}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#7f00ff] text-white font-medium py-2 rounded-lg hover:bg-[#6a00d4] transition disabled:opacity-50"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Application'}
                </button>
              </form>
            </div>
          </div>

          {/* Right form - Contact Info */}
          <div className="w-full lg:w-1/3">
            <div className="bg-white/10 backdrop-blur-sm p-5 sm:p-6 rounded-xl border border-white/20 h-full">
              <h1 className="text-lg font-poppins mb-4 text-center">
                For more information,<br /> please contact: 
              </h1>

              <div className="space-y-4">
                {[
                  {
                    name: "Dinuka Wickramasinghe",
                    role: "Chairperson",
                    org: "IEEE Computer Society Student Branch Chapter",
                    uni: "General Sir John Kotelawala Defence University",
                    contact: "+94 76 719 6896"
                  },
                  {
                    name: "Malithi Induwari",
                    role: "Project Co-chair – PixelWave",
                    org: "IEEE Computer Society Student Branch Chapter",
                    uni: "General Sir John Kotelawala Defence University",
                    contact: "+94 77 322 0915"
                  },
                  {
                    name: "Dinitha Nawod",
                    role: "Project Co-chair – PixelWave",
                    org: "IEEE Computer Society Student Branch Chapter",
                    uni: "General Sir John Kotelawala Defence University",
                    contact: "+94 74 058 6120"
                  }
                ].map((person, index) => (
                  <div key={index}>
                    <strong className="text-sm sm:text-base">{person.name}</strong>
                    <p className="text-xs sm:text-sm mt-1">
                      {person.role}<br />
                      {person.org}<br />
                      {person.uni}<br />
                      Contact: {person.contact}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}