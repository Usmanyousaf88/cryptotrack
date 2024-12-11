import React from "react";
import { Box, Heading, Text, Avatar, AvatarGroup, Center, Button, VStack, HStack, Icon } from "@chakra-ui/react";
import { FaLinkedin, FaCalendarCheck } from "react-icons/fa";
import katrinImage from "../assets/images/katrin.jpg";

const About = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Box m={8} maxWidth="1200px" mx="auto">
      <VStack spacing={6}>
        <Heading as="h1" size="xl" mb={4} textAlign="center">
          The Story Behind CryptoMarket
        </Heading>
        
        <Text fontSize="xl" mb={8} textAlign="center" color="brand.main">
          Where Technology Meets Vision ✨
        </Text>

        <Center my={6}>
          <AvatarGroup size="lg" max={2}>
            <Avatar name="Katrin" src={katrinImage} />
            <Avatar name="Usman" src="https://images.unsplash.com/photo-1589254065878-42c9da997008?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80" />
          </AvatarGroup>
        </Center>

        <Text fontSize="lg" maxWidth="800px" lineHeight="1.8" textAlign="center">
          Meet Usman, the visionary behind this platform. With over a decade of experience in the digital realm, 
          he's not just another tech enthusiast – he's a storyteller who believes in making technology accessible to everyone.
        </Text>

        <Text fontSize="lg" maxWidth="800px" lineHeight="1.8" textAlign="center">
          From managing social media campaigns to crafting intuitive user experiences, Usman's journey has been 
          marked by continuous innovation. His six-year tenure at iStyle & Apple Dubai shaped his understanding 
          of what users truly need in a digital product.
        </Text>

        <Text fontSize="lg" maxWidth="800px" lineHeight="1.8" textAlign="center">
          But what truly sets him apart? It's his commitment to giving back. Through projects like VideoClub, 
          he's shown that technology can be both profitable and purposeful, with half of the profits supporting local charities.
        </Text>

        <HStack spacing={4} mt={6}>
          <Button
            as="a"
            href="https://topmate.io/deepdive"
            target="_blank"
            rel="noopener noreferrer"
            leftIcon={<FaCalendarCheck />}
            bg="brand.main"
            color="white"
            _hover={{ bg: "brand.darker" }}
            size="lg"
          >
            Book a Call
          </Button>
          <Button
            as="a"
            href="https://linkedin.com/in/usman9999"
            target="_blank"
            rel="noopener noreferrer"
            leftIcon={<FaLinkedin />}
            colorScheme="linkedin"
            size="lg"
          >
            Connect on LinkedIn
          </Button>
        </HStack>

        <Box mt={8} p={6} borderRadius="lg" bg="gray.50" maxWidth="800px">
          <Text fontSize="md" fontStyle="italic" textAlign="center">
            "In the world of crypto, knowledge is power. Let's explore this exciting frontier together." - Usman
          </Text>
        </Box>

        <Text fontSize="sm" color="gray.600" mt={4}>
          © {currentYear} CryptoMarket. Built with passion and purpose. 🚀
        </Text>
      </VStack>
    </Box>
  );
};

export default About;