import React from "react";
import { ThemeProvider } from "styled-components";
import { BasicTheme } from "../ui/utills/styles";
import { Button, Box } from "../ui/atoms";

export default { component: "Button", title: "Button" };

export const All = () => {
  return (
    <ThemeProvider theme={BasicTheme}>
      <Box>
        <Button>Default</Button>
        <Button disabled>Disabled</Button>
        <Button primary>Primary</Button>
        <Button full primary>Full</Button>
        <Button size='large' primary>Big Button</Button>
      </Box>
    </ThemeProvider>
  );
};
