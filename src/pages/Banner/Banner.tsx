import { Button } from '@/components/ui/button';

const Banner = () => {
  return (
    <div className="grid grid-cols-1 place-items-center bg-[#EEF1FB] px-4">
      <div className="text-center">
        <p className="text-sm md:text-base pt-10 md:pt-20 pb-2 md:pb-4">
          Find cars for sale and for rent near you
        </p>
        <h2 className="text-3xl md:text-5xl font-bold pb-8 md:pb-16 shadow-slate-600">
          Find Your Dream Car
        </h2>
      </div>

      {/* Search Bar */}
      <div className="mb-6 flex flex-col md:flex-row items-center space-y-3 md:space-y-0 md:space-x-2">
        <input
          type="text"
          placeholder="Search for cars..."
          className="p-[11px] w-full md:w-80 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <Button type="button" className="w-full p-[22px] md:w-auto ">
          Search
        </Button>
      </div>

      {/* Image */}
      <div className="w-full md:w-[50%] px-4 md:px-0">
        <img
          src="/src/images/slider51.png.png"
          alt="Car Image"
          className="w-full object-cover"
        />
      </div>
    </div>
  );
};

export default Banner;
