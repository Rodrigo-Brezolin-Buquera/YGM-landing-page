import { Heading, Text, Box } from "@chakra-ui/react";

export const Personal = ({personalPlan}) => {
    return (
        <Box
            display={"flex"}
            flexDirection="column"
            justifyContent={"center"}
            alignItems="center"
            gap={"1em"}
        >
            <Heading fontSize={"2xl"} textAlign="center" color={"brand.500"}
            > Personal
            </Heading>
            <Text color={"brand.500"} textAlign="center" >
                Aulas particulares ou grupos fechados no estudio
            </Text>
            <Text color={"brand.500"} textAlign="center" >
                Valor por aula: {personalPlan.price}
            </Text>
            <Text color={"brand.500"} textAlign="center" >
                Pacote com 4 aulas: {personalPlan.packPrice} cada aula
            </Text>
        </Box>
    );
};