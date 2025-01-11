import toast, { Toaster } from "react-hot-toast";

const SearchBar = ({ search, queryValue }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const value = e.target.elements.search.value;
    if (value === "") {
      toast("Nothing to search, you need to enter something");
      return;
    }
    search(value);
    e.target.reset();
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movie"
          name="search"
          defaultValue={queryValue}
        />
        <button type="submit">Search</button>
      </form>
      <Toaster />
    </>
  );
};

export default SearchBar;
