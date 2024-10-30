import { Grid } from "@chakra-ui/react";
import { products } from "../Features/Products/data";
import ProductCard from "./Products/ProductCard";
import Navbar from "./Navbar";
import Carousel from "./Carousel";
// import Carousel from "./Carousel";

const HomeScreen = () => {
  return (
    <>
      <Navbar />
      <Carousel />
    </>
  );
};

export default HomeScreen;
