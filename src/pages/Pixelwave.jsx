import React, { useState } from 'react';

export default function ApplicationForm() {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    school: '',
    year: ''
  });

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const scriptURL = 'https://script.google.com/macros/s/AKfycbyTdKE0Jzx8APu1zgDHrEEQE8tzXI-NE1getrfxJAGOsVjq0y1YrcK65p6vcneJMr6d/exec'; // Replace with your Apps Script URL

    const response = await fetch(scriptURL, {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: { 'Content-Type': 'application/json' },
    });

    const result = await response.json();
    alert(result.result || 'Submitted!');
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#0f172a] to-[#1e293b] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-lg bg-white/10 backdrop-blur-sm p-8 rounded-2xl shadow-2xl border border-white/20">
        <h1 className="text-3xl font-bold text-white mb-6 text-center">Apply to <span className="text-[#00ff89]">Pixelwave</span></h1>
        
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-white mb-1">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              required
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#00ff89] bg-white/80"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-white mb-1">Age</label>
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              placeholder="Enter your age"
              required
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#00ff89] bg-white/80"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-white mb-1">School</label>
            <input
              type="text"
              name="school"
              value={formData.school}
              onChange={handleChange}
              placeholder="Enter your school name"
              required
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#00ff89] bg-white/80"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-white mb-1">Year</label>
            <input
              type="text"
              name="year"
              value={formData.year}
              onChange={handleChange}
              placeholder="Ex: Grade 11 / A/L 2025"
              required
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#00ff89] bg-white/80"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#00ff89] text-black font-semibold py-2 rounded-lg hover:bg-[#02e67c] transition"
          >
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
}
