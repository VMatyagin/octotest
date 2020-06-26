interface ButtonProps {
  primary?: boolean;
  size?: "medium" | "large";
  disabled?: boolean;
  isLoading?: boolean;
  full?: boolean;
}

declare const Button: React.FC<ButtonProps>;

export { Button };
