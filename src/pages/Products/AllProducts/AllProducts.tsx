import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
} from '@/components/ui/select';
import { useGetAllCarQuery } from '@/redux/features/cars/car.api';
import { TQueryParams } from '@/types/global';

export default function AllProductsPage() {
  const [params, setParams] = useState<TQueryParams[] | undefined>(undefined);
  const { data: carsData, isFetching } = useGetAllCarQuery(params);

  const [search, setSearch] = useState('');
  const [filterCategory, setFilterCategory] = useState(null);
  const [filterBrand, setFilterBrand] = useState(null);
  const [filterPrice, setFilterPrice] = useState(0);
  const [availability, setAvailability] = useState(null);

  const handleFilterChange = () => {
    const newParams: TQueryParams[] = [];
    if (search) newParams.push({ name: 'search', value: search });
    if (filterCategory) newParams.push({ name: 'category', value: filterCategory });
    if (filterBrand) newParams.push({ name: 'brand', value: filterBrand });
    if (filterPrice) newParams.push({ name: 'maxPrice', value: filterPrice.toString() });
    if (availability) newParams.push({ name: 'availability', value: availability });
    setParams(newParams);
  };

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">All Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Input placeholder="Search by brand, model, or category" value={search} onChange={(e) => setSearch(e.target.value)} />
        <Select onValueChange={setFilterCategory}>
          <SelectTrigger>Select Category</SelectTrigger>
          <SelectContent>
            <SelectItem value="Sedan">Sedan</SelectItem>
            <SelectItem value="SUV">SUV</SelectItem>
            <SelectItem value="Truck">Truck</SelectItem>
            <SelectItem value="Convertible">Convertible</SelectItem>
          </SelectContent>
        </Select>
        <Select onValueChange={setFilterBrand}>
          <SelectTrigger>Select Brand</SelectTrigger>
          <SelectContent>
            <SelectItem value="Toyota">Toyota</SelectItem>
            <SelectItem value="Ford">Ford</SelectItem>
            <SelectItem value="Chevrolet">Chevrolet</SelectItem>
            <SelectItem value="BMW">BMW</SelectItem>
          </SelectContent>
        </Select>
        <Input type="number" placeholder="Max Price" onChange={(e) => setFilterPrice(Number(e.target.value))} />
        <Select onValueChange={setAvailability}>
          <SelectTrigger>Select Availability</SelectTrigger>
          <SelectContent>
            <SelectItem value="inStock">In Stock</SelectItem>
            <SelectItem value="outStock">Out of Stock</SelectItem>
          </SelectContent>
        </Select>
        <Button onClick={handleFilterChange}>Apply Filters</Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {carsData?.data?.map((product) => (
          <Card key={product.id} className="p-4">
            <CardContent>
              <h2 className="text-xl font-semibold">{product.brand} {product.model}</h2>
              <p className="text-gray-600">{product.category} - {product.year}</p>
              <p className="text-lg font-bold">${product.price.toLocaleString()}</p>
              <p className={`text-sm ${product.inStock ? 'text-green-500' : 'text-red-500'}`}>{product.inStock ? 'In Stock' : 'Out of Stock'}</p>
              <Button className="mt-2">View Details</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}