import { Box, Heading, Text } from "../atoms";

export const Task = ({ title, body, aside }: ArticleProps) => {
  return (
    <Box as="article" align="start" gap="medium" width="100%" id="blocks">
      {title && <Heading level={1}>{title}</Heading>}
      {body && (
        <Box as="section">
          <Text size="large" dangerouslySetInnerHTML={{ __html: body }} />
        </Box>
      )}
      {aside && (
        <Box as="aside">
          <Text color="gray_dark" dangerouslySetInnerHTML={{ __html: aside }} />
        </Box>
      )}
    </Box>
  );
};

interface ArticleProps {
  title: string;
  body: string;
  aside: string;
}
