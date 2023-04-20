import { Box } from "@chakra-ui/react";
import { Gympass } from "./Gympass";
import { Personal } from "./Personal";
import { PlanValues } from "./PlanValues";
import {SectionContainer} from "../../components/SectionContainer"


const Values = ({plans}) => {
    const gympassPlan = plans.find(i=> i.id === "gympass")
    const personalPlan = plans.find(i=> i.id === "Personal")
    const regularPlans = plans.filter(i=> i.id !== "Personal" && i.id !== "gympass")
    return (
        <SectionContainer       
            gap={"3em"}  
            justifyContent={"center"}
            padding={["1em","3em","3em"]}         
        >
            <PlanValues regularPlans={regularPlans} />
            <Box
                display={"flex"}
                gap={["1em", "5em", "10em"]}
            >
                <Gympass gympassPlan={gympassPlan} />
                <Personal personalPlan={personalPlan}/>
            </Box>

        </SectionContainer>);
};

export default Values;