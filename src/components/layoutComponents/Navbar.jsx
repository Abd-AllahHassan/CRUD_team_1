const Navbar = () => {
  return (
    <div className="bg-gray-200 dark:bg-dark-bg text-dark-text dark:text-white p-4 flex items-center justify-between flex-col sm:flex-row">
      <h1 className="text-3xl font-bold">
        Course<sup className="text-2xl">4</sup>arab
      </h1>
      
      {/* Search Bar and Button Container */}
      <div className="flex items-center w-full sm:w-auto mt-4 sm:mt-0 gap-2">
        {/* Search Input */}
        <input
          type="text"
          placeholder="Search..."
          className="bg-white dark:bg-gray-800 text-black dark:text-white text-sm px-4 py-2 rounded-md outline-none w-full sm:w-52"
        />
        
        {/* Search Button */}
        <button className="bg-transparent border-2 border-green-500 text-green-500 text-sm px-4 py-2 rounded-md hover:bg-green-500 hover:text-white transition hidden sm:block">
          Search
        </button>
      </div>
    </div>
  );
};

export default Navbar;
