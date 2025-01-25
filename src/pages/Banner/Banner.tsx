const Banner = () => {
  return (
    <div className="grid grid-cols-1 place-items-center bg-[#EEF1FB]">
      <div className="text-center">
        <p className="text-base pt-20 pb-4">
          Find cars for sale and for rent near you
        </p>
        <h2 className="text-5xl font-bold pb-16 shadow-slate-600 ">
          Find Your Dream Car
        </h2>
      </div>
      {/* Search Bar */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search for cars..."
          className="p-3 w-80 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="w-[50%]">
        <img src="/src/images/slider51.png.png" alt="Car Image" />
      </div>
    </div>
  );
};

export default Banner;
