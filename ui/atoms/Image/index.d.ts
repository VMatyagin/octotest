import { SizeType } from "./../../utills/index.d";

interface ImageProps {
  height: SizeType;
  width: SizeType;
  maxWidth?: SizeType;
  overflow?: "auto" | string;
  position?: "relative" | "absolute";
}

declare const Image: React.FC<ImageProps & JSX.IntrinsicElements["img"]>;

export { Image };
