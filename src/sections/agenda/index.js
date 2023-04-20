import { Box, Heading } from "@chakra-ui/react";
import { ContactBanner } from "./ContactBanner";
import { DayCard } from "./DayCard";
import {SectionContainer} from "../../components/SectionContainer"

const Agenda = ({phone, classes}) => {
    const filterByDay = (day) => {
        return classes?.filter(i=>i.day===day)
    }
    const mondayClasses = filterByDay("Segunda")
    const tuesdayClasses = filterByDay("Terça")
    const wednesdayClasses = filterByDay("Quarta")
    const thursdayClasses = filterByDay("Quinta")
    const fridayClasses = filterByDay("Sexta")
    const saturdayClasses = filterByDay("Sábado")


    return (
        <SectionContainer
            justifyContent={"center"}    
            gap="1em"
            paddingTop={"1em"}
            minHeight="30em"
            h={["70em", "70em", "30em"]}
        >
            <Heading fontSize={"5xl"} color={"brand.500"} marginTop={"1em"} > Nossas Aulas </Heading>
            <Box
                display={"flex"}
                flexDirection={["column", "column", "row"]}
                justifyContent={"space-evenly"}
                alignItems={"center"}
                gap="1em"
                w={"90%"}
                padding={"2em"}
                flexGrow={"2"}
            >
                {mondayClasses?.length ? <DayCard day={"Segunda"} classes={mondayClasses} /> : null}

                {tuesdayClasses?.length ? <DayCard day={"Terça"} classes={tuesdayClasses} /> : null}

                {wednesdayClasses?.length ? <DayCard day={"Quarta"} classes={wednesdayClasses} /> : null}

                {thursdayClasses?.length ? <DayCard day={"Quinta"} classes={thursdayClasses} /> : null}

                {fridayClasses?.length ? <DayCard day={"Sexta"} classes={fridayClasses} /> : null}

                {saturdayClasses?.length ? <DayCard day={"Sábado"} classes={saturdayClasses} /> : null}
            </Box>
            
            <ContactBanner phone={phone}/>
            
        </SectionContainer >

    );
};
export default Agenda;