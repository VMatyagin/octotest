import React from "react";
import { ThemeProvider } from "styled-components";
import { BasicTheme } from "../ui/utills/styles";
import { Text } from "../ui/atoms/Text"

export default { title: "Text" };

export const All = () => {
  return (
    <ThemeProvider theme={BasicTheme}>
        <Text>lorem</Text>
    </ThemeProvider>
  );
};
