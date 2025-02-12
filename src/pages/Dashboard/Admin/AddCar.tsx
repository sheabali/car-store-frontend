import { FieldValues, SubmitHandler } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import AForm from '@/components/form/AForm';
import AInput from '@/components/form/AInput';

// import { useAddCarMutation } from '@/redux/features/admin/carManagement';
import ASelect from '@/components/form/ASelect';

const categoryOptions = [
  { value: 'Sedan', label: 'Sedan' },
  { value: 'SUV', label: 'SUV' },
  { value: 'Truck', label: 'Truck' },
  { value: 'Coupe', label: 'Coupe' },
  { value: 'Convertible', label: 'Convertible' },
];

const CreateCar = () => {
  // const [addCar] = useAddCarMutation();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    console.log('Submitted Data:', data);
    const toastId = toast.loading('Adding car...');

    const carData = {
      ...data,
      price: Number(data.price),
      year: Number(data.year),
      quantity: Number(data.quantity),
      inStock: data.inStock === 'true',
    };

    try {
      // const res = await addCar(carData);
      if ('error' in res) {
        toast.error(res.error.data.message, { id: toastId });
      } else {
        toast.success('Car added successfully!', { id: toastId });
      }
    } catch (err) {
      console.error('Error adding car:', err);
    }
  };

  return (
    <div className="flex  justify-center items-center w-[1125px]">
      <div className="w-full max-w-md">
        <AForm onSubmit={onSubmit}>
          <AInput type="text" label="Brand" name="brand" />
          <AInput type="text" label="Model" name="model" />
          <AInput type="number" label="Year" name="year" />
          <AInput type="number" label="Price" name="price" />
          <ASelect label="Category" name="category" options={categoryOptions} />
          <AInput type="text" label="Description" name="description" />
          <AInput type="number" label="Quantity" name="quantity" />
          <ASelect
            label="In Stock"
            name="inStock"
            options={[
              { value: 'true', label: 'Yes' },
              { value: 'false', label: 'No' },
            ]}
          />
          <Button type="submit" className="w-full">
            Submit
          </Button>
        </AForm>
      </div>
    </div>
  );
};

export default CreateCar;
