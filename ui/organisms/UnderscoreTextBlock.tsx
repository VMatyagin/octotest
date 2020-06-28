import { Box, Text } from "../atoms";
import { ClipBoard } from "../molecules";

export const UnderscoreTextBlock = ({
  title,
  link,
  description,
}: UnderscoreTextBlockProps) => {
  return (
    <Box as="article" align="start" gap="medium">
      <Text uppercase="large" size="small" >
        {title}
      </Text>
      <ClipBoard link={link} />
      <Text size="small">{description}</Text>
    </Box>
  );
};

interface UnderscoreTextBlockProps {
  title: string;
  link: string;
  description: string;
}
