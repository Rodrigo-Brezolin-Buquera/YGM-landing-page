import { Heading } from "@chakra-ui/react";
import { TeacherCard } from "./TeacherCard";
import { SectionContainer } from "../../components/SectionContainer"

const teachers = [
    {
        name: "Louize Bayá",
        description: "Apaixonada pelo que faz, tem como propósito acolher com amor todos que chegam; inspirar as pessoas a se autoconhecer; e trazer a alegria de viver. Professora desde de 2014, ministra aulas de Yoga para adultos, gestantes e crianças, através de sua experiência e vivências ensina técnicas de posturas, respirações, relaxamentos e meditações para os seus alunos.",
        image: "/photos/LouizeProfile.png"
    },
    {
        name: "Rodrigo Brezolin",
        description: "Praticante de Yoga e Meditação desde de 2012, decidiu dedicar-se a ensinar essa ciência milenar e transmitir, através de sua experiência, técnicas de concentração, autoconhecimento e inteligência emocional.",
        image: "/photos/RodrigoProfile.png"
    },
]

const Teachers = () => {
    return (
        <SectionContainer
            backgroundColor={"brand.100"}
            gap={"2em"}
            padding={"2em"}
            alignItems={"center"}
            boxShadow='xl'
        >
            <Heading fontSize={"5xl"} color="brand.400" textAlign={"center"}> Nossos professores </Heading>

            <TeacherCard
                key={teachers[0].name}
                image={teachers[0].image}
                name={teachers[0].name}
                description={teachers[0].description}
            />
            <TeacherCard
                key={teachers[1].name}
                image={teachers[1].image}
                name={teachers[1].name}
                description={teachers[1].description}
            />
        </SectionContainer>
    );
};
export default Teachers;