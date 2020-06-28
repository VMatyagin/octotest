import { Box, Text, Heading } from "../atoms";
import { ClipBoard } from "../molecules";
import { GalleryType } from "../../features/DataStore";

export const TextBlockWithGallery = ({
  title,
  content,
  images,
  description,
  link,
  extra_content,
}: TextBlockWithGalleryProps) => {
  return (
    <Box as="article" align="start" gap="medium" id='gallery'>
      <Heading level={2}>{title}</Heading>
      <Text size="large">{content}</Text>
      {images && images.map(item => item.id)}
      {description && <Text size="medium">{description}</Text>}
      {link && <ClipBoard link={link} />}
      {extra_content && <Text size="small">{extra_content}</Text>}
    </Box>
  );
};

interface TextBlockWithGalleryProps {
  title: string;
  content: string;
  description?: string;
  images?: GalleryType[];
  link?: string;
  extra_content?: string;
}
