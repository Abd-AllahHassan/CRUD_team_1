import React from 'react';

const AddCustomer = () => {
  return (

      
      <form className="bg-white dark:bg-[#1e1e2f] p-6  transition-colors duration-200">
        {/* First Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* First Name */}
          <div>
            <label className="block text-gray-700 dark:text-gray-300 mb-1">First Name</label>
            <input 
              type="text" 
              placeholder="Ali..." 
              className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white transition-colors duration-200" 
            />
          </div>

          {/* Last Name */}
          <div>
            <label className="block text-gray-700 dark:text-gray-300 mb-1">Last Name</label>
            <input 
              type="text" 
              placeholder="Hassan..." 
              className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white transition-colors duration-200" 
            />
          </div>
        </div>

        {/* Second Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Email */}
          <div>
            <label className="block text-gray-700 dark:text-gray-300 mb-1">Email</label>
            <input 
              type="email" 
              placeholder="alf@gmail.com" 
              className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white transition-colors duration-200" 
            />
          </div>

          {/* Telephone */}
          <div>
            <label className="block text-gray-700 dark:text-gray-300 mb-1">Telephone</label>
            <input 
              type="tel" 
              placeholder="011987899" 
              className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white transition-colors duration-200" 
            />
          </div>
        </div>

        {/* Third Row */}
        <div className="grid grid-cols-1  gap-6 mb-6">
          {/* Age */}
          <div>
            <label className="block text-gray-700 dark:text-gray-300 mb-1">Age</label>
            <input 
              type="text" 
              placeholder="Your Age..." 
              className="w-1/2 p-2 border border-gray-300 dark:border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white transition-colors duration-200" 
            />
          </div>

          {/* Country */}
          <div>
            <label className="block text-gray-700 dark:text-gray-300 mb-1">Country</label>
            <select 
              className="w-1/2 p-2 border border-gray-300 dark:border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white transition-colors duration-200"
            >
              <option disabled selected>Choose here...</option>
              <option>Palestine</option>
              <option>Syria</option>
              <option>Egypt</option>
            </select>
          </div>

          {/* Gender */}
          <div>
            <label className="block text-gray-700 dark:text-gray-300 mb-1">Gender</label>
            <select 
              className="w-1/2 p-2 border border-gray-300 dark:border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white transition-colors duration-200"
            >
              <option disabled selected>Choose here...</option>
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>
        </div>

        {/* Submit Button */}
        <button 
          type="submit" 
          className=" bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 transition-colors duration-200"
        >
          Submit
        </button>
      </form>
  
  );
};

export default AddCustomer;