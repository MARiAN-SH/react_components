import { Formik, Form, Field } from 'formik';
// import { Loading, } from './MaterialEditorForm.styled';


export const MaterialEditorForm = ({ loading, onSubmit }) => {
  const handleSubmit = async (values, actions) => {
    await onSubmit(values);

    // коли функція вернула проміс і він resold тоді форма відправлена і setSubmitting(false);
    actions.setSubmitting(false);
    actions.resetForm();
  };
  return (
    <>
      <h2>Submitting forms using Formik</h2>
      <Formik initialValues={{ title: '', link: '' }} onSubmit={handleSubmit}>
        {/* // щоб неперекидати props isSubmitting, використовую готовий метод formik */}
        {({ isSubmitting }) => (
          <Form>
            {/* {loading && <Loading>I will send...</Loading>} */}
            <label>
              Опис
              <Field name="title" type="text" />
            </label>
            <br />
            <label>
              Силка
              <Field name="link" type="url" />
            </label>
            <button
              type="submit"
              className="btn btn-primary"
              disabled={isSubmitting}
            >
              Добавити матеріал
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
};
