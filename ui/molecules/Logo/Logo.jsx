import styled from "styled-components";
import { device } from "../../utills/variables";

const Image = styled.img`
  width: ${(props) => props.theme.logo.mobile.width};
  height: ${(props) => props.theme.logo.mobile.height};

  @media ${device.laptop} {
    width: ${(props) => props.theme.logo.desktop.width};
    height: ${(props) => props.theme.logo.desktop.height};
  }
`;

export const Logo = () => (
  <picture>
    <source srcSet="/img/logo.svg" type="image/svg+xml" />
    <Image width="218" height="30" src="img/logo.png" alt="Логотип" />
  </picture>
);
