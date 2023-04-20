import { Box, Heading } from "@chakra-ui/react";
import { WhatsAppContainer } from "../../components/WhatsAppContainer";
import Image from "next/legacy/image";


export const ContactBanner = ({phone}) => {

    return (
        <Box
            display={"flex"}
            flexDirection={["column", "row"]}
            justifyContent={"center"}
            alignItems={"center"}
            flexGrow={"1"}
            w={"100%"}
            backgroundColor={"brand.300"}
            paddingY={"1em"}
            boxShadow='xl'
        >

            <Heading
                textAlign={"center"}
                fontSize={"3xl"}
                color={"brand.500"}
            >
                Agende uma aula experimental gratuita:
            </Heading>

            <WhatsAppContainer>
                <Image
                    src={"/socialMedia/Whatsapp.png"}
                    width={50}
                    height={50}
                    alt="Logo Whatsapp"
                />
            </WhatsAppContainer>

            <WhatsAppContainer>
                <Heading
                    fontSize={"3xl"}
                    color={"brand.500"}
                >  {phone}
                </Heading>
            </WhatsAppContainer>
        </Box>

    );
};