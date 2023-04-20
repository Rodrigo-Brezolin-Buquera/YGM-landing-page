import { Card, CardBody, Stack, Heading, Text } from "@chakra-ui/react";
import Image from "next/legacy/image";


export const TeacherCard = ({ image, description, name }) => {
    return (

        <Card
            direction={{ base: "column", sm: "row" }}
            overflow='hidden'
            variant='outline'
            borderColor={"white"}
            p={"1em"}
            w={"100%"}
            align="center"
            backgroundColor={"brand.100"}
        >
                <Image
                    src={image}
                    alt={`${name} - Foto perfil`} 
                    width={150}
                    height={150}         
                    style={{
                        objectFit: 'cover',
                        width: "150px",
                        height: "150px",
                        objectPosition: '50% 50%',
                        borderRadius:'50%'
                    }}
                />
         
            <Stack>
                <CardBody>
                    <Heading color={"brand.400"} size='lg' textAlign={["center", "initial"]}>{name}</Heading>
                    <Text py='2' color={"brand.400"} textAlign={["center", "initial"]}>
                        {description}
                    </Text>
                </CardBody>
            </Stack>
        </Card>
    );
};
