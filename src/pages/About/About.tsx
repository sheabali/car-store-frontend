import Container from '@/components/Container/Container';

const About = () => {
  return (
    <Container>
      <div className="w-full max-w-3xl mx-auto text-center py-10">
        <h1 className="text-3xl font-bold mb-6">About Our Car Shop</h1>
        <p className="text-lg text-muted-foreground mb-4">
          Welcome to our premium vehicle showroom, where we bring you the finest
          selection of luxury cars. Our mission is to provide high-quality
          vehicles with exceptional customer service.
        </p>
        <p className="text-lg text-muted-foreground mb-4">
          We believe in delivering an unparalleled experience to car enthusiasts
          by offering top-tier vehicles, easy financing options, and a seamless
          purchasing process.
        </p>
        <p className="text-lg text-muted-foreground mb-4">
          Our shop offers a variety of brands, ensuring that you find the
          perfect car to match your needs. Whether you are looking for a family
          SUV, a luxury sedan, or a high-performance sports car, we have it all.
        </p>
        <p className="text-lg text-muted-foreground">
          Visit us today and explore a wide range of vehicles that fit your
          style and budget!
        </p>
      </div>
    </Container>
  );
};

export default About;
