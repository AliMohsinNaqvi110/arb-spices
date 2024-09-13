import { Grid, VStack } from "@chakra-ui/react";
import { products } from "../Features/Products/data";
import ProductCard from "./Products/ProductCard";
// import Carousel from "./Carousel";

const HomeScreen = () => {
  return (
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
  );
};

export default HomeScreen;

{
  /* <Box>
  <Image src={Cover} fit="contain" />
</Box>; */
}
