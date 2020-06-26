import React from "react";
import { ThemeProvider } from "styled-components";
import { BasicTheme } from "../ui/utills/styles";
import { Text } from "../ui/atoms";

export default { component: "Text", title: "Text" };

export const All = () => {
  return (
    <ThemeProvider theme={BasicTheme}>
      <Text>
        Proident dolore pariatur incididunt sit et enim id laborum duis aliqua
        do.
      </Text>
    </ThemeProvider>
  );
};

export const Attrs = () => {
  return (
    <ThemeProvider theme={BasicTheme}>
      <div>
        <Text>Обычный текст</Text>
        <Text></Text>
      </div>
      <div>
        <Text size="small">Малый текст</Text>
      </div>
      <div>
        <Text bold>Жирная пешка</Text>
      </div>
      <div>
        <Text italic>Курсивная пешка</Text>
      </div>
      <div>
        <Text italic bold>Жирная курсивная пешка</Text>
      </div>
      <div>
        <Text size='large'>Крупная пешка</Text>
      </div>
      <div>
        <Text size='large' bold>Жирная крупная пешка</Text>
      </div>
      <div>
        <Text uppercase='large'>Крупный текст капсом</Text>
      </div>
      <div>
        <Text uppercase='small'>Мелкий текст капсом</Text>
      </div>
    </ThemeProvider>
  );
};
