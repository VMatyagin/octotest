import { Box } from "../atoms";
import { Header, Footer } from "../organisms";

export const CommonTemplate = ({
  header = <Header />,
  footer = <Footer />,
  children,
}: CommonTemplate) => {
  return (
    <Box gap='medium' pad={{ horizontal: "medium" }}>
      {header}
      <Box as="main" align='start' gap='medium' width='100%'>
        {children}
      </Box>
      {footer}
    </Box>
  );
};

interface CommonTemplate {
  header?: JSX.Element;
  footer?: JSX.Element;
  children: React.ReactNode;
}
