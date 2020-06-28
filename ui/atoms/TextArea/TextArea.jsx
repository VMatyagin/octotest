import styled, { css } from "styled-components";
import { textBase, inputBase } from "../../utills/styles";
import { device } from "../../utills/variables";

const handleSize = ({ height }) => {
  let styles = [];

  if (height && height !== "none") {
    styles.push(css`
      height: ${height};
    `);
  }
  return styles;
};

export const TextArea = styled.textarea`
  ${textBase};
  ${inputBase};
  ${props => handleSize(props)}
`;
