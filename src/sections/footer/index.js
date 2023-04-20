import { Link, Box, Heading } from "@chakra-ui/react";
import { WhatsAppContainer } from "../../components/WhatsAppContainer";
import Image from "next/legacy/image";

const Footer = ({contact}) => {
    return (
        <Box
            w={"100%"}
            minH="8em"
            backgroundColor={"brand.300"}
            display="flex"
            gap={["2em", "0"]}
            flexDirection={["column", "column", "row"]}
            alignItems={"center"}
            justifyContent="space-evenly"
            paddingY={"1em"}
        >
            <Box
                h={"100%"}
                display="flex"
                flexDirection={"column"}
                gap="1em"
                alignItems={"center"}
                justifyContent="space-evenly"
            >
                <Heading color="white" fontSize="md"  > {contact.email}</Heading>
                <WhatsAppContainer>
                    <Heading color="white" fontSize="md" >{contact.phone}</Heading>
                </WhatsAppContainer>
            </Box>
            <Box
                h={"100%"}
                display="flex"
                gap="1em"
                alignItems={"center"}
                justifyContent="center"
            >
                <Link href={contact.facebook}>
                    <Image src={"/socialMedia/FacebookWhite.png"} width={66} height={66} alt="Facebook" />
                </Link>
                <Link href={contact.instagram}>
                    <Image src={"/socialMedia/InstagramWhite.png"} width={66} height={66} alt="Instagram" />
                </Link>
            </Box>
            <Image src={"/logo/white.png"} width={142} height={66} alt="Yoga Mangala Logo" />
        </Box>
    );
};

export default Footer;