import { Box, Image, Heading } from "../atoms";
import styled from "styled-components";
import { ContactForm } from "../../features/organisms";
import { device } from "../utills/variables";

const FormImage = styled(Image)`
  position: absolute;
  top: 10px;
  left: -24px;
  margin-bottom: -26px;
  @media ${device.laptop} {
    top: 40px;
    left: -130px;
    width: 444px;
    height: 428px;
  }
`;

const FormGap = styled.div`
  display: block;
  height: 270px;
`;

export const FormSection = () => {
  return (
    <Box  gap="medium" id="form" position="relative">
      <FormGap />
      <FormImage
        width="355"
        height="342"
        src="img/form-man.png"
        alt="Картинка для формы"
      />
      <Heading level={2}>Форма с приветами</Heading>
      <ContactForm />
    </Box>
  );
};
