import { Box } from "@chakra-ui/react"

export const SectionContainer = (props) => {
    return (
        <Box
            w={"100%"}
            display="flex"
            flexDirection={"column"}
            alignItems="center"
            {...props}
        >
            {props.children}
        </Box>
    )
}