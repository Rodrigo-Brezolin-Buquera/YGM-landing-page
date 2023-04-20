import { Card, CardBody, Stack, Heading, Text } from "@chakra-ui/react";
import Image from "next/legacy/image";


export const StyleCard = ({image, text, title}) => {
    return(

        <Card 
            maxW='sm'
            backgroundColor={"brand.400"}
            mt={"2em"}
            boxShadow='md'
        >
    
            <CardBody>
                <Image
                    src={image}
                    alt=' Postura deYoga  '
                    style={{   borderRadius:'15px' }}
                    width={346}
                    height={231}
                    
                />
                <Stack mt='6' spacing='3'>
                    <Heading size='md' textAlign={"center"} color={"brand.500"} >{title}</Heading>
                    <Text textAlign={"center"} color={"brand.500"} >
                        {text}
                    </Text>
    
                </Stack>
            </CardBody>

        </Card>
    );
};
