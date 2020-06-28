import { CommonTemplate } from "../ui/templates";
import { DataStore, StaticBlockType } from "../features/DataStore";
import { observer, inject } from "mobx-react";
import { Article, Task, UnderscoreTextBlock, FormSection } from "../ui/organisms";
import { TextBlockWithGallery } from "../ui/organisms/TextBlockWithGallery";

type Props = {
  dataStore?: DataStore;
};

const IndexPage = inject("dataStore")(
  observer((props: Props) => {
    const { static_blocks, title, content, description, gallery } = props.dataStore!;

    const getArrayOfImages = (item: StaticBlockType) => {
      let images = [];
      for (const [key, value] of Object.entries(item)) {
        key.startsWith("image") &&
          value !== null &&
          typeof value == "string" &&
          images.push(value);
      }
      return images;
    };

    return (
      <CommonTemplate>
        <Task title={title} body={content} aside={description} />
        <UnderscoreTextBlock
          title="Текстовые блоки и изображения для галереи"
          link="https://test.octweb.ru/api/pages/index/"
          description="Будет круто, если по клику на желтый блок, соответствующая ссылка сразу скопируется в буфер обмена и пользователь получит какое-то максимально естественное уведомление что у него теперь в буфере эта ссылка."
        />
        {static_blocks &&
          static_blocks.map((item) => {
            let images = getArrayOfImages(item);
            return (
              <Article
                key={item.title}
                title={item.title}
                body={item.content}
                aside={item.description}
                image={images}
              />
            );
          })}
        <TextBlockWithGallery
          title="Галерея с изображениями"
          content="Все просто. Выводится столько фотографий сколько влезит на экран. Те что не влезли рассчитываются и выводится их количество над последней фотографией. По клику на эту подпись так же открывается увеличенное версия того изображения, над которым выводится подпись."
          description="Для того, чтобы на странице мы выводили изображение фактического нужного размера, а не просто уменьшали заведомо большее изображения, есть такая возможность:"
          link="https://test.octweb.ru/api/crop/media/uploads/gallery/gallery/6.jpeg?geometry=420x240&crop=center"
          images={gallery}
          extra_content="В параметре geometry можно задать размеры для изображения, а в crop выбрать тип кадрирования (center, top, bottom) или вообще его не указывать и тогда изображение пропорционально будет «вписано» в указнные размеры."
        />
        <FormSection />
      </CommonTemplate>
    );
  })
);

export default IndexPage;
