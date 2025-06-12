import React, { useState } from "react";
import GroupImg25 from "../assets/GroupImg25.jpg";
import Board2425 from "../components/Board24-25";
import Board2526 from "../components/Board25-26";

export default function Team() {
  const [selectedYear, setSelectedYear] = useState("2025/2026");

  return (
    <div className="w-full mt-28">
      {/* Top Banner Section */}
      <div className="relative w-full h-72 md:h-72 overflow-hidden">
        <img src={GroupImg25} alt="Team Banner" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black opacity-70 z-10" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-20">
          <h1 className="text-5xl md:text-4xl font-poppins font-semibold uppercase text-white">
            Meet <span className="text-[#f9a319]">Our Team!</span>
          </h1>
          <p className="text-md md:text-xl font-poppins text-white mt-2 max-w-4xl">
            Get to know Our Dedicated Executive Committee and see the impactful teams from <br />
            Previous years who helped us grow.
          </p>
        </div>
      </div>

      <div className="flex justify-center lg:justify-end px-4 mt-6">
        <div className="flex items-center bg-white border border-gray-300 rounded-md shadow-sm px-4 py-1">
          <label className="text-gray-700 font-poppins mr-2">Previous Years:</label>
          <select
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
            className="bg-white text-gray-800 font-poppins font-medium rounded-md px-2 py-1"
          >
            <option value="2025/2026">2025/2026</option>
            <option value="2024/2025">2024/2025</option>
            <option value="2023/2024" disabled>2023/2024</option>
          </select>
        </div>
      </div>

      {selectedYear === "2025/2026" && <Board2526 />}
      {selectedYear === "2024/2025" && <Board2425 />}
    </div>
  );
}
