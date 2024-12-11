import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const colors = {
  brand: {
    // Rich indigo
    darker: "#4C1D95",
    // Purple
    main: "#6D28D9",
    // Lighter purple
    lighter: "#8B5CF6"
  },
  gray: {
    50: "#F8F7FF", // Light lavender white
    100: "#EDE9FE", // Soft lavender
    200: "#DDD6FE" // Medium lavender
  },
  fonts: {
    heading: "'Nunito', sans-serif'",
    body: "'Nunito', sans-serif'",
  },
};

const theme = extendTheme({ colors });

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);