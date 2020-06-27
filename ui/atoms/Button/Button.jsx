import { StyledButton } from "./StyledButton";
import { Spinner } from "../Spinner";

export const Button = ({ children, isLoading, ...rest }) => {
  let content = children;
  if (isLoading && isLoading !== "none") {
    content = <Spinner />;
  }

  return <StyledButton {...rest}>{content}</StyledButton>;
};
