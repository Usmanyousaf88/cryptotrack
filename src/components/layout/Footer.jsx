import React, { memo } from "react";
import { Box, Text, Flex, Link, Icon } from "@chakra-ui/react";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Box bg="brand.darker" width="full" py={2} mt="auto">
      <Flex justifyContent="center" alignItems="center" color="white">
        <Text m="4">
          © {currentYear} CryptoMarket. <Box as="span" fontWeight="bold" textShadow="0 0 10px rgba(255, 255, 255, 0.25)">Built with love & AI.🤖</Box>
        </Text>
        <Text>Created by{" "}
          <Link 
            href="https://linkedin.com/in/usman9999" 
            isExternal
            display="inline-flex"
            alignItems="center"
            color="brand.lighter"
            fontWeight="bold"
            _hover={{ textDecoration: "none", color: "white" }}
          >
            Usman Yousaf <Icon as={FaLinkedin} ml={1} />
          </Link>
        </Text>
      </Flex>
    </Box>
  );
};

export default memo(Footer);