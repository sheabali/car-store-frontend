import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Edit, MoreHorizontal } from 'lucide-react';

const OrderDetailsPage = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Order #32543</h1>
        <div className="flex space-x-2">
          <Badge variant="outline" className="bg-green-100 text-green-600">
            Paid
          </Badge>
          <Badge variant="outline" className="bg-blue-100 text-blue-600">
            Fulfilled
          </Badge>
          <span className="text-gray-500">Aug 17, 2020, 5:48 (ET)</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Order Details */}
        <Card className="lg:col-span-2">
          <CardContent>
            <div className="mb-4 flex justify-between items-center">
              <h2 className="text-lg font-semibold">Order details</h2>
              <Button variant="outline" size="sm">
                Edit
              </Button>
            </div>

            <div className="space-y-4">
              {/* Item 1 */}
              <div className="flex justify-between items-center">
                <div className="flex space-x-4">
                  <img
                    src="https://plus.unsplash.com/premium_photo-1686730540270-93f2c33351b6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2FyfGVufDB8fDB8fHww"
                    alt="Topman shoe in green"
                    className="w-12 h-12 rounded-md"
                  />
                  <div>
                    <h3 className="font-medium">Topman shoe in green</h3>
                    <p className="text-sm text-gray-500">Gender: Women</p>
                    <p className="text-sm text-gray-500">Color: Green</p>
                    <p className="text-sm text-gray-500">Size: UK 7</p>
                  </div>
                </div>
                <div>
                  <p>$21.00 × 2</p>
                  <p className="font-bold">$42.00</p>
                </div>
              </div>

              {/* Item 2 */}
              <div className="flex justify-between items-center">
                <div className="flex space-x-4">
                  <img
                    src="https://plus.unsplash.com/premium_photo-1664303847960-586318f59035?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fGNhcnxlbnwwfHwwfHx8MA%3D%3D"
                    alt="Office Notebook"
                    className="w-12 h-12 rounded-md"
                  />
                  <div>
                    <h3 className="font-medium">Office Notebook</h3>
                    <p className="text-sm text-gray-500">Color: Gray</p>
                  </div>
                </div>
                <div>
                  <p>$9.00 × 1</p>
                  <p className="font-bold">$9.00</p>
                </div>
              </div>

              {/* Item 3 */}
              <div className="flex justify-between items-center">
                <div className="flex space-x-4">
                  <img
                    src="https://images.unsplash.com/photo-1541443131876-44b03de101c5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGNhcnxlbnwwfHwwfHx8MA%3D%3D"
                    alt="RayBan sunglasses"
                    className="w-12 h-12 rounded-md"
                  />
                  <div>
                    <h3 className="font-medium">RayBan sunglasses</h3>
                    <p className="text-sm text-gray-500">Gender: Unisex</p>
                    <p className="text-sm text-gray-500">Color: Black</p>
                    <p className="text-sm text-gray-500">Size: One size</p>
                  </div>
                </div>
                <div>
                  <p>$14.00 × 1</p>
                  <p className="font-bold">$14.00</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Customer Details */}
        <Card>
          <CardContent>
            <h2 className="text-lg font-semibold mb-4">Customer</h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <img
                  src="https://htmlstream.com/front-dashboard/assets/img/160x160/img10.jpg"
                  alt="Customer Avatar"
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <p className="font-medium">Amanda Harvey</p>
                  <p className="text-sm text-gray-500">7 orders</p>
                </div>
              </div>
              <div>
                <p className="text-sm font-medium">Contact info</p>
                <p className="text-sm text-gray-500">ella@site.com</p>
              </div>
              <div>
                <p className="text-sm font-medium">Shipping address</p>
                <p className="text-sm text-gray-500">
                  45 Roker Terrace, Latheronwheel, KW5 8NW, London, UK
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default OrderDetailsPage;
