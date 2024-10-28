import { Grid } from "@chakra-ui/react";
import { products } from "../Features/Products/data";
import ProductCard from "./Products/ProductCard";
import Navbar from "./Navbar";
// import Carousel from "./Carousel";

const HomeScreen = () => {
  return (
    <>
      <Navbar />
      <Grid templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(4, 1fr)" }}>
        {products.map((i) => {
          return (
            <ProductCard
              title={i.title}
              description={i.description}
              image={i.image}
              rating={i.rating}
            />
          );
        })}
      </Grid>
    </>
  );
};

export default HomeScreen;
