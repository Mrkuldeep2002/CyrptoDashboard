import { Box, Button, HStack, Heading, Icon, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { FaBars, FaUserCircle } from "react-icons/fa";
import React from "react";

const TopNav = ({title ,onOpen}) => {
  return (
    <Box px="4" bg="white">
      <HStack maxW="70rem" h="16"  justify="space-between" mx="auto">
      <Icon
          as={FaBars}
         onClick={onOpen}
          display={{
            base: "block",
            lg: "none",
          }}
        />
        <Heading fontSize="28px">{title}</Heading>
        <Menu>
          <MenuButton bg="none" as={Button} >
            <Icon as={FaUserCircle} fontSize="30px" color="black"  />
          </MenuButton>
          <MenuList>
            <MenuItem>Logout</MenuItem>
            <MenuItem>Help & Support</MenuItem>
          </MenuList>
        </Menu>
    </HStack>
    </Box>
  );
};

export default TopNav;
