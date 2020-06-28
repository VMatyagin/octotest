import { Box, Text, Heading, Button, Anchor } from "../atoms";
import styled from "styled-components";

const StyledFooterBox = styled(Box)`
  border-bottom: 3px solid ${(props) => props.theme.colors.basic_dark};
  border-top: 1px solid ${(props) => props.theme.colors.gray_dark};
  width: 100%;
  padding: 39px 0 40px 0;
`;

export const Footer = () => {
  return (
    <StyledFooterBox gap="medium">
      <Box gap="small">
        <Heading level={4}>Санкт-Петербург</Heading>
        <Text size="large">Большой Проспект П. С., 18, офис 22</Text>
      </Box>
      <Box gap="small">
        <Heading level={4} style={{}}>
          <a href="mailto:mail@octoberweb.ru">mail@octoberweb.ru</a>
        </Heading>
        <Text size="large">
          <a href="tel:+7 (981) 131-64-98">+7 (981) 131-64-98</a>
        </Text>
      </Box>
      <Button full>Написать нам</Button>
      <Box direction="row-responsive" gap="medium" align="center">
        <Anchor href="#blocks">Текстовые блоки</Anchor>
        <Anchor href="#gallery">Галерея</Anchor>
        <Anchor href="#form">Форма</Anchor>
        <Text size="small">© 2009-2020 OctoberWeb</Text>
      </Box>
    </StyledFooterBox>
  );
};
