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
} from '@/redux/features/admin/productManagement';
import { SquarePen, Trash2 } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogClose,
} from '@/components/ui/dialog'; // Assuming Dialog components from shadcn UI
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

// Define the Car type interface
interface Car {
  key: string;
  brand: string;
  category: string;
  quantity: number;
  price: number;
}

const CarComponent = () => {
  const { data: carData } = useGetAllCarsQuery(undefined);
  const [deleteCar] = useDeleteCarMutation();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editedCar, setEditedCar] = useState<Car | null>(null); // Typing editedCar as a Car object or null

  const handleEditClick = (car: Car) => {
    setEditedCar(car);
    setIsDialogOpen(true);
  };

  const handleDeleteClick = (carId: string) => {
    deleteCar(carId);
    console.log(`Delete car with id: ${carId}`);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
    setEditedCar(null);
  };

  const handleSaveChanges = () => {
    if (editedCar) {
      // Handle saving the edited car data here (e.g., API call)
      console.log('Saved car:', editedCar);
      handleCloseDialog();
    }
  };

  return (
    <div className="w-[1120px] px-4 mt-5">
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
          {carData?.data.map((car) => (
            <TableRow key={car.key}>
              <TableCell className="font-medium">{car.brand}</TableCell>
              <TableCell>{car.category}</TableCell>
              <TableCell>{car.quantity}</TableCell>
              <TableCell className="text-right">{car.price}</TableCell>

              <TableCell className="text-right flex justify-end gap-2">
                {/* Edit Button */}
                <button onClick={() => handleEditClick(car)}>
                  <SquarePen />
                </button>

                {/* Delete Button */}
                <button onClick={() => handleDeleteClick(car._id)}>
                  <Trash2 />
                </button>
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
                <label htmlFor="brand" className="block text-sm">
                  Brand
                </label>
                <Input
                  type="text"
                  id="brand"
                  value={editedCar.brand}
                  className="input  mt-2"
                  onChange={(e) =>
                    setEditedCar({ ...editedCar, brand: e.target.value })
                  }
                />
              </div>
              <div className="mb-4">
                <label htmlFor="category" className="block text-sm">
                  Category
                </label>
                <Input
                  type="text"
                  id="category"
                  value={editedCar.category}
                  className="input  mt-2"
                  onChange={(e) =>
                    setEditedCar({ ...editedCar, category: e.target.value })
                  }
                />
              </div>
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
