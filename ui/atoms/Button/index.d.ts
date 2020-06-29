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
  responsiveTo?: {
    [key: string]: string
  }
}

declare const Button: React.FC<ButtonProps & JSX.IntrinsicElements['button']>;

export { Button };
