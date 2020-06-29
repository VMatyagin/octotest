import {
  JustifyContentType,
  AlignContentType,
  BackgroundType,
  FillType,
  GapType,
  PadType,
  PolymorphicType,
  SizeType
} from "./../../utills/index.d";
export interface BoxProps {
  direction?: "column" | "row" | "row-responsive";
  align?: AlignContentType;
  justify?: JustifyContentType;
  background?: BackgroundType;
  fill?: FillType;
  gap?: GapType;
  pad?: PadType | { vertical?: PadType; horizontal?: PadType };
  as?: PolymorphicType;
  height?: SizeType;
  width?: SizeType;
  maxWidth?: SizeType;
  position?: 'relative' | 'absolute';
  overflow?: "auto" | string;
  responsive?: boolean;
  responsiveStyle?: {
    [key: BoxProps]: string
  }
  isFixed?: boolean;
}

declare const Box: React.FC<BoxProps & JSX.IntrinsicElements['section']>;

export { Box };
