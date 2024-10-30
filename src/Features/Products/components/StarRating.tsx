import React from "react";
import { Box, Text } from "@chakra-ui/react";

interface StarRatingProps {
  rating: number;
}

const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (rating >= i) {
        // Full star
        stars.push(
          <Text className="fa-solid fa-star" key={i} color="yellow.400" />
        );
      } else if (rating >= i - 0.5) {
        // Half star
        stars.push(
          <Text className="fas fa-star-half-alt" key={i} color="yellow.400" />
        );
      } else {
        // Empty star
        stars.push(<Text className="far fa-star" key={i} color="yellow.400" />);
      }
    }
    return stars;
  };

  return <Box display="flex">{renderStars()}</Box>;
};

export default StarRating;
