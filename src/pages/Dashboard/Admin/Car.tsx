import { useState } from 'react';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  useDeleteCarMutation,
  useGetAllCarsQuery,
  useUpdateCarMutation,
} from '@/redux/features/admin/productManagement';
import { SquarePen, Trash2 } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogClose,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';
import { TCar } from '@/components/constant/constant';

const CarComponent = () => {
  // Fetch all cars data
  const { data: carData } = useGetAllCarsQuery(undefined);

  const [updateCar] = useUpdateCarMutation();

  // Delete car mutation
  const [deleteCar] = useDeleteCarMutation();
  // State for dialog open/close
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editedCar, setEditedCar] = useState<TCar | null>(null); // Typing editedCar as a Car object or null
  const toastId = 'car-toast';
  const handleEditClick = (car: TCar) => {
    setEditedCar(car);
    setIsDialogOpen(true);
  };
  // Define the handleDeleteClick function
  const handleDeleteClick = (carId: string) => {
    deleteCar(carId);
    toast.success('Car Deleted Successfuly', { id: toastId, duration: 2000 });
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
    setEditedCar(null);
  };

  const handleSaveChanges = async () => {
    if (editedCar) {
      try {
        await updateCar({
          id: editedCar._id,
          data: {
            quantity: editedCar.quantity,
            price: editedCar.price,
          },
        }).unwrap();

        toast.success('Car Updated Successfully', {
          id: toastId,
          duration: 2000,
        });
        handleCloseDialog();
      } catch (error) {
        if (error instanceof Error) {
          toast.error(`Error updating car: ${error.message}`);
        } else {
          toast.error('Error updating car');
        }
      }
    }
  };

  return (
    <div className="w-[1120px] px-4 mt-5">
      <div className="text-2xl font-bold py-4">Manage Car</div>
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Brand</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Quantity</TableHead>
            <TableHead className="text-right">Price</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {carData?.data &&
            carData.data.map((car: TCar) => (
              <TableRow key={car._id}>
                <TableCell className="font-medium">{car.brand}</TableCell>
                <TableCell>{car.category}</TableCell>
                <TableCell>{car.quantity}</TableCell>
                <TableCell className="text-right">{car.price}</TableCell>

                <TableCell className="text-right flex justify-end gap-2">
                  <Button
                    className=" size-8"
                    variant="outline"
                    onClick={() => handleEditClick(car)}
                  >
                    <SquarePen />
                  </Button>

                  <Button
                    className=" size-8"
                    variant="outline"
                    onClick={() => car._id && handleDeleteClick(car._id)}
                  >
                    <Trash2 />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>

      {/* Dialog for editing car */}
      {editedCar && (
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent>
            <DialogHeader>Update Car</DialogHeader>

            <form>
              <div className="mb-4">
                <label htmlFor="quantity" className="block text-sm">
                  Quantity
                </label>
                <Input
                  type="number"
                  id="quantity"
                  value={editedCar.quantity}
                  className="input  mt-2"
                  onChange={(e) =>
                    setEditedCar({
                      ...editedCar,
                      quantity: parseInt(e.target.value),
                    })
                  }
                />
              </div>
              <div className="mb-4">
                <label htmlFor="price" className="block text-sm">
                  Price
                </label>
                <Input
                  type="number"
                  id="price"
                  value={editedCar.price}
                  className="input mt-2"
                  onChange={(e) =>
                    setEditedCar({
                      ...editedCar,
                      price: parseFloat(e.target.value),
                    })
                  }
                />
              </div>
            </form>

            <DialogFooter>
              <Button variant="outline" onClick={handleCloseDialog}>
                Cancel
              </Button>
              <Button onClick={handleSaveChanges}>Save</Button>
            </DialogFooter>
            <DialogClose />
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};

export default CarComponent;
