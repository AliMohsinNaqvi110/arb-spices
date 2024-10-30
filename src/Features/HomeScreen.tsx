import { Heading } from "@chakra-ui/react";
import ProductCard from "./Products/ProductCard";
import Navbar from "./Navbar";
import Carousel from "./Carousel";
// import Carousel from "./Carousel";

const HomeScreen = () => {
  return (
    <>
      <Navbar />
      <Carousel />
      <Heading textAlign="center" marginTop="50px">
        PRODUCTS
      </Heading>
      <ProductCard />
    </>
  );
};

export default HomeScreen;
