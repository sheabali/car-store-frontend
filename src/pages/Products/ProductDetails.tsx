import { Button } from '@/components/ui/button';
import { Link, useParams } from 'react-router-dom';
import { useGetSingleCarQuery } from '@/redux/features/cars/car.api';

export default function CarDetails() {
  const carId = useParams();
  console.log(carId.Id);

  const { data: car } = useGetSingleCarQuery(carId?.Id);

  // const { brand } = ;

  // console.log('carData', car?.data);

  const handleCheckCar = () => {
    console.log(car?.data);
  };
  //
  return (
    <div className="max-w-6xl mx-auto my-20 p-6 bg-white shadow-lg rounded-2xl">
      {/* Title and Price */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-4xl font-bold">
          {car?.data.brand} {car?.data.model}
        </h1>
        <p className="text-2xl font-semibold text-black">৳ {car?.data.price}</p>
      </div>

      {/* Main Image */}
      <div className="mb-6">
        <img
          src="https://unsplash.com/photos/a-car-parked-in-the-dark-with-its-lights-on-m2-1PmKnig0"
          alt={`${car?.data.brand} ${car?.data.model}`}
          className="w-full rounded-xl"
        />
      </div>

      {/* Car Information */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <h2 className="text-2xl font-bold mb-4">Car Information</h2>
          <ul className="text-gray-600 space-y-2">
            <li>
              <strong>Brand:</strong> {car?.data.brand}
            </li>
            <li>
              <strong>Model:</strong> {car?.data.model}
            </li>
            <li>
              <strong>Year:</strong> {car?.data.year}
            </li>
            <li>
              <strong>Category:</strong> {car?.data.category}
            </li>
            <li>
              <strong>In Stock:</strong> {car?.data.inStock ? 'Yes' : 'No'}
            </li>
          </ul>
        </div>

        {/* Booking Form */}
        <div className="p-4 bg-gray-100 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold mb-4">Buy Now</h2>
          <p className="text-gray-700 mb-4">
            Available Quantity: {car?.data.quantity}
          </p>
          <p className="text-lg font-semibold text-gray-700 mb-4">
            Price: ৳{car?.data.price}
          </p>

          <Link to={`/checkout/${car?.data._id}`}>
            <Button
              onClick={handleCheckCar}
              className="w-full bg-black text-white py-3 rounded-xl"
            >
              Buy Now
            </Button>
          </Link>
        </div>
      </div>

      {/* Image Gallery */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-4">Description</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {car?.data.description}
        </div>
      </div>
      {/* <div className="mb-6">
        <h2 className="text-2xl font-bold mb-4">Iy</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {car?.data.description}
        </div>
      </div> */}
    </div>
  );
}
