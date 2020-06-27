import styled, { css } from "styled-components";

const gapSize = (props) => {
  const { gap } = props.theme
  return css`
  width: ${gap[props.gap]};
  height: ${gap[props.gap]};
  `
}

export const Gap = styled.div`
  ${props => gapSize(props)}
`;
