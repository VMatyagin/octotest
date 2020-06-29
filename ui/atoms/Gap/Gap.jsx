import styled, { css } from "styled-components";

import { device } from "../../utills/variables"
const gapSize = (props) => {
  const { gap } = props.theme
  return css`
  width: ${gap[props.gap]};
  height: ${gap[props.gap]};
  flex-shrink: 0;
  @media ${device.laptop} {
    width: ${gap.desktop[props.gap]};
  height: ${gap.desktop[props.gap]};
  }
  `
}

export const Gap = styled.div`
  ${props => gapSize(props)}
`;
