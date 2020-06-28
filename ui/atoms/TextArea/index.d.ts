import {
  PlaceHolderType,
  SizeType
} from "./../../utills/index.d";

export interface TextAreaProps {
  placeholder?: PlaceHolderType;
  value?: string | number;
  height?: SizeType
}

declare const TextArea: React.ComponentClass<TextAreaProps & JSX.IntrinsicElements['textArea']>;

export { TextArea };
