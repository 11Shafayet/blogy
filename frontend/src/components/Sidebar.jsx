import AuthorInfo from './AuthorInfo';
import SearchBar from './SearchBar';
// import PostCategories from './PostCategories';

const Sidebar = () => {
  return (
    <div className=" w-full md:w-1/3">
      <div className="bg-white shadow py-12 px-4 md:px-12">
        <SearchBar />

        <hr className="my-8 md:my-12" />

        <AuthorInfo />
        {/* <PostCategories /> */}
      </div>
    </div>
  );
};

export default Sidebar;
