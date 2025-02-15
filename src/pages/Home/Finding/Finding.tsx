import Container from '@/components/Container/Container';
import { Button } from '@/components/ui/button';
import { MoveUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Finding = () => {
  return (
    <Container>
      <div className="flex flex-col md:flex-row justify-between items-center bg-[#F9FBFC] py-8 md:py-16 px-8 md:px-16 rounded-2xl">
        {/* Left Section */}
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <div className="my-4">
            <h1 className="text-xl md:text-4xl text-[#050B20] font-semibold">
              Do You Want to
            </h1>
            <h1 className="text-xl md:text-4xl text-[#050B20] font-semibold">
              Sell a Car?
            </h1>
          </div>
          <p className="text-sm md:text-base text-[#050B20] mb-7">
            We are committed to providing our customers <br /> with exceptional
            service.
          </p>
          <Link to="/allproduct">
            <Button className="py-6 px-6 text-sm md:text-base">
              Get Started <MoveUpRight />
            </Button>
          </Link>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <img
            className="w-3/4 md:w-2/3"
            src="/src/images/4.png"
            alt="Car Illustration"
          />
        </div>
      </div>
    </Container>
  );
};

export default Finding;
