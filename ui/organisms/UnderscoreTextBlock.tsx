import { Box, Text } from "../atoms";
import { ClipBoard } from "../molecules";

export const UnderscoreTextBlock = ({
  title,
  link,
  description,
}: UnderscoreTextBlockProps) => {
  return (
    <Box
      as="article"
      align="start"
      gap="medium"
      responsiveStyle={{ "margin-bottom": "60px" }}
    >
      <Text uppercase="large" size="small">
        {title}
      </Text>
      <Box align="start" gap="medium" responsive>
        <Box responsiveStyle={{ width: "622px" }}>
          <ClipBoard link={link} />
        </Box>
        <Box responsiveStyle={{ width: "650px" }}>
          <Text size="small">{description}</Text>
        </Box>
      </Box>
    </Box>
  );
};

interface UnderscoreTextBlockProps {
  title: string;
  link: string;
  description: string;
}
