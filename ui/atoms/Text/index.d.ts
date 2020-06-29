interface TextProps {
  bold?: boolean;
  italic?: boolean;
  size?: sizeType;
  color?: ColorType;
  uppercase?: "small" | "large";
  height?: SizeType;
  width?: SizeType;
  maxWidth?: SizeType;
  responsiveStyle?: {
    [key: string]: string;
  };
  img_fill?: boolean
}

declare const Text: React.FC<TextProps & JSX.IntrinsicElements["span"]>;

export { Text };
