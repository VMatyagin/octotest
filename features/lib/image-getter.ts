import { StaticBlockType } from "../DataStore";

export const getArrayOfImages = (item: StaticBlockType) => {
    let images = [];
    for (const [key, value] of Object.entries(item)) {
      key.startsWith("image") &&
        value !== null &&
        typeof value == "string" &&
        images.push(value);
    }
    return images;
  };