export interface CheckBoxProps {
  checked?: boolean;
  disabled?: boolean;
  label: string;
}

declare const CheckBox: React.ComponentClass<CheckBoxProps & JSX.IntrinsicElements["input"]>;

export { CheckBox };
