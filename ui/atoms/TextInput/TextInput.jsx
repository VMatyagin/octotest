import styled, { css } from "styled-components";
import { textBase, inputBase } from "../../utills/styles";
import { device } from "../../utills/variables";

export const TextInput = styled.input`
  ${textBase};
  ${inputBase};
  height: ${(props) => props.theme.input.size.mobile.height};
  @media ${device.laptop} {
    height: ${(props) => props.theme.input.size.desktop.height};
  }
`;
