import { Box, Text } from "../../atoms";
import styled from "styled-components";
import { device } from "../../utills/variables";

const ErrorText = styled(Text)`
  color: ${(props) => props.theme.colors.error};
  margin: 6px 3px;
`;

const DescriptionText = styled(Text)`
  color: ${(props) => props.theme.colors.gray_dark};
  @media ${device.laptop} {
    margin-left: 49px;
  }
`;

export const FormField = ({ children, error, description }: FormFieldProps) => {
  return (
    <Box responsive responsiveStyle={{ width: "100%" }}>
      <Box width="100%" responsiveStyle={{ width: "538px" }}>
        {children}
        {error && <ErrorText size="small">{error}</ErrorText>}
      </Box>
      {description && (
        <DescriptionText responsiveStyle={{ width: "500px" }}>
          {description}
        </DescriptionText>
      )}
    </Box>
  );
};

interface FormFieldProps {
  children: JSX.Element;
  error?: string;
  description?: string;
}
