import { Button, Box, Text } from "../../atoms";
import { ClipBoardIcon } from "./ClipBoardIcon";
import useClipboard from "react-use-clipboard";
import styled from "styled-components";

interface NotificationProps {
  isCopied: boolean;
}

const Notification = styled(Box)<NotificationProps>`
  position: absolute;
  align-items: center;
  bottom: ${(props) => (props.isCopied ? 0 : "-40px")};
  opacity: ${(props) => (props.isCopied ? 1 : 0)};
  left: 0;
  background-color: ${(props) => props.theme.colors.brand};
  transition-property: opacity, bottom;
  transition-duration: 0.5s;
  transition-timing-function: cubic-bezier(0.65, 0.05, 0.36, 1);
`;

export const ClipBoard = ({ link }: ClipBoardProps) => {
  const [isCopied, setCopied] = useClipboard(link, {
    successDuration: 1000,
  });

  return (
    <Button
      clipboard
      full
      height="auto"
      position="relative"
      onClick={setCopied}
    >
      <Box>
        <Text bold>{link}</Text>
        <ClipBoardIcon />
      </Box>
      <Notification isCopied={isCopied} width="100%">
        <Text color="white">
          Cкопировано
        </Text>
      </Notification>
    </Button>
  );
};

interface ClipBoardProps {
  link: string;
}
