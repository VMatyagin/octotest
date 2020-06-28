import { Box, Heading, Text, Image } from "../atoms";
import { ParseStringToDOM } from "../../features/lib/parse-dom-string";

export const Article = ({ title, body, aside, image }: ArticleProps) => {
  return (
    <Box
      as="article"
      align="start"
      gap="medium"
      overflow="hidden"
      maxWidth="100%"
    >
      {title && <Heading level={3}>{title}</Heading>}
      {body && (
        <Box as="section" maxWidth="100%">
          <Text size="medium" maxWidth="100%">
            {ParseStringToDOM(body)}
          </Text>
        </Box>
      )}
      {aside && (
        <Box as="aside">
          <Text color="gray_dark" dangerouslySetInnerHTML={{ __html: aside }} />
        </Box>
      )}
      <Box direction="row-responsive" fill="horizontal" justify="space-between">
        {image && image.map((item) => item)}
      </Box>
    </Box>
  );
};

interface ArticleProps {
  title: string;
  body: string;
  aside: string;
  image?: string[];
}
