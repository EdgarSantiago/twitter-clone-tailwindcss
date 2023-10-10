import Box from "@/components/atoms/Box";
import Button from "@/components/atoms/Button";
import Flex from "@/components/atoms/Flex";
import Image from "@/components/atoms/Image";
import Layout from "@/components/atoms/Layout";
import SubTitle from "@/components/atoms/Subtitle";
import Title from "@/components/atoms/Title";
import Footer from "@/components/global/Footer";

export default function SigninForm() {
  return (
    <Flex className="gap-6 flex-col lg:h-screen lg:justify-center w-full">
      <Image
        className="visible lg:invisible"
        style={{ height: "50px", width: "50px" }}
        src="/logo.png"
        alt="logo"
      />
      <Title className="text-5xl lg:text-7xl">Acontecendo agora</Title>
      <SubTitle className="mt-5">Inscreva-se hoje</SubTitle>
      <Flex className="flex-col gap-2 xl:w-2/6 ">
        <Button variant="white">Inscrever-se com google</Button>
        <Button variant="white">Inscrever-se com apple</Button>
        <SubTitle className="mx-auto">Ou</SubTitle>
        <Button>Criar conta</Button>
        <SubTitle className="text-xs">
          Ao se inscrever, você concorda com os Termos de serviço e Política de
          Privacidade, incluindo o Uso de Cookies.
        </SubTitle>
        <Flex className="flex-col gap-2 mt-10">
          <SubTitle className="mt-5">Já tem uma conta ?</SubTitle>
          <Button variant="black" className="w-full">
            Entrar
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
}
