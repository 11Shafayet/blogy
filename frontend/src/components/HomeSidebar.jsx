import SearchBar from './SearchBar';
import AuthorInfo from './AuthorInfo';
import PopularPosts from './PopularPosts';
import PostCategories from './PostCategories';

const HomeSidebar = () => {
  return (
    <div className=" w-full md:w-1/3">
      <div className="bg-white shadow py-12 px-4 md:px-12">
        <SearchBar />

        <hr className="my-8 md:my-12" />

        <AuthorInfo />

        <hr className="my-8 md:my-12" />

        <PopularPosts />
        {/* 
        <hr className="my-8 md:my-12" />

        <PostCategories /> */}
      </div>
    </div>
  );
};

export default HomeSidebar;
