import { CommonTemplate } from "../ui/templates";
import { DataStore } from "../features/DataStore";
import { observer, inject } from "mobx-react";
import {
  Article,
  Task,
  UnderscoreTextBlock,
  FormSection,
} from "../ui/organisms";
import { TextBlockWithGallery } from "../ui/organisms/TextBlockWithGallery";
import { getArrayOfImages } from "../features/lib/image-getter";

type Props = {
  dataStore?: DataStore;
};

const IndexPage = inject("dataStore")(
  observer((props: Props) => {
    const {
      static_blocks,
      title,
      content,
      description,
      gallery,
    } = props.dataStore!;

    return (
      <CommonTemplate>
        <Task title={title} body={content} aside={description} />
        <UnderscoreTextBlock
          title="Текстовые блоки и изображения для галереи"
          link="https://test.octweb.ru/api/pages/index/"
          description="Будет круто, если по клику на желтый блок, соответствующая ссылка сразу скопируется в буфер обмена и пользователь получит какое-то максимально естественное уведомление что у него теперь в буфере эта ссылка."
        />
        {static_blocks &&
          static_blocks.map((item, index) => {
            let images = getArrayOfImages(item);
            return (
              <Article
                key={item.title}
                title={item.title}
                body={item.content}
                aside={item.description}
                image={images}
                id={index == 0? 'blocks' : undefined}
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
