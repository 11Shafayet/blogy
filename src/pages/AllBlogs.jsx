import BlogPageSidebar from "../components/BlogPageSidebar";
import Blogs from "../components/Blogs";

const AllBlogs = () => {
  return (
    <div>
      <div className="container px-4 mx-auto my-6 md:my-20">
        {/* blogs */}
        <div className="flex gap-x-5">
          <BlogPageSidebar />
          <Blogs />
        </div>
      </div>
    </div>
  );
};

export default AllBlogs;
