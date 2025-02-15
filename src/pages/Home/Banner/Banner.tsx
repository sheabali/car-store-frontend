import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';
import { Link } from 'react-router-dom';

const Banner = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log('Search data:', data);
    // Perform search logic here
  };

  return (
    <div className="grid grid-cols-1 place-items-center bg-[#EEF1FB] px-4">
      {/* Heading */}
      <div className="text-center">
        <p className="text-sm md:text-base pt-10 md:pt-20 pb-2 md:pb-4">
          Find cars for sale and for rent near you
        </p>
        <h2 className="text-3xl md:text-5xl font-bold pb-8 md:pb-16 shadow-slate-600">
          Find Your Dream Car
        </h2>
      </div>

      {/* Search Bar */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col md:flex-row bg-white py-2 rounded-3xl justify-between items-center w-full max-w-4xl space-y-3 md:space-y-0 md:space-x-3 px-4"
      >
        <select
          {...register('carType')}
          className="w-full md:w-auto p-4  border-gray-300 rounded-l-3xl focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="used">Used Cars</option>
          <option value="new">New Cars</option>
        </select>

        <select
          {...register('make')}
          className="w-full md:w-auto p-4  border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Any Makes</option>
          <option value="toyota">Toyota</option>
          <option value="honda">Honda</option>
          <option value="bmw">BMW</option>
        </select>

        <select
          {...register('model')}
          className="w-full md:w-auto p-4  border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Any Models</option>
          <option value="corolla">Corolla</option>
          <option value="civic">Civic</option>
          <option value="x5">X5</option>
        </select>

        <Link to="/allproduct">
          <Button
            type="submit"
            className="w-full   md:w-auto p-6 rounded-lg  text-white  bg-black"
          >
            <Search />
          </Button>
        </Link>
      </form>

      {/* Image */}
      <div className="w-full md:w-[50%] px-4 md:px-0 mt-6">
        <img
          src="/src/images/slider51.png.png"
          alt="Car Image"
          className="w-full object-cover rounded-lg"
        />
      </div>
    </div>
  );
};

export default Banner;
