interface TextProps {
  bold?: boolean;
  italic?: boolean;
  size?: sizeType;
  uppercase?: "small" | "large";
}

declare const Text: React.FC<TextProps>;

export { Text };
