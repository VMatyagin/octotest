import { observable } from "mobx";
import { useStaticRendering } from "mobx-react";

const isServer = typeof window === "undefined";
useStaticRendering(isServer);

export type StaticBlockType = {
  id: number;
  order: number;
  title: string;
  description: string;
  content: string;
  is_published: boolean;
  image1: string | null;
  image2: string | null;
  image3: string | null;
  image4: string | null;
};

export type GalleryType = {
  id: number;
  order: number;
  title: string;
  image: string;
};

interface SerializedStore {
  name: string | null;
  slug: string | null;
  title: string | null;
  description: string | null;
  content: string | null;
  image: string | null;
  static_blocks: StaticBlockType[] | undefined;
  gallery: GalleryType[] | undefined;
}

const fakeDecription =
  "Этот блок с описанием тоже нужно сверстать. Специально использовали разные стили и текстовые блоки, даже если они порой неуместны :)";

export class DataStore {
  @observable name: string = "";
  @observable title: string = "";
  @observable description: string = "";
  @observable content: string = "";
  @observable static_blocks: StaticBlockType[] | undefined;
  @observable gallery: GalleryType[] | undefined;

  hydrate(serializedStore: SerializedStore) {
    this.name = serializedStore.name != null ? serializedStore.name : "";
    this.title = serializedStore.title != null ? serializedStore.title : "";
    this.description = fakeDecription;
    this.content =
      serializedStore.content != null ? serializedStore.content : "";
    this.static_blocks =
      serializedStore.static_blocks != null
        ? serializedStore.static_blocks
        : undefined;
    this.gallery =
      serializedStore.gallery != null
        ? serializedStore.gallery
        : [];
  }

}

export async function fetchInitialStoreState() {
  const res = await fetch("https://test.octweb.ru/api/pages/index/");
  const json = await res.json();

  return json;
}
