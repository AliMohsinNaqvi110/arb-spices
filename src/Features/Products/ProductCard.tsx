import { Box, Image, Text, VStack } from "@chakra-ui/react";
import { useState } from "react";
import ReactCardFlip from "react-card-flip";
import StarRating from "./components/StarRating";

interface ProductInterface {
  title: string;
  description: string;
  image: string;
  rating: number;
}

const ProductCard: React.FC<ProductInterface> = ({
  title,
  description,
  image,
  rating,
}: ProductInterface) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      {/* Card Front */}
      <VStack
        border="1px solid var(--chakra-colors-secondary-50)"
        onClick={() => setIsFlipped(!isFlipped)}
        rounded="xl"
        pb={4}
      >
        <Box w="280px" h="280px">
          <Image src={image} />
        </Box>
        <Text fontWeight={700} fontSize="lg">
          {title}
        </Text>
        <StarRating rating={rating} />
      </VStack>
      {/* Card Back */}
      <VStack
        w="100%"
        h="100%"
        onClick={() => setIsFlipped(!isFlipped)}
        border="1px solid var(--chakra-colors-secondary-50)"
      >
        <Text>{description}</Text>
      </VStack>
    </ReactCardFlip>
  );
};

export default ProductCard;
