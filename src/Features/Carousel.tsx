import React from "react";
import Slider from "react-slick";
import Cover from "../Assets/cover.png";
import Logo from "../Assets/Logo.jpg";
import Spices from "../Assets/spices.png";
import { Box, Image } from "@chakra-ui/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 2500,
    cssEase: "cubic-bezier(0.600, -0.280, 0.735, 0.045)",
  };
  return (
    <Slider {...settings}>
      <Box h="100vh" w="full">
        <Image src={Cover} alt="Cover Image" />
      </Box>
      <Box h="100vh" w="full">
        <Image src={Logo} alt="Logo Image" />
      </Box>
      <Box h="100vh" w="full" bg="purple">
        <Image src={Spices} w="100%" alt="Spices Image" />
      </Box>
    </Slider>
  );
};

export default Carousel;
