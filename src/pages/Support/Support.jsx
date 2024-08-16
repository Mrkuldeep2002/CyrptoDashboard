import DashboardLayout from "../../components/dashboardLayout";
import SupportCard from "./components/SupportCard";
import ContactFormCard from "./components/ContactFormCard";
import { IoMdMail } from "react-icons/io";
import InfoCard from "../Dashboard/components/InfoCard";
import { Stack } from "@chakra-ui/react";
import { BiSolidMessageRounded } from "react-icons/bi";

const Support = () => {
  return (
    <DashboardLayout title="Support" >
      <Stack spacing="80px">
      <SupportCard
        rightcomponent={<ContactFormCard />}
        title="Contact Us"
        text="Have a question or just want to know more? Feel free to reach out to
          us."
        icon={IoMdMail}
      />
      <SupportCard
        rightcomponent={
          <InfoCard
            inverted={true}
            tagText="Chat bot"
            imgUrl="/Gridbg.svg"
            text="Chat with us now"
          />
        }
        title="Live Chat"
        text="Don’t have time to wait for the answer? Chat with us now."
        icon={BiSolidMessageRounded}
      />
      </Stack>
    </DashboardLayout>
  );
};

export default Support;
