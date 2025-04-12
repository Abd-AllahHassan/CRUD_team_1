const Navbar = () => {
  return (
    <div className="bg-dark-bg text-white p-4 flex items-center justify-between flex-col sm:flex-row">
      <h1 className="text-xl font-bold">Dashboard</h1>
      
      {/* Search Bar and Button Container */}
      <div className="flex items-center w-full sm:w-auto mt-4 sm:mt-0 gap-0">
        {/* Search Input */}
        <input
          type="text"
          placeholder="Search..."
          className="bg-gray-800 text-white px-4 py-2 rounded-l-md outline-none w-full sm:w-60"
        />
        
        {/* Search Button */}
        <button className="bg-transparent border-2 border-green-500 text-green-500 px-4 py-2 rounded-md hover:bg-green-500 hover:text-white transition hidden sm:block">
          Search
        </button>
      </div>
    </div>
  );
};

export default Navbar;
