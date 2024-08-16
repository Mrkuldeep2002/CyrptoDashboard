import React, { Fragment } from "react";
import { CustomCard } from "../../../chakra/CustomCard";
import {
  Button,
  Divider,
  Flex,
  Grid,
  Icon,
  Stack,
  Text,
} from "@chakra-ui/react";
import { BsCurrencyRupee } from "react-icons/bs";
import { FaBtc } from "react-icons/fa";

const TransactionSection = () => {
  const transactions = [
    {
      id: "1",
      icon: BsCurrencyRupee,
      text: "INR Deposit",
      amount: "+ ₹81,123.10",
      timestamp: "2022-06-09 7:06 PM",
    },
    {
      id: "2",
      icon: FaBtc,
      text: "BTC  Sell",
      amount: "- 12.48513391 BTC",
      timestamp: "2022-06-09 7:06 PM",
    },
    {
      id: "3",
      icon: BsCurrencyRupee,
      text: "INR Deposit",
      amount: "+ ₹81,123.10",
      timestamp: "2022-06-09 7:06 PM",
    },
  ];

  return (
    <CustomCard>
      <Text mb="6" fontSize="sm" color="black.80">
        Recent Transaction
      </Text>

      <Stack spacing="4">
        {transactions.map((transaction, i) => {
          return (
            <Fragment key={transaction.id}>
              {i !== 0 && <Divider />}
              <Flex gap="4">
                <Grid
                  placeItems="center"
                  bg="black.5"
                  boxSize={10}
                  borderRadius="full"
                >
                  <Icon as={transaction.icon} />
                </Grid>
                <Flex justifyContent="space-between" w="full">
                  <Stack>
                    <Text textStyle="h6">{transaction.text}</Text>
                    <Text fontSize="sm" color="black.40">
                      {transaction.timestamp}
                    </Text>
                  </Stack>
                  <Text textStyle="h6">{transaction.amount}</Text>
                </Flex>
              </Flex>
            </Fragment>
          );
        })}
      </Stack>
      <Button w="full" mt="6" colorScheme="gray">
        View All
      </Button>
    </CustomCard>
  );
};

export default TransactionSection;
