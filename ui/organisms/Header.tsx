import { Box } from "../atoms";
import { Logo } from "../molecules";

export const Header = () => {
  return (
    <Box
      as="header"
      fill="horizontal"
      direction="row-responsive"
      justify="space-between"
      align='start'
      height="80px"
    >
      <Logo />
    </Box>
  );
};
