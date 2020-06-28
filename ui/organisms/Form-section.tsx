import { Box, Image, Heading } from "../atoms";
import styled from "styled-components";
import { ContactForm } from "../../features/organisms";

const FormImage = styled(Image)`
    position: relative;
    top: 10px;
    left: -24px;
    margin-bottom: -26px;
`;

export const FormSection = () => {
  return (
    <Box align='stretch' gap='medium' id='form'>
      <FormImage width="355" height="342" src="img/form-man.png" alt="Картинка для формы"/>
      <Heading level={2}>Форма с приветами</Heading>
      <ContactForm />
    </Box>
  );
};