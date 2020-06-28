import styled, { css } from "styled-components";
import { Text } from "../Text";

export const CheckBoxWrapper = styled.label`
  position: relative;

  display: flex;
  cursor: pointer;
  font-size: 22px;
  user-select: none;

  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }
`;

const handleState = ({ disabled, checked, theme }) => {
  let styles = [];
  const color = checked
    ? theme.colors.brand
    : disabled
    ? theme.colors.gray_dark
    : "none";
  return css`
    background-color: ${color};
  `;
};

export const StyledCheckBox = styled.span`
  position: relative;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 25px;
  width: 25px;
  border-radius: ${(props) => props.theme.input.border.radius};
  border-width: 1px;
  border-color: ${(props) => props.theme.colors.gray_dark};
  outline-color: ${(props) => props.theme.colors.brand};
  border-style: solid;
  top: 2px;
  ${(props) => handleState(props)}
`;

export const CheckBoxLabel = styled(Text)`
  padding: 0 0 0 13px;
  color: ${(props) =>
    props.disabled ? props.theme.colors.gray_dark : props.theme.colors.default};
`;

export const CheckBoxIcon = (props) => (
  <svg
    width="15"
    height="11"
    viewBox="0 0 15 11"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5.39656 10.8966C5.09222 10.8966 4.78756 10.7805 4.55539 10.5481L0.348519 6.34126C-0.116173 5.87657 -0.116173 5.12328 0.348519 4.65859C0.81321 4.1939 1.5665 4.1939 2.03119 4.65859L5.39656 8.02396L12.9688 0.45186C13.4335 -0.0126915 14.187 -0.0128321 14.6513 0.45186C15.1162 0.916551 15.1162 1.67001 14.6513 2.13453L6.23792 10.5481C6.00557 10.7803 5.70105 10.8966 5.39656 10.8966Z"
      fill={props.fill}
    />
  </svg>
);
