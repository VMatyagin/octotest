import { TextInput, Box, TextArea, CheckBox, Button } from "../../ui/atoms";
import { FormField } from "../../ui/molecules";
import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { SuccessMessage } from "../molecules";

const ContactValidationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Слишком мало символов")
    .max(15, "Слишком много символов"),
  tel: Yup.string()
    .required("Без номера сложно связаться")
    .matches(
      /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/,
      "Некорректный номер"
    ),
  email: Yup.string()
    .required("Кажется, вы забыли почту")
    .email("Некорректный почтовый адрес"),
  message: Yup.string()
    .required("Нужно же что-то нам сказать?")
    .min(2, "Слишком мало символов")
    .max(40, "Слишком много символов"),
  agreement: Yup.boolean()
    .required()
    .notOneOf([false], "Без согласия невозможно обработать ваши данные"),
});

export const ContactForm = () => {
  const [isSubmit, submit] = useState<boolean>(false);

  const options = {
    initialValues: {
      name: "",
      tel: "",
      email: "",
      message: "",
      agreement: false,
    },
    onSubmit: () => {
      setTimeout(() => {
        setSubmitting(false);
        submit(true);
      }, 4000);
    },
    validationSchema: ContactValidationSchema
  };
  const {
    handleSubmit,
    handleChange,
    values,
    errors,
    isValid,
    dirty,
    isSubmitting,
    isValidating,
    setSubmitting,
  } = useFormik(options);

  if (isSubmit) {
    return <SuccessMessage />;
  }

  return (
    <form>
      <Box gap="medium" position='relative' align='center'>
        <FormField
          error={errors.name}
          description="Имя нас не сильно волнует и это поле необязательное"
        >
          <TextInput
            type="text"
            name="name"
            placeholder="Ваше имя"
            onChange={handleChange}
            value={values.name}
          />
        </FormField>
        <FormField
          error={errors.tel}
          description="Для телефона нужна маска для ввода"
        >
          <TextInput
            type="tel"
            name="tel"
            placeholder="Телефон"
            pattern="\+7\-[0-9]{3}\-[0-9]{3}\-[0-9]{2}\-[0-9]{2}"            required
            onChange={handleChange}
            value={values.tel}
          />
        </FormField>
        <FormField
          error={errors.email}
          description="Почту нужно валидировать, что пользователь точно указал адекватный и похожий на настоящий адрес"
        >
          <TextInput
            type="email"
            name="email"
            placeholder="Электронная почта"
            required
            onChange={handleChange}
            value={values.email}
          />
        </FormField>
        <FormField
          error={errors.message}
          description="Без сообщения форму отправлять бессмысленно"
        >
          <TextArea
            name="message"
            placeholder="Сообщение"
            required
            style={{
              resize: "none",
            }}
            height="130px"
            onChange={handleChange}
            value={values.message}
          />
        </FormField>
        <FormField error={errors.agreement}>
          <CheckBox
            label="Согласен с правилами обработки моих персональных данных"
            name="agreement"
            onChange={handleChange}
            checked={values.agreement}
          />
        </FormField>
        <FormField description="У кнопки несколько состояний. Яркой и синей она становится когда все нормально и форму можно отправлять.">
          <Button
            full
            primary
            type="button"
            disabled={!isValid || !dirty}
            onClick={() => handleSubmit()}
            isLoading={isSubmitting || isValidating}
            responsiveTo={{width: "306px"}}
          >
            Отправить сообщение
          </Button>
        </FormField>
      </Box>
    </form>
  );
};
