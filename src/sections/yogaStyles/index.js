import { Box, Heading } from "@chakra-ui/react";
import { StyleCard } from "./StyleCard";
import { stylesInfomation } from "./stylesInformation";
import { SectionContainer } from "../../components/SectionContainer"
import { HorizontalCarousel } from "./HorizontalCarousel";

const YogaStyles = () => {
    return (
        <SectionContainer
            backgroundColor={"brand.100"}
            justifyContent={"center"}
            paddingTop={"2em"}
            paddingBottom={"1em"}
            boxShadow='xl'
        >
            <Heading color={"brand.400"} > Atividades</Heading>
            <Box
                w={"100%"}
                display={"flex"}
                flexWrap={"wrap"}
                justifyContent={"space-evenly"}
            >

                <HorizontalCarousel gap={2}>
                    {
                        stylesInfomation.map((style) =>
                            <StyleCard
                                key={style.title}
                                title={style.title}
                                text={style.text}
                                image={style.image}
                            />)
                    }
                </HorizontalCarousel>
            </Box>
        </SectionContainer>
    );
};

export default YogaStyles;