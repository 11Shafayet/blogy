import { FaSearch } from 'react-icons/fa';

const SearchBar = () => {
  return (
    <form className="relative">
      <input
        type="text"
        name=""
        id=""
        className="relative w-full border border-gray-200 rounded-full py-3.5 px-4  focus:outline-primary"
      />

      <button
        className="absolute top-1/2 -translate-y-1/2 right-6"
        type="submit"
      >
        <FaSearch />
      </button>
    </form>
  );
};

export default SearchBar;
