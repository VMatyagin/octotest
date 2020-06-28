interface ButtonProps {
  primary?: boolean;
  size?: "medium" | "large";
  disabled?: boolean;
  isLoading?: boolean;
  full?: boolean;
  clipboard?: boolean
  height?: SizeType;
  width?: SizeType;
  position?: 'relative' | 'absolute'

}

declare const Button: React.FC<ButtonProps & JSX.IntrinsicElements['button']>;

export { Button };
