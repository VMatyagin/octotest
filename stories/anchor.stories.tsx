import React from "react";
import { ThemeProvider } from "styled-components";
import { BasicTheme } from "../ui/utills/styles";
import { Anchor } from "../ui/atoms";

export default { component: "Anchor", title: "Anchor" };

export const All = () => {
  return (
    <ThemeProvider theme={BasicTheme}>
      <Anchor href='vk.com'>Ссылка</Anchor>
    </ThemeProvider>
  );
};
