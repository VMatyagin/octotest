import {
  PlaceHolderType
} from "./../../utills/index.d";

export interface TextInputProps {
  placeholder?: PlaceHolderType;
  value?: string | number;
}

declare const TextInput: React.ComponentClass<TextInputProps & JSX.IntrinsicElements['input']>;

export { TextInput };
