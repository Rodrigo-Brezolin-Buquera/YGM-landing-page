import { Text, Box } from "@chakra-ui/react";
import { SectionContainer } from "../../components/SectionContainer"
import Image from "next/legacy/image";

const images = [
    {
        src: "/photos/Studio1.jpeg",
        alt: "Imagem do Espaço 1"
    },
    {
        src: "/photos/Studio2.jpeg",
        alt: "Imagem do Espaço 2"
    },

];

const PhysicalSpace = ({ address }) => {
    return (
        <SectionContainer
            justifyContent="space-between"
            marginY={"2em"}
            gap="3em"
        >
            <Text fontSize={"4xl"} textAlign={"center"} color={"brand.500"} > Conheça nosso espaço</Text>
            <Box
                display={"flex"}
                flexWrap="wrap"
                gap={["1em", "2em"]}
                justifyContent={"center"}
                w={"100%"}
            >
                {images.map(photo => (
                    <Image
                        borderRadius={"20px"}
                        key={photo.alt}
                        width={360}
                        height={270}
                        boxShadow={"base"}
                        src={photo.src}
                        alt={photo.alt}
                        style={{
                            borderRadius: "10px"
                        }}
                    />
                ))}

            </Box>
            <Box display={"flex"} alignItems={"center"} justifyContent={"center"} margin="1em" >
                <Image src={"/icons/MapIcon.png"} width={80} height={80} alt="ícone mapa" />

                <Text marginLeft={"1em"} fontSize={["md", "xl", "2xl"]} textAlign={"center"} color={"brand.500"}> {address} </Text>
            </Box>
        </SectionContainer>
    );
};

export default PhysicalSpace;