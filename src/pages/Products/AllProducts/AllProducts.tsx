import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
} from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { useGetAllCarQuery } from '@/redux/features/cars/car.api';
import { TQueryParams } from '@/types/global';
import { Link } from 'react-router-dom';

export default function AllProductsPage() {
  const [params, setParams] = useState<TQueryParams[] | undefined>(undefined);
  console.log('params', params);
  const { data: carsData, isFetching, isLoading } = useGetAllCarQuery(params);

  const [search, setSearch] = useState('');
  const [filterCategory, setFilterCategory] = useState(null);
  const [filterBrand, setFilterBrand] = useState([]);
  const [filterPrice, setFilterPrice] = useState(0);

  useEffect(() => {
    const newParams: TQueryParams[] = [];
    if (search) newParams.push({ name: 'searchTerm', value: search });
    if (filterCategory)
      newParams.push({ name: 'category', value: filterCategory });
    if (filterBrand.length)
      newParams.push({ name: 'brand', value: filterBrand.join(',') });
    if (filterPrice)
      newParams.push({ name: 'maxPrice', value: filterPrice.toString() });
    setParams(newParams);
  }, [search, filterCategory, filterBrand, filterPrice]);

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">All Cars</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* Sidebar Filters */}
        <div className="space-y-4 border p-4 rounded-lg bg-white shadow-sm">
          <h2 className="text-xl font-semibold">Filters</h2>
          <div>
            <h3 className="font-medium">Brand</h3>
            <div className="space-y-2">
              {[
                'Audi',
                'Tesla',
                'Toyota',
                'Honda',
                'Ford',
                'BMW',
                'Mercedes-Benz',
                'Hyundai',
                'Volvo',
                'Nissan',
              ].map((brand) => (
                <div key={brand} className="flex items-center space-x-2">
                  <Checkbox
                    checked={filterBrand.includes(brand)}
                    onCheckedChange={(checked) =>
                      setFilterBrand((prev) =>
                        checked
                          ? [...prev, brand]
                          : prev.filter((b) => b !== brand)
                      )
                    }
                  />
                  <span>{brand}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-medium">Category</h3>
            <Select onValueChange={setFilterCategory}>
              <SelectTrigger>Select Category</SelectTrigger>
              <SelectContent>
                <SelectItem value="Economy">Economy</SelectItem>
                <SelectItem value="Off-road">Off-road</SelectItem>
                <SelectItem value="Luxury">Luxury</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <h3 className="font-medium">Max Price</h3>
            <Input
              type="number"
              placeholder="Enter max price"
              onChange={(e) => setFilterPrice(Number(e.target.value))}
            />
          </div>
        </div>

        {/* Main Content */}
        <div className="col-span-3 space-y-6">
          {/* Search */}
          <div className="flex items-center space-x-4">
            <Input
              className="flex-1"
              placeholder="Search by brand, model, or category"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <Button onClick={() => setParams([])}>Clear Filter</Button>
          </div>
          {/* Cars Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {carsData?.data?.map((product) => (
              <Card
                key={product.id}
                className={`p-4 relative rounded-lg shadow-md ${
                  product.inStock ? 'bg-white' : 'bg-gray-200'
                }`}
              >
                {!product.inStock && (
                  <div className="absolute inset-0 bg-yellow-500 bg-opacity-75 flex items-center justify-center rounded-lg">
                    <span className="text-white font-semibold">
                      Unavailable
                    </span>
                  </div>
                )}
                <CardContent className="space-y-2">
                  <h2 className="text-xl font-bold">
                    {product.brand} {product.model}
                  </h2>
                  <p className="text-gray-600">
                    {product.category} - {product.year}
                  </p>
                  <p className="text-lg font-bold">
                    ৳{product.price.toLocaleString()}/hr
                  </p>
                  <div className="flex items-center space-x-4">
                    <span
                      className={`text-sm ${
                        product.inStock ? 'text-green-600' : 'text-red-600'
                      }`}
                    >
                      {product.inStock ? 'Available' : 'Out of Stock'}
                    </span>
                    <span className="text-sm text-gray-500">
                      Seats: {product.seats}
                    </span>
                  </div>
                  <Link to={`/productDetails/${product._id}`}>
                    <Button className="mt-2" disabled={!product.inStock}>
                      View Details
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
