import { Box, Text } from "../../atoms";
import styled from "styled-components";

const ErrorText = styled(Text)`
  color: ${(props) => props.theme.colors.error};
  margin: 6px 13px;
`;

const DescriptionText = styled(Text)`
  color: ${(props) => props.theme.colors.gray_dark};
  margin: 10px 0 0 0;
`;

export const FormField = ({ children, error, description }: FormFieldProps) => {
  return (
    <Box fill="horizontal">
      {children}
      {error ? (
        <ErrorText size="small">{error}</ErrorText>
      ) : (
        <DescriptionText>{description}</DescriptionText>
      )}
    </Box>
  );
};

interface FormFieldProps {
  children: JSX.Element;
  error?: string;
  description?: string;
}
