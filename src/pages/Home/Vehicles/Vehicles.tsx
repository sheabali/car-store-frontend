import { SearchImage } from '@/components/constant/constant';
import Container from '@/components/Container/Container';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import { cn } from '@/lib/utils';
import { useGetAllCarQuery } from '@/redux/features/cars/car.api';
import { ArrowUpRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

type CardProps = React.ComponentProps<typeof Card>;

const Vehicles = ({ className, ...props }: CardProps) => {
  const { data: carsData } = useGetAllCarQuery(undefined);
  const vehicles = carsData?.data?.slice(0, 6) || [];

  return (
    <Container>
      <div className="w-full">
        <div className="flex justify-between items-center my-10">
          <h1 className="text-2xl font-bold">Explore Our Premium Vehicles</h1>
          <Link
            to="/allproduct"
            className="flex justify-center items-center gap-1"
          >
            <p>Show All Cars</p>
            <ArrowUpRight className="opacity-50" />
          </Link>
        </div>
        <Carousel opts={{ align: 'center' }} className="w-full items-center">
          <CarouselContent>
            {vehicles.map((car, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <Card className={cn('lg:w-[410px]', className)} {...props}>
                  <CardHeader>
                    <img
                      src={SearchImage}
                      alt={car?.brand}
                      className="w-full h-60 object-cover rounded-md"
                    />
                  </CardHeader>
                  <CardContent className="grid gap-4">
                    <div className="space-y-1">
                      <p className="text-lg font-medium">{car?.brand}</p>
                      <div className="flex justify-between items-center">
                        <p className="text-sm text-muted-foreground">
                          {car?.category}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          ৳ {car?.price}
                        </p>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {car?.description?.length > 100
                          ? `${car?.description.slice(0, 100)}... more`
                          : car?.description}
                      </p>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Link to={`/productDetails/${car?._id}`}>
                      <Button className="w-full">
                        <Check /> View Details
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </Container>
  );
};

export default Vehicles;
