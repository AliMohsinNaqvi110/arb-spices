import { HStack, Text, Avatar } from "@chakra-ui/react";
import Logo from "../Assets/Logo.jpg";
const Navbar = () => {
  return (
    <>
      <HStack
        justifyContent="center"
        width="100%"
        color="#eee"
        background="#111"
      >
        <HStack p="3" width="75%">
          <HStack>
            <Avatar src={Logo} height="100px" width="100px" />
          </HStack>
          <HStack marginLeft="340px">
            <Text p="10px" shadow="5px black">
              HOME
            </Text>
            <Text p="10px" shadow="5px black">
              PRODUCTS
            </Text>
            <Text p="10px" shadow="5px black">
              ABOUT US
            </Text>
            <Text p="10px" shadow="5px black">
              CONTACT US
            </Text>
          </HStack>
        </HStack>
      </HStack>
    </>
  );
};

export default Navbar;
