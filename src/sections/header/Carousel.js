import { Box } from '@chakra-ui/react';
import { useState, useEffect } from "react"
import Image from "next/legacy/image";

const images = [
    {
        src: "/photos/Carousel1.jpeg",
        alt: "Imagem Carossel 1"
    },
    {
        src: "/photos/Carousel2.jpeg",
        alt: "Imagem Carossel 2"
    },
    {
        src: "/photos/Carousel3.jpeg",
        alt: "Imagem Carossel 3"
    },
    {
        src: "/photos/Carousel4.jpeg",
        alt: "Imagem Carossel 4"
    }
];


export const ImageCarousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((currentSlide + 1) % images.length);
        }, 4000);

        return () => clearInterval(timer);
    }, [currentSlide]);

    return (
            <Box
                position='relative'
                w='100%'
                h={"0"}
                paddingBottom={`clamp(0%, ${0.5625 * 100}%, 1080px)`} // alterar com tamanho max da height e o ratio
                display={"flex"}
                justifyContent={"center"}
                backgroundColor={"rgba(0, 0, 0, 0.9)"}
            >
                {images.map((image, index) => (
                    <Image
                        key={image.alt}
                        alt={image.alt}
                        src={image.src}
                        layout="fill"
                        style={{
                            objectFit:"cover",
                            position: "absolute",
                            opacity: index === currentSlide ? 1 : 0,
                            transition: 'opacity 0.5s ease-in-out',
                        }}
                    />
                ))}
            </Box>   
    );
};