import Container from '@/components/Container/Container';
import { MoveUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Brands = () => {
  return (
    <Container>
      <div>
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold my-10">
            Explore Our Premium Brands
          </h1>
          <Link to="/" className="flex justify-center items-center gap-1">
            <p>Show All Brands</p>
            <MoveUpRight className="opacity-50 mb-2" />
          </Link>
        </div>
        <img src="/src/images/Container.png" alt="" />
      </div>
    </Container>
  );
};

export default Brands;
