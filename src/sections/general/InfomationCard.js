import { Text, Heading, Box, Circle, } from "@chakra-ui/react";

export const InformationCard = ({ title, text, Icon, color }) => {
    return (
        <Box
            display={"flex"}
            flexDirection="column"
            w={["100%","30%"]}
            justifyContent={"flex-start"}
            alignItems={"center"}
            gap={"0.5em"}
        >
            <Circle size='100px' bg={color} color="white" boxShadow='xl'>
                {Icon}
            </Circle>
            <Heading fontSize={["2xl", "2xl", "3xl"]} color={"brand.500"} textAlign="center">{title}</Heading>
            <Text textAlign="center" color={"brand.500"} >{text}</Text>
        </Box>
    );
};