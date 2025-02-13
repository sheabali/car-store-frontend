import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { TResponse } from '../../../types/global.ts';
import { useAddCarMutation } from '@/redux/features/admin/productManagement.ts';
import { Button } from '@/components/ui/button.tsx';
import { Input } from '@/components/ui/input.tsx';

const currentYear = new Date().getFullYear();
const maxYear = currentYear + 4;
const yearOptions = [0, 1, 2, 3, 4].map((number) => ({
  value: String(currentYear + number),
  label: String(currentYear + number),
}));

const AddCar = () => {
  const [addCar] = useAddCarMutation();
  const { reset, handleSubmit, register } = useForm();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading('Adding car...');
    console.log('Form Data:', data);

    const selectedYear = Number(data.year);
    if (selectedYear > maxYear) {
      toast.error('Year cannot be in the distant future', { id: toastId });
      return;
    }

    const carData = {
      brand: data.brand,
      model: data.model,
      year: selectedYear,
      price: Number(data.price),
      category: data.category,
      description: data.description,
      quantity: Number(data.quantity),
      inStock: data.inStock === 'true',
    };

    console.log('Car Data:', carData);
    try {
      const res = (await addCar(carData)) as TResponse<any>;
      if (res.error) {
        toast.error(res.error.data.message, { id: toastId });
      } else {
        toast.success('Car added successfully!', { id: toastId });
        reset();
      }
      console.log(res);
    } catch (err) {
      console.error(err);
      toast.error('Failed to add car', { id: toastId });
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-[600px] max-w-lg p-6 bg-white rounded-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">Add a New Car</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block font-medium">Brand</label>
            <Input
              type="text"
              {...register('brand')}
              className="w-full p-2 border rounded-md"
            />
          </div>

          <div>
            <label className="block font-medium">Model</label>
            <Input
              type="text"
              {...register('model')}
              className="w-full p-2 border rounded-md"
            />
          </div>

          <div>
            <label className="block font-medium">Year</label>
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
          </div>

          <div>
            <label className="block font-medium">Price</label>
            <Input
              type="number"
              {...register('price')}
              className="w-full p-2 border rounded-md"
            />
          </div>

          <div>
            <label className="block font-medium">Category</label>
            <Input
              type="text"
              {...register('category')}
              className="w-full p-2 border rounded-md"
            />
          </div>

          <div>
            <label className="block font-medium">Description</label>
            <Input
              type="text"
              {...register('description')}
              className="w-full p-2 border rounded-md"
            />
          </div>

          <div>
            <label className="block font-medium">Quantity</label>
            <Input
              type="number"
              {...register('quantity')}
              className="w-full p-2 border rounded-md"
            />
          </div>

          <div>
            <label className="block font-medium">Stock Status</label>
            <select
              {...register('inStock')}
              className="w-full p-2 border rounded-md"
            >
              <option value="true">In Stock</option>
              <option value="false">Out of Stock</option>
            </select>
          </div>

          <Button type="submit" className="w-full ">
            Add Car
          </Button>
        </form>
      </div>
    </div>
  );
};

export default AddCar;
