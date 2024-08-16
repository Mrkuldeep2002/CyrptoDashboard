import React from "react";
import DashboardLayout from "../../components/dashboardLayout";
import { Button, Card, Flex, HStack, Input, InputGroup, InputLeftElement, Tag } from "@chakra-ui/react";
import { HiOutlineDownload } from "react-icons/hi";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import TransactionTable from "./components/TransactionTable";
import { BiPhoneIncoming, BiSearch } from "react-icons/bi";

const Transaction = () => {
  const tabs = [
    {
      name: "All",
      count: 349,
    },
    {
      name: "Deposit",
      count: 114,
    },
    {
      name: "Widthdraw",
      count: 55,
    },
    {
      name: "Trade",
      count: 50,
    },
  ];
  return (
    <DashboardLayout title="Transaction">
      <Flex justifyContent="end" mt="6" mb="3">
        <Button leftIcon={<HiOutlineDownload />}>Export CSV</Button>
      </Flex>
      <Card borderRadius="1.5rem">
        <Tabs>
          <TabList p="4" display="flex" justifyContent="space-between">
           <HStack> {tabs.map((tab) => (
              <>
                <Tab key={tab.name} gap="2">
                  {tab.name}
                  <Tag colorScheme="gray" borderRadius="full">
                    {tab.count}
                  </Tag>
                </Tab>
              </>
            ))}</HStack>
            <InputGroup maxW="200px">
              <InputLeftElement pointerEvents="none">
                <BiSearch color="gray.300" />
              </InputLeftElement>
              <Input type="tel" placeholder="Search......" />
            </InputGroup>
          </TabList>

          <TabPanels>
            <TabPanel>
              <TransactionTable />
            </TabPanel>
            <TabPanel>
              <TransactionTable />
            </TabPanel>
            <TabPanel>
              <TransactionTable />
            </TabPanel>
            <TabPanel>
              <TransactionTable />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Card>
    </DashboardLayout>
  );
};

export default Transaction;
