import Box from "@/components/atoms/Box";
import Button from "@/components/atoms/Button";
import Flex from "@/components/atoms/Flex";
import Image from "@/components/atoms/Image";
import Layout from "@/components/atoms/Layout";
import SubTitle from "@/components/atoms/Subtitle";
import Title from "@/components/atoms/Title";
import SigninForm from "@/components/auth/signin/SigninForm";
import Footer from "@/components/global/Footer";

export default function Home() {
  return (
    <Layout>
      <Flex className="lg:gap-4">
        <Flex className="hidden lg:flex md:w-full">
          <Image
            className="m-auto"
            style={{ height: "300px", width: "340px" }}
            src="/logobig.png"
            alt="logo"
          />
        </Flex>
        <SigninForm />
      </Flex>
      <Footer />
    </Layout>
  );
}
