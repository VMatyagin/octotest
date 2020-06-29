import { Box, Anchor } from "../atoms";
import { Logo } from "../molecules";
import styled from "styled-components";
import { device } from "../utills/variables";

const NavBox = styled(Box).attrs(() => ({
  as: "nav",
}))`
  display: none;
  width: 980px;

  @media ${device.laptop} {
    display: flex;
    justify-content: space-between;
    align-items: center;

  }
`;

export const Header = () => {
  return (
    <Box
      as="header"
      fill="horizontal"
      direction="row-responsive"
      justify="space-between"
      align="center"
      height="80px"
    >
      <Logo />
      <NavBox direction="row-responsive">
        <Box direction="row-responsive" gap='medium'  align="center">
          <Anchor href="#blocks">Текстовые блоки</Anchor>
          <Anchor href="#gallery">Галерея</Anchor>
        </Box>
        <Anchor href="#form">👋 Форма с приветами</Anchor>
      </NavBox>
    </Box>
  );
};
