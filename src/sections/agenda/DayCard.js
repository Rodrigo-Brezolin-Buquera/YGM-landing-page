import { Text, Box } from "@chakra-ui/react";
import { CircularCard } from "../../components/CircularCard"

export const DayCard = ({ day, classes }) => {

    return (
        <Box
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"flex-start"}
            alignItems={"flex-start"}
            gap={"2em"}
            h={"100%"}
        >
            <CircularCard
                color={"brand.300"}
            >
                <Text color={"white"} fontSize="3xl">{day}</Text>
            </CircularCard>

            {classes?.map(i => (
                <CircularCard
                    key={i.time}
                    color={"brand.200"}
                >
                    <Text color={"white"} fontSize="3xl">{i.time}</Text>
                </CircularCard>
            ))
            }
        </Box>
    );
};