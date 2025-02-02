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

const products = [
  {
    id: 1,
    brand: 'Toyota',
    model: 'Camry',
    year: 2024,
    price: 27000,
    category: 'Sedan',
    inStock: true,
  },
  {
    id: 1,
    brand: 'Toyota',
    model: 'Camry',
    year: 2024,
    price: 27000,
    category: 'Sedan',
    inStock: true,
  },
  {
    id: 1,
    brand: 'Toyota',
    model: 'Camry',
    year: 2024,
    price: 27000,
    category: 'Sedan',
    inStock: true,
  },
  {
    id: 1,
    brand: 'Toyota',
    model: 'Camry',
    year: 2024,
    price: 27000,
    category: 'Sedan',
    inStock: true,
  },
  {
    id: 1,
    brand: 'Toyota',
    model: 'Camry',
    year: 2024,
    price: 27000,
    category: 'Sedan',
    inStock: true,
  },
  {
    id: 1,
    brand: 'Toyota',
    model: 'Camry',
    year: 2024,
    price: 27000,
    category: 'Sedan',
    inStock: true,
  },
  {
    id: 1,
    brand: 'Toyota',
    model: 'Camry',
    year: 2024,
    price: 27000,
    category: 'Sedan',
    inStock: true,
  },
  {
    id: 2,
    brand: 'Ford',
    model: 'Explorer',
    year: 2024,
    price: 40000,
    category: 'SUV',
    inStock: true,
  },
  {
    id: 3,
    brand: 'Chevrolet',
    model: 'Silverado',
    year: 2024,
    price: 45000,
    category: 'Truck',
    inStock: false,
  },
  {
    id: 4,
    brand: 'BMW',
    model: 'Z4',
    year: 2024,
    price: 55000,
    category: 'Convertible',
    inStock: true,
  },
];

export default function AllProductsPage() {
  const [search, setSearch] = useState('');
  const [filterCategory, setFilterCategory] = useState(null);
  const [filterBrand, setFilterBrand] = useState(null);
  const [filterPrice, setFilterPrice] = useState(0);
  const [availability, setAvailability] = useState(null);

  const filteredProducts = products.filter((product) => {
    return (
      (product.brand.toLowerCase().includes(search.toLowerCase()) ||
        product.model.toLowerCase().includes(search.toLowerCase()) ||
        product.category.toLowerCase().includes(search.toLowerCase())) &&
      (!filterCategory || product.category === filterCategory) &&
      (!filterBrand || product.brand === filterBrand) &&
      (!filterPrice || product.price <= filterPrice) &&
      (!availability ||
        (availability === 'inStock' ? product.inStock : !product.inStock))
    );
  });

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">All Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Input
          placeholder="Search by brand, model, or category"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Select onValueChange={setFilterCategory} defaultValue={null}>
          <SelectTrigger>Select Category</SelectTrigger>
          <SelectContent>
            <SelectItem value="Sedan">Sedan</SelectItem>
            <SelectItem value="SUV">SUV</SelectItem>
            <SelectItem value="Truck">Truck</SelectItem>
            <SelectItem value="Coupe">Coupe</SelectItem>
            <SelectItem value="Convertible">Convertible</SelectItem>
            <SelectItem value={null}>Clear Selection</SelectItem>
          </SelectContent>
        </Select>
        <Select onValueChange={setFilterBrand} defaultValue={null}>
          <SelectTrigger>Select Brand</SelectTrigger>
          <SelectContent>
            <SelectItem value="Toyota">Toyota</SelectItem>
            <SelectItem value="Ford">Ford</SelectItem>
            <SelectItem value="Chevrolet">Chevrolet</SelectItem>
            <SelectItem value="BMW">BMW</SelectItem>
            <SelectItem value={null}>Clear Selection</SelectItem>
          </SelectContent>
        </Select>
        <Input
          type="number"
          placeholder="Max Price"
          onChange={(e) => setFilterPrice(Number(e.target.value))}
        />
        <Select onValueChange={setAvailability} defaultValue={null}>
          <SelectTrigger>Select Availability</SelectTrigger>
          <SelectContent>
            <SelectItem value="inStock">In Stock</SelectItem>
            <SelectItem value="outStock">Out of Stock</SelectItem>
            <SelectItem value={null}>Clear Selection</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredProducts.map((product) => (
          <Card key={product.id} className="p-4">
            <CardContent>
              <h2 className="text-xl font-semibold">
                {product.brand} {product.model}
              </h2>
              <p className="text-gray-600">
                {product.category} - {product.year}
              </p>
              <p className="text-lg font-bold">
                ${product.price.toLocaleString()}
              </p>
              <p
                className={`text-sm ${
                  product.inStock ? 'text-green-500' : 'text-red-500'
                }`}
              >
                {product.inStock ? 'In Stock' : 'Out of Stock'}
              </p>
              <Button className="mt-2">View Details</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
