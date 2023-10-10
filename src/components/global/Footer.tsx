import Flex from "../atoms/Flex";
import SubTitle from "../atoms/Subtitle";

export default function Footer() {
  const links = [
    "Sobre",
    "Baixe o aplicativo do X",
    "Central de Ajuda",
    "Termos de Serviço",
    "Política de Privacidade",
    "Política de cookies",
    "Acessibilidade",
    "Informações de anúncios",
    "Blog",
    "Status",
    "Carreiras",
    "Recursos da marca",
    "Publicidade",
    "Marketing",
    "X para Empresas",
    "Desenvolvedores",
    "Diretório",
    "Configurações",
  ];

  return (
    <Flex className="flex-wrap mt-10 text-gray-600 gap-3 justify-center">
      {links.map((l, i) => (
        <SubTitle
          color="gray-500"
          key={i}
          className="cursor-pointer text-xs hover:text-blue-500 lg:py-10"
        >
          {l}
        </SubTitle>
      ))}
    </Flex>
  );
}
