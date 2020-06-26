import React from "react";
import { ThemeProvider } from "styled-components";
import { BasicTheme } from "../ui/utills/styles";
import { Box, Text } from "../ui/atoms";

export default { component: "Box", title: "Box" };

export const All = () => {
  return (
    <ThemeProvider theme={BasicTheme}>
      <Box>
        <Text>Заголовок первого уровня</Text>
        <Text>Заголовок первого уровня</Text>
      </Box>
    </ThemeProvider>
  );
};
