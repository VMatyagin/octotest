import React from "react";
import { ThemeProvider } from "styled-components";
import { BasicTheme } from "../ui/utills/styles";
import { Heading } from "../ui/atoms";

export default { component: "Heading", title: "Heading" };

export const All = () => {
  return (
    <ThemeProvider theme={BasicTheme}>
      <Heading level={1}>Заголовок первого уровня</Heading>
      <Heading level={2}>Заголовок второго уровня</Heading>
      <Heading level={3}>Заголовок третьего уровня</Heading>
      <Heading level={4}>Заголовок четвертого уровня</Heading>
    </ThemeProvider>
  );
};
