import React from 'react';
import { useForm, SubmitHandler, FieldValues } from 'react-hook-form';

import { TResponse } from '@/types';
import { TCar } from '@/components/constant/constant';
import { toast } from 'sonner';
import { useAddCarMutation } from '@/redux/features/admin/productManagement';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const AddCar: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [addCar] = useAddCarMutation();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading('Adding car...');

    const carData: TCar = {
      brand: data.brand,
      model: data.model,
      year: Number(data.year),
      price: Number(data.price),
      category: data.category,
      description: data.description,
      quantity: Number(data.quantity),
      inStock: data.inStock === 'true',
    };

    try {
      const response = (await addCar(carData)) as TResponse<TCar>;
      if (response.error) {
        toast.error(response.error.data?.message || 'Failed to add car', {
          id: toastId,
        });
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
    <div className="w-[1023px] mx-auto">
      <div className="flex justify-center items-center min-h-screen">
        <div className="w-full max-w-md p-8  rounded-lg shadow-md">
          <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
            Add a New Car
          </h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Brand
              </label>
              <Input
                type="text"
                {...register('brand', { required: 'Brand is required' })}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
              {errors.brand && (
                <p className="text-red-500 text-sm">
                  {errors.brand?.message && String(errors.brand.message)}
                </p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Model
              </label>
              <Input
                type="text"
                {...register('model', { required: 'Model is required' })}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
              {errors.model?.message && (
                <p className="text-red-500 text-sm">
                  {String(errors.model.message)}
                </p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Year
              </label>
              <Input
                type="number"
                {...register('year', {
                  required: 'Year is required',
                  min: { value: 1886, message: 'Year must be after 1886' },
                })}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
              {errors.year && (
                <p className="text-red-500 text-sm">
                  {String(errors.year.message)}
                </p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Price
              </label>
              <Input
                type="number"
                {...register('price', { required: 'Price is required' })}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
              {errors.price && (
                <p className="text-red-500 text-sm">
                  {String(errors.price.message)}
                </p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Category
              </label>
              <Input
                type="text"
                {...register('category', { required: 'Category is required' })}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
              {errors.category && (
                <p className="text-red-500 text-sm">
                  {String(errors.category.message)}
                </p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Description
              </label>
              <Input
                type="text"
                {...register('description', {
                  required: 'Description is required',
                })}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
              {errors.description && (
                <p className="text-red-500 text-sm">
                  {String(errors.description.message)}
                </p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Quantity
              </label>
              <Input
                type="number"
                {...register('quantity', {
                  required: 'Quantity is required',
                  min: { value: 1, message: 'Quantity must be at least 1' },
                })}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
              {errors.quantity && (
                <p className="text-red-500 text-sm">
                  {String(errors.quantity.message)}
                </p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                In Stock
              </label>
              <select
                {...register('inStock', {
                  required: 'In Stock status is required',
                })}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              >
                <option value="true">Yes</option>
                <option value="false">No</option>
              </select>
              {errors.inStock && (
                <p className="text-red-500 text-sm">
                  {String(errors.inStock.message)}
                </p>
              )}
            </div>
            <div className="flex justify-end">
              <Button
                type="submit"
                className="py-2 px-4 bg-black text-white rounded-md shadow-sm  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Add Car
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddCar;
