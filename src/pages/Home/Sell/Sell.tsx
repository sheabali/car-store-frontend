import Container from '@/components/Container/Container';
import { Button } from '@/components/ui/button';
import { MoveUpRight } from 'lucide-react';

const Sell = () => {
  return (
    <Container>
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Left Section */}
        <div className="bg-[url('/src/images/1.png')] bg-cover bg-center w-full md:w-1/2 h-72 md:h-auto p-8 md:p-16 rounded-xl">
          <div>
            <div className="my-4">
              <h1 className="text-lg md:text-2xl text-white font-semibold">
                Are You Looking
              </h1>
              <h1 className="text-lg md:text-2xl text-white font-semibold">
                For a Car?
              </h1>
            </div>
            <p className="text-white text-sm md:text-base mb-7">
              We are committed to providing our customers <br /> with
              exceptional service.
            </p>
            <Button
              className="py-3 px-6 text-sm md:text-base"
              variant="secondary"
            >
              Get Started <MoveUpRight />
            </Button>
          </div>
        </div>

        {/* Right Section */}
        <div className="bg-[url('/src/images/2.png')] bg-cover bg-center w-full md:w-1/2 h-72 md:h-auto p-8 md:p-16 rounded-xl">
          <div>
            <div className="my-4">
              <h1 className="text-lg md:text-2xl text-white font-semibold">
                Do You Want to
              </h1>
              <h1 className="text-lg md:text-2xl text-white font-semibold">
                Sell a Car ?
              </h1>
            </div>
            <p className="text-white text-sm md:text-base mb-7">
              We are committed to providing our customers <br /> with
              exceptional service.
            </p>
            <Button
              className="py-3 px-6 text-sm md:text-base"
              variant="secondary"
            >
              Get Started <MoveUpRight />
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Sell;
