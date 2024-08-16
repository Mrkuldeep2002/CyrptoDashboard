import React from "react";
import { CustomCard } from "../../../chakra/CustomCard";
import {
  Button,
  Flex,
  HStack,
  Icon,
  Image,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";
import { BsArrowUpRight } from "react-icons/bs";
import { BiPlusCircle } from "react-icons/bi";

const PriceSection = () => {
  const timestamps = ["7:15 PM", "7:55 PM", "8:55 PM", "9:55 PM", "10:55 PM"];

  return (
    // <CustomCard h="full">
    <CustomCard>
      <Flex justifyContent="space-between" alignItems="start">
        <Stack>
          <HStack color="black.80">
            <Text fontSize="sm">Current Price</Text>
          </HStack>
          <HStack
            spacing="4"
            align={{
              base: "flex-start",
              sm: "center",
            }}
            flexDir={{
              base: "column",
              sm: "row",
            }}
          >
            <HStack>
              <Text textStyle="h2" fontWeight="medium">
                22.39401000
              </Text>
              <HStack fontWeight="medium" color="green.500">
                <Icon as={BsArrowUpRight} />
                <Text fontSize="sm">22%</Text>
              </HStack>
            </HStack>
          </HStack>
        </Stack>
        <HStack>
          <Button leftIcon={<Icon as={AiFillPlusCircle} />}>Buy</Button>
          <Button leftIcon={<Icon as={AiFillMinusCircle} />}>Sell</Button>
        </HStack>
      </Flex>
      <Tabs variant="soft-rounded">

        <Flex
          justifyContent="end
        "
        >
          <TabList bg="black.10" p="3px" borderRadius="6px" gap="8px">
            {["1H","1D","1W","1M"].map((tab)=>(
              <Tab _selected={{ bg: "white" }} 
              key={tab} fontSize="sm" p="6px" borderRadius="6px" >{tab}</Tab>
            ))}
            
            {/* <Tab>Tab 2</Tab> */}
          </TabList>
        </Flex>
        <TabPanels>
          <TabPanel>
            <Image width="100%" src="/Graph.svg" mt="3rem" />
            <HStack>
              {timestamps.map((timestamp) => (
                <Text key={timestamp} fontSize="sm" color="black.80">
                  {timestamp}
                </Text>
              ))}
            </HStack>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
      
    </CustomCard>
  );
};

export default PriceSection;
