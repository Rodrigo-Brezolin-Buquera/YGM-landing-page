import { Box, Heading } from "@chakra-ui/react";

const TableLine = (
    { backgroundColor, title, monthy, quarterly, semester }
) => {
    return (
        <Box display={"flex"} backgroundColor={backgroundColor} justifyContent={"space-evenly"} w={"100%"}>
            <Box textAlign="center" marginY={"0.5em"} w={"23%"}>{title}</Box>
            <Box textAlign="center" marginY={"0.5em"} w={"23%"}>{monthy}</Box>
            <Box textAlign="center" marginY={"0.5em"} w={"23%"}>{quarterly}</Box>
            <Box textAlign="center" marginY={"0.5em"} w={"23%"}>{semester}</Box>
        </Box>
    );
};

export const PlanValues = ({ regularPlans }) => {

    const findPrice = (frequency, type) => {
        const item = regularPlans.find(i => i.frequency === frequency && i.type === type)
        return item.price
    }

    return (
        <Box
            minWidth="80%"
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            justifyContent={"flex-start"}
            gap="1em"
            fontSize={"1xl"}
            w={["100%", "90%", "80%"]}
        >
            <Heading fontSize={["3xl", "5xl", "5xl"]} color={"brand.500"} >Valores planos</Heading>
            <Box
                display={"flex"}
                flexDirection={"column"}
                alignItems={"center"}
                w={"100%"}
            >
                <TableLine
                    backgroundColor={"teal.100"}
                    title={"Planos"}
                    monthy={"Mensal"}
                    quarterly={"Trimestral"}
                    semester={"Semestral"}
                />
                <TableLine
                    title={"1x na semana"}
                    monthy={findPrice("1x", "Mensal")}
                    quarterly={findPrice("1x", "Trimestral")}
                    semester={findPrice("1x", "Semestral")}
                />
                <TableLine
                    title={"2x na semana"}
                    monthy={findPrice("2x", "Mensal")}
                    quarterly={findPrice("2x", "Trimestral")}
                    semester={findPrice("2x", "Semestral")}
                />

            </Box>
        </Box>
    );
};