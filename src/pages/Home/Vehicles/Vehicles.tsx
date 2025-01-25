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
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { cn } from '@/lib/utils';
import { BellRing, Check, MoveUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
const notifications = [
  {
    title: 'Your call has been confirmed.',
    description: '1 hour ago',
  },
  {
    title: 'You have a new message!',
    description: '1 hour ago',
  },
  {
    title: 'Your subscription is expiring soon!',
    description: '2 hours ago',
  },
];

type CardProps = React.ComponentProps<typeof Card>;

const Vehicles = ({ className, ...props }: CardProps) => {
  return (
    <Container>
      <div className="w-full">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold my-10">
            Explore Our Premium Vehicles
          </h1>
          <Link to="/" className="flex justify-center items-center gap-1">
            <p>Show All Vehicles</p>
            <MoveUpRight className="opacity-50 mb-2" />
          </Link>
        </div>
        <div className="px-12">
          {/* Larger Carousel */}
          <Carousel
            opts={{
              align: 'center',
            }}
            className="w-full  items-center  h-100"
          >
            <CarouselContent>
              {Array.from({ length: 6 }).map((_, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="">
                    <Card className={cn('lg:w-[370px] ', className)} {...props}>
                      <CardHeader>
                        <img
                          src="/src/images/The All-New 2021 Rolls-Royce Ghost Will Spoil You For Choice _ Carscoops.jpeg"
                          alt=""
                        />
                      </CardHeader>
                      <CardContent className="grid gap-4">
                        <div className=" flex items-center space-x-4 rounded-md border p-4">
                          <BellRing />
                          <div className="flex-1 space-y-1">
                            <p className="text-sm font-medium leading-none">
                              Push Notifications
                            </p>
                            <p className="text-sm text-muted-foreground">
                              Send notifications to device.
                            </p>
                          </div>
                          {/* <Switch /> */}
                        </div>
                        <div>
                          {notifications.map((notification, index) => (
                            <div
                              key={index}
                              className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
                            >
                              <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
                              <div className="space-y-1">
                                <p className="text-sm font-medium leading-none">
                                  {notification.title}
                                </p>
                                <p className="text-sm text-muted-foreground">
                                  {notification.description}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full">
                          <Check /> Mark all as read
                        </Button>
                      </CardFooter>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </Container>
  );
};

export default Vehicles;
