import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { SquarePen, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import {
  useDeleteOrdersMutation,
  useGetOrdersQuery,
} from '@/redux/features/order/order';
import React from 'react';

const OrderDetailsPage = () => {
  // Fetch orders data
  const { data: orders } = useGetOrdersQuery(undefined);
  console.log('orders', orders);

  const [deleteOrder] = useDeleteOrdersMutation();

  // Handle delete
  const handleDeleteClick = (order_id: string) => {
    deleteOrder(order_id);
    toast.success('Car Deleted Successfully', { duration: 2000 });
  };

  return (
    <div className="w-[1120px] px-4 mt-5">
      <div className="text-2xl font-bold py-4">Manage Orders</div>
      <Table>
        <TableCaption>A list of your recent orders.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[150px]">Brand</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Quantity</TableHead>
            <TableHead className="text-right">Price</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {orders?.data &&
            orders.data.map((order: any) => (
              <TableRow key={order._id}>
                {order.products.map((productItem: any) => (
                  <React.Fragment key={productItem?.product?._id}>
                    <TableCell className="font-medium">
                      {productItem?.product?.brand}
                    </TableCell>
                    <TableCell>{productItem?.product?.category}</TableCell>
                    <TableCell>{productItem?.quantity}</TableCell>
                    <TableCell className="text-right">
                      {productItem?.product?.price}
                    </TableCell>
                    <TableCell className="text-right flex justify-end gap-2">
                      <Button className="size-8" variant="outline">
                        <SquarePen />
                      </Button>
                      <Button
                        onClick={() => handleDeleteClick(order?._id)}
                        className="size-8"
                        variant="outline"
                      >
                        <Trash2 />
                      </Button>
                    </TableCell>
                  </React.Fragment>
                ))}
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default OrderDetailsPage;
