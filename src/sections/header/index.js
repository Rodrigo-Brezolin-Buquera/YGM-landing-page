import { Box  } from "@chakra-ui/react";
import { ImageCarousel } from "./Carousel";
import Image from "next/legacy/image";

const Header = () => {
    return (
        <Box w="100%" pos={"relative"} display="block">
            <Box
                h={"70px"}
                w={"100%"}
                position={"absolute"}
                zIndex="1"
                opacity={["1","0.80","0.80"]}
                backgroundColor={["none", "black", "black"]}
            >         
             <Image width={142} height={66} src={"/logo/white.png"} alt="Logo Yoga Mangala" />

            </Box>
            <ImageCarousel />
        </Box>
    );
};

export default Header;