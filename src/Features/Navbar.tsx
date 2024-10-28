import { HStack, Text } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <>
      <HStack width="100%" justifyContent="center" background="#00CB52">
        <Text color="white" p="2" fontWeight="bold">
          Free Same-day Delivery on orders above Rs. 5,999 in Hyderabad
        </Text>
      </HStack>
      <HStack justifyContent="center" width="100%" color="#999">
        <HStack justifyContent="space-between" p="2" width="75%">
          <HStack p="2" gap="4">
            <Text fontWeight="bold" fontSize="2xl" color="black">
              Logo
            </Text>
            <Text>HOME</Text>
            <Text>FRESH</Text>
            <Text>DAIRY</Text>
            <Text>PANTRY</Text>
            <Text>BAKERY</Text>
            <Text>FROZEN</Text>
            <Text>CAFE</Text>
            <Text>PROMOTIONS</Text>
          </HStack>
          <HStack p="2" gap="4">
            <Text>Search</Text>
            <Text>Profile</Text>
            <Text>Cart</Text>
          </HStack>
        </HStack>
      </HStack>
    </>
  );
};

export default Navbar;
