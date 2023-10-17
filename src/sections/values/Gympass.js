import { Box, Heading, Text } from "@chakra-ui/react";

export const Gympass = () => {
    return (
        <Box
            display={"flex"}
            flexDirection="column"
            justifyContent={"center"}
            alignItems="center"
            gap={"1em"}
        >
            <Heading fontSize={"2xl"} textAlign="center" color={"brand.500"}>
                Aceitamos Gympass
            </Heading>
            <Text color={"brand.500"} textAlign="center">
                Plano Silver ou superior
            </Text>
        </Box>
    );
};