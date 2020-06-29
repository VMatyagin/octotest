import styled from "styled-components";
import { device } from "../../ui/utills/variables";
import { Box, Image, Text } from "../../ui/atoms";

const SucessImage = styled(Image)`
  position: relative;
  @media ${device.laptop} {
    
  }
`;

export const SuccessMessage = () => {
  return (
    <Box gap="medium" align='center' position='relative'>
      <SucessImage
        width="80"
        height="80"
        src="img/success.svg"
        alt="Успешно отправлено"
      />
      <Text maxWidth='325px'>
        Письмо для активации аккаунта успешно отправлено на адрес электронной
        почты, который вы указали при регистрации.
      </Text>
    </Box>
  );
};
