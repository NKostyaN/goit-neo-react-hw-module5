import { Field, Form, Formik } from "formik";
import toast, { Toaster } from "react-hot-toast";

const SearchBar = ({ search }) => {
  const handleSubmit = (values, actions) => {
    if (values.query === "") {
      toast("Nothing to search, you need to enter something");
      return;
    }
    search(values.query);
    actions.resetForm();
  };

  return (
    <>
      <header>
        <Formik initialValues={{ query: "" }} onSubmit={handleSubmit}>
          <Form>
            <Field
              type="text"
              name="query"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
            />
            <button type="submit">Search</button>
          </Form>
        </Formik>
      </header>
      <Toaster />
    </>
  );
};

export default SearchBar;
