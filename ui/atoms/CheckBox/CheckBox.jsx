import {
  CheckBoxWrapper,
  StyledCheckBox,
  CheckBoxLabel,
  CheckBoxIcon,
} from "./StyledCheckBox";

export const CheckBox = ({ checked, disabled, label, onChange, name }) => {
  const color = checked ? "#FFF" : disabled ? "#DADADA" : "none";

  return (
    <CheckBoxWrapper>
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        name={name}
      />
      <StyledCheckBox checked={checked}>
        {(checked || disabled) && <CheckBoxIcon fill={color} />}
      </StyledCheckBox>
      <CheckBoxLabel size="medium" disabled={disabled}>
        {label}
      </CheckBoxLabel>
    </CheckBoxWrapper>
  );
};
