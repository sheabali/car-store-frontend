import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useGetSingleCarQuery } from '@/redux/features/cars/car.api';
import { useCreateOrderMutation } from '@/redux/features/order/order';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { toast } from 'sonner';

const CheckoutPage = () => {
  const carId = useParams();
  console.log(carId.Id);

  const { data: car } = useGetSingleCarQuery(carId?.Id);
  console.log(car);

  // const cartData = useAppSelector((state) => console.log(state));
  // console.log(cartData);

  const dispatch = useAppDispatch();

  const [createOrder, { isLoading, isSuccess, isError, data, error }] =
    useCreateOrderMutation();

  // Convert data into the required format
  const formattedData = {
    products: [
      {
        product: car?.data._id,
        quantity: 1, // Set quantity as per requirement
        // price: data.price,
      },
    ],
  };

  // Output result
  console.log(formattedData);

  const handlePlaceOrder = async () => {
    console.log(car);
    await createOrder(formattedData);
  };

  const id = 'order';

  useEffect(() => {
    if (isLoading) {
      toast.loading('Processing...', { id: id });
    }
    if (isSuccess) {
      toast.success(data.message, { id: id });
      if (data?.data) {
        setTimeout(() => {
          window.location.href = data.data;
        }, 1000);
      }
    }
    if (isError) {
      toast.error(JSON.stringify(error), { id: id });
    }
  }, [data?.data, data?.message, error, isError, isLoading, isSuccess]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    alert('Address saved successfully!');
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-6">
        <div className="flex justify-between items-center mb-6">
          <div className="text-xl font-semibold">Shipping Address</div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-1 gap-4"
        >
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label
                className="block text-sm font-medium mb-1"
                htmlFor="firstName"
              >
                First Name
              </label>
              <Input
                id="firstName"
                {...register('firstName', {
                  required: 'First Name is required',
                })}
                className="w-full rounded-lg shadow-sm p-6"
              />
              {errors.firstName && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.firstName.message}
                </p>
              )}
            </div>

            <div>
              <label
                className="block text-sm font-medium mb-1"
                htmlFor="lastName"
              >
                Last Name
              </label>
              <Input
                id="lastName"
                {...register('lastName', { required: 'Last Name is required' })}
                className="w-full rounded-lg p-6"
              />
              {errors.lastName && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.lastName.message}
                </p>
              )}
            </div>
          </div>

          <div>
            <label
              className="block text-sm font-medium mb-1"
              htmlFor="streetAddress"
            >
              Street Address
            </label>
            <Input
              id="streetAddress"
              {...register('streetAddress', {
                required: 'Street Address is required',
              })}
              className="w-full  rounded-lg p-6"
            />
            {errors.streetAddress && (
              <p className="text-red-500 text-sm mt-1">
                {errors.streetAddress.message}
              </p>
            )}
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div>
              <label
                className="block text-sm font-medium mb-1"
                htmlFor="aptNumber"
              >
                Apt Number
              </label>
              <Input
                id="aptNumber"
                {...register('aptNumber')}
                className="w-full  rounded-lg shadow-sm  p-6"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="state">
                State
              </label>
              <Input
                id="state"
                {...register('state', { required: 'State is required' })}
                className="w-full rounded-lg p-6"
              />
              {errors.state && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.state.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="zip">
                Zip Code
              </label>
              <Input
                id="zip"
                {...register('zip', { required: 'Zip Code is required' })}
                className="w-full rounded-lg shadow-sm p-6"
              />
              {errors.zip && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.zip.message}
                </p>
              )}
            </div>
          </div>

          <div className="mt-8">
            <div className="text-xl font-semibold mb-4">Order Summary</div>
            <div className="bg-gray-50 p-4 rounded-lg shadow">
              <div className="text-sm mb-2">
                <div className="flex justify-between">
                  <span>Items (3)</span>
                  <span>$56.73</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping and handling:</span>
                  <span>$5.50</span>
                </div>
                <div className="flex justify-between">
                  <span>Before tax:</span>
                  <span>$62.23</span>
                </div>
                <div className="flex justify-between">
                  <span>Tax collected:</span>
                  <span>$8.21</span>
                </div>
              </div>
              <div className="border-t border-gray-300 pt-2 flex justify-between font-semibold">
                <span>Order Total:</span>
                <span>$70.44</span>
              </div>
            </div>

            <Button
              onClick={handlePlaceOrder}
              type="submit"
              className="mt-4 w-full font-semibold py-6 bg-black text-white rounded-lg shadow"
            >
              Place Order
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckoutPage;
