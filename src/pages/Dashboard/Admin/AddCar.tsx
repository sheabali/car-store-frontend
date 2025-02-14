import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { TResponse } from '../../../types/global.ts';
import { useAddCarMutation } from '@/redux/features/admin/productManagement.ts';
import { Button } from '@/components/ui/button.tsx';
import { Input } from '@/components/ui/input.tsx';
import { TCar } from '@/components/constant/constant.ts';

const currentYear = new Date().getFullYear();
const maxYear = currentYear + 4;
const yearOptions = Array.from({ length: 5 }, (_, i) => ({
  value: String(currentYear + i),
  label: String(currentYear + i),
}));

const AddCar = () => {
  const [addCar, { isLoading, isError, error }] = useAddCarMutation();
  const { reset, handleSubmit, register } = useForm({
    defaultValues: {
      brand: '',
      model: '',
      year: String(currentYear),
      price: '',
      category: '',
      description: '',
      quantity: '',
      inStock: 'true',
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading('Adding car...');

    const selectedYear = Number(data.year);
    if (selectedYear > maxYear) {
      toast.error('Year cannot be in the distant future', { id: toastId });
      return;
    }

    const carData: TCar = {
      brand: data.brand,
      model: data.model,
      year: selectedYear,
      price: Number(data.price),
      category: data.category,
      description: data.description,
      quantity: Number(data.quantity),
      inStock: data.inStock === 'true',
    };

    try {
      (await addCar(carData)) as TResponse<TCar>;
      if (isError) {
        toast.error(
          (error as { data?: { message?: string } })?.data?.message ||
            'Failed to add car',
          {
            id: toastId,
          }
        );
      } else {
        toast.success('Car added successfully!', { id: toastId });
        reset();
      }
    } catch (err) {
      console.error('Submission Error:', err);
      toast.error('Failed to add car', { id: toastId });
    }
  };

  return (
    <div className="w-[1020px] mx-auto">
      <div className="flex justify-center items-center min-h-screen ">
        <div className="w-[600px] p-6  rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-6 text-center">Add a New Car</h2>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="grid grid-cols-2 gap-4"
          >
            {/* Brand */}
            <label className="font-medium flex items-center">Brand</label>
            <Input
              type="text"
              {...register('brand')}
              className="w-full p-2 border rounded-md"
            />

            {/* Model */}
            <label className="font-medium flex items-center">Model</label>
            <Input
              type="text"
              {...register('model')}
              className="w-full p-2 border rounded-md"
            />

            {/* Year */}
            <label className="font-medium flex items-center">Year</label>
            <select
              {...register('year')}
              className="w-full p-2 border rounded-md"
            >
              {yearOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>

            {/* Price */}
            <label className="font-medium flex items-center">Price</label>
            <Input
              type="number"
              {...register('price')}
              className="w-full p-2 border rounded-md"
            />

            {/* Category */}
            <label className="font-medium flex items-center">Category</label>
            <Input
              type="text"
              {...register('category')}
              className="w-full p-2 border rounded-md"
            />

            {/* Description */}
            <label className="font-medium flex items-center">Description</label>
            <Input
              type="text"
              {...register('description')}
              className="w-full p-2 border rounded-md"
            />

            {/* Quantity */}
            <label className="font-medium flex items-center">Quantity</label>
            <Input
              type="number"
              {...register('quantity')}
              className="w-full p-2 border rounded-md"
            />

            {/* Stock Status */}
            <label className="font-medium flex items-center">
              Stock Status
            </label>
            <select
              {...register('inStock')}
              className="w-full p-2 border rounded-md"
            >
              <option value="true">In Stock</option>
              <option value="false">Out of Stock</option>
            </select>

            {/* Submit Button (Full Width) */}
            <div className="col-span-2">
              <Button
                type="submit"
                className="w-full mt-4"
                disabled={isLoading}
              >
                {isLoading ? 'Adding...' : 'Add Car'}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddCar;
