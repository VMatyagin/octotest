import { Box, Text, Heading, Button, Anchor } from "../atoms";
import styled from "styled-components";
import { device } from "../utills/variables";

const StyledFooterBox = styled(Box)`
  border-bottom: 3px solid ${(props) => props.theme.colors.basic_dark};
  border-top: 1px solid ${(props) => props.theme.colors.gray_dark};
  width: 100%;
  padding: 39px 0 40px 0;

  @media ${device.laptop} {
    margin-top: 25px;
    padding-bottom: 30px;
  }
`;

export const Footer = () => {
  return (
    <StyledFooterBox gap="medium">
      <Box
        gap="small"
        responsive
        fill="horizontal"
        responsiveStyle={{
          "justify-content": "space-between",
        }}
      >
        <Box gap="small" responsive>
          <Box gap="small" responsiveStyle={{ width: "427px" }}>
            <Heading level={4}>Санкт-Петербург</Heading>
            <Text size="large">Большой Проспект П. С., 18, офис 22</Text>
          </Box>
          <Box gap="small" responsiveStyle={{ width: "427px" }}>
            <Heading level={4}>
              <a href="mailto:mail@octoberweb.ru">mail@octoberweb.ru</a>
            </Heading>
            <Text size="large">
              <a href="tel:+7 (981) 131-64-98">+7 (981) 131-64-98</a>
            </Text>
          </Box>
        </Box>
        <Button full responsiveTo={{ width: "205px" }}>
          <Anchor href='#header'>Написать нам</Anchor>
        </Button>
      </Box>
      <Box
        direction="row-responsive"
        gap="medium"
        align="center"
        fill="horizontal"
      >
        <Anchor href="#blocks">Текстовые блоки</Anchor>
        <Anchor href="#gallery">Галерея</Anchor>
        <Anchor href="#form">Форма</Anchor>
        <Text
          size="small"
          responsiveStyle={{
            "margin-left": "auto",
          }}
        >
          © 2009-2020 OctoberWeb
        </Text>
      </Box>
    </StyledFooterBox>
  );
};
