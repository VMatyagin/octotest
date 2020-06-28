import styled, { css } from "styled-components";
import { textBase } from "../../utills/styles";

const handleFill = ({ fill }) => {
  let styles = [];
  if (fill) {
    fill == "horizontal" &&
      styles.push(css`
        width: 100%;
      `);
    fill == "vertical" &&
      styles.push(css`
        height: 100%;
      `);
    fill === true &&
      styles.push(css`
        width: 100%;
        height: 100%;
      `);
    return styles;
  }
};

const handleBackground = ({ background, theme }) => {
  let styles = [];
  if (background && background !== "none") {
    styles.push(css`
      background-color: ${background};
    `);
  }
  return styles;
};

const handlePad = ({ pad, theme }) => {
  let styles = [];
  if (pad && pad !== "none") {
    pad.horizontal &&
      styles.push(css`
        padding-left: ${theme.padding[pad.horizontal]
          ? theme.padding[pad.horizontal]
          : pad.horizontal};
        padding-right: ${theme.padding[pad.horizontal]
          ? theme.padding[pad.horizontal]
          : pad.horizontal};
      `);
    pad.vertical &&
      styles.push(css`
        padding-top: ${theme.padding[pad.vertical]
          ? theme.padding[pad.vertical]
          : pad.vertical};
        padding-bottom: ${theme.padding[pad.vertical]
          ? theme.padding[pad.vertical]
          : pad.vertical};
      `);
    pad === true &&
      styles.push(css`
        padding-left: ${theme.padding[pad] ? theme.padding[pad] : pad};
        padding-right: ${theme.padding[pad] ? theme.padding[pad] : pad};
        padding-top: ${theme.padding[pad] ? theme.padding[pad] : pad};
        padding-bottom: ${theme.padding[pad] ? theme.padding[pad] : pad};
      `);
  }
  return styles;
};

const handleSize = ({ width, maxWidth, height }) => {
  let styles = [];
  if (width && width !== "none") {
    styles.push(css`
      width: ${width};
    `);
  }
  if (maxWidth && maxWidth !== "none") {
    styles.push(css`
      max-width: ${maxWidth};
    `);
  }
  if (height && height !== "none") {
    styles.push(css`
      height: ${height};
    `);
  }
  return styles;
};

const handleDirection = ({ direction }) => {
  let styles = [];
  if (direction === "row-responsive") {
    styles.push(css`
      flex-direction: row;
      flex-wrap: wrap;
    `);
  } else {
    styles.push(css`
      flex-direction: ${direction ? direction : "column"};
    `);
  }
  return styles;
};

export const StyledBox = styled.section.attrs((props) => ({
  as: props.as,
}))`
  ${textBase};
  display: flex;
  ${(props) => handleDirection(props)}
  align-items: ${(props) => (props.align ? props.align : "start")};
  justify-content: ${(props) => (props.justify ? props.justify : "start")};
  ${(props) => handleFill(props)}
  ${(props) => handleBackground(props)}
  ${(props) => handlePad(props)}
  ${(props) => handleSize(props)}
  position: ${(props) => props.position};
  overflow: ${(props) => props.overflow};

`;
