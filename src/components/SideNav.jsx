import { RxDashboard } from "react-icons/rx";
import { BsArrowDownUp } from "react-icons/bs";
import { BiSupport } from "react-icons/bi";
import { Box, HStack, Heading, Icon, Stack, Text } from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";

const SideNav = () => {
  const location = useLocation();

  const isActive = (link) => {
    return location.pathname === link;
  };
  const navLinks = [
    {
      icon: RxDashboard,
      text: "Dashboard",
      link: "/",
    },
    {
      icon: BsArrowDownUp,
      text: "Transactions",
      link: "/transactions",
    },
  ];
  return (
    <Stack
      bg="white"
      justifyContent="space-between"
      boxShadow={{ base: "none", lg: "lg" }}
      w={{ base: "full", lg: "16rem" }}
      h="100vh"
    >
      <Box>
        <Heading textAlign="center" fontSize="20px" as="h1" pt="3.5rem">
          CRYPTO
        </Heading>
        <Box mt="6" mx="3">
          {navLinks.map((nav) => (
            <Link to={nav.link} key={nav.text}>
              <HStack
                py="3"
                px="4"
                borderRadius={"10px"}
                bg={isActive(nav.link) ? "#96969a" : "transperent"}
                color={isActive(nav.link) ? "#000" : "#464646 "}
                _hover={{ bg: "#96969a", color: "#000" }}
              >
                <Icon as={nav.icon} />
                <Text fontSize="14px" fontWeight="medium">
                  {nav.text}
                </Text>
              </HStack>
            </Link>
          ))}
        </Box>
      </Box>
            
      <Box mt="6" mx="3" mb="6">
        <Link to={"/support"}>
          <HStack
            py="3"
            px="4"
            borderRadius={"10px"}
            bg={isActive("/support") ? "#96969a" : "transperent"}
            color={isActive("/support") ? "#000" : "#464646 "}
            _hover={{ bg: "#96969a", color: "#000" }}
          >
            <Icon as={BiSupport} />
            <Text fontSize="14px" fontWeight="medium">
              Support
            </Text>
          </HStack>
        </Link>
      </Box>
    </Stack>
  );
};

export default SideNav;
