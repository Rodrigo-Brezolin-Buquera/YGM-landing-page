import { Box } from "@chakra-ui/react"

export const CircularCard = ({ color, children }) => {
    return (
        <Box
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
            gap={"0.1em"}
            borderRadius={"25px"}
            width={"150px"}
            backgroundColor={color}
            padding={"0.3em"}
            boxShadow='md'
        >
            {children}
        </Box>
    )
}