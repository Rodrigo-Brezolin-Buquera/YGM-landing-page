import { Text, Heading, Box } from "@chakra-ui/react";
import { InformationCard } from "./InfomationCard";
import {SectionContainer} from "../../components/SectionContainer"
import Image from "next/legacy/image";


const subtitle = " Espaço voltado para práticas de Yoga, Meditação e Autoconhecimento. Relaxe e desfrute da prática de yoga e seus benefícios em um ambiente acolhedor, restaurando seu equilíbrio, harmonia e renovando suas energias.";

const cardList = [
    {
        title: "Equilíbrio Corpo & Mente",
        text: "Yoga é uma prática que integra o corpo e a mente, desenvolvendo a consciência corporal, equilibrando as emoções e estimulando o fortalecimento e flexibilidade do corpo.",
        image: "/icons/Heart.svg",
        alt: "Ícone coração",
        color: "tomato"
    },
    {
        title: "Fortalece o corpo físico",
        text: "Praticar yoga relaxa, corrige a postura, dá energia, aumenta a flexibilidade, tonifica os músculos e ajuda a prevenir doenças."      ,
        image: "/icons/Exercise.svg",
        alt: "Ícone exercício",
        color: "gold"
    },
    {
        title: "Vida Saudável",
        text: "Fazer yoga com regularidade combate a depressão, insônia e ansiedade.",
        image: "/icons/Moon.svg",
        alt: "Ícone Lua ",
        color: "teal"
    },
]

const General = () => {
    return (
        <SectionContainer   
            h={"100%"}
            paddingTop={"1em"} 
            gap="1em"
        >
            <Heading margin={"0.5em"} color={"brand.500"} fontSize={"5xl"} >Yoga Mangala</Heading>
            <Text textAlign="center" color={"brand.500"} fontSize={"2xl"} margin={"1em"}>
                {subtitle}
            </Text>
            <Box
                w={"100%"}
                display={"flex"}
                flexDirection={["column", "row", "row"]}
                justifyContent="space-evenly"
                alignItems={["center", "flex-start"]}
                margin={"1em"}
                gap={'1em'}
            >
               {cardList.map(card=> (
                    <InformationCard
                    key={card.title}
                    title={card.title}
                    text={card.text}
                    Icon={<Image src={card.image} width={50} height={50} alt={card.alt} />}
                    color={card.color}
                />
               ))}
               
            </Box>

        </SectionContainer>
    );
};

export default General;