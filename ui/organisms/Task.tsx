import { Box, Heading, Text } from "../atoms";

export const Task = ({ title, body, aside }: ArticleProps) => {
  return (
    <Box as="article" align="start" gap="medium" width="100%">
      {title && <Heading level={1}>{title}</Heading>}
      <Box responsive={true} gap="medium">
        {body && (
          <Box as="section" responsiveStyle={{ width: "985px" }}>
            <Text size="large" dangerouslySetInnerHTML={{ __html: body }} />
          </Box>
        )}
        {aside && (
          <Box as="aside" responsiveStyle={{ width: "315px" }}>
            <Text
              color="gray_dark"
              dangerouslySetInnerHTML={{ __html: aside }}
            />
          </Box>
        )}
      </Box>
    </Box>
  );
};

interface ArticleProps {
  title: string;
  body: string;
  aside: string;
}
