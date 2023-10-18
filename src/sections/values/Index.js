import { Box } from "@chakra-ui/react";
import { Gympass } from "./Gympass";
import { Personal } from "./Personal";
import { PlanValues } from "./PlanValues";
import {SectionContainer} from "../../components/SectionContainer"


const Values = ({plans}) => {
   
    return (
        <SectionContainer       
            gap={"3em"}  
            justifyContent={"center"}
            padding={["1em","3em","3em"]}         
        >
            <PlanValues regularPlans={plans} />
            <Box
                display={"flex"}
                gap={["1em", "5em", "10em"]}
            >
                <Gympass  />
                <Personal />
            </Box>

        </SectionContainer>);
};

export default Values;