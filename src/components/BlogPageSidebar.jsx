import { FaFacebookF, FaGithub, FaLinkedinIn, FaSearch } from "react-icons/fa";
import authorImage from "/images/own.jpg";
import blog1 from "/images/blog1.webp";
import { Link } from "react-router-dom";

const popularPostsData = [
  {
    img: blog1,
    title: "Space the final Frontier",
    timestamp: "2 Hours",
  },
  {
    img: blog1,
    title: "Space the final Frontier",
    timestamp: "2 Hours",
  },
  {
    img: blog1,
    title: "Space the final Frontier",
    timestamp: "2 Hours",
  },
  {
    img: blog1,
    title: "Space the final Frontier",
    timestamp: "2 Hours",
  },
];

const categories = [
  {
    category: "Gadget",
    post: "05",
  },
  {
    category: "Technology",
    post: "05",
  },
  {
    category: "Lifestyle",
    post: "05",
  },
  {
    category: "Fashion",
    post: "05",
  },
  {
    category: "Art",
    post: "05",
  },
  {
    category: "Adventure",
    post: "05",
  },
];

const BlogPageSidebar = () => {
  return (
    <div className=" w-full md:w-1/3">
      <div className="bg-white shadow py-12 px-4 md:px-12">
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

        <hr className="my-8 md:my-12" />

        <div className="flex flex-col items-center gap-y-2.5">
          <img
            src={authorImage}
            alt=""
            className="h-28 w-28 object-cover rounded-full"
          />
          <h2 className="font-bold text-xl">Shafayetur Rahman</h2>
          <p className="opacity-75 uppercase">MERN Developer</p>
          <div className="flex items-center gap-x-3">
            <Link
              to="https://www.facebook.com/11Shafayet/"
              className="opacity-65 hover:opacity-100 hover:text-primary hover:translate-y-1 duration-500"
            >
              <FaFacebookF size={20} />
            </Link>
            <Link
              to="https://www.linkedin.com/in/shafayetur-rahman/"
              className="opacity-65 hover:opacity-100 hover:text-primary hover:translate-y-1 duration-500"
            >
              <FaLinkedinIn size={20} />
            </Link>
            <Link
              to="https://github.com/11Shafayet"
              className="opacity-65 hover:opacity-100 hover:text-primary hover:translate-y-1 duration-500"
            >
              <FaGithub size={20} />
            </Link>
          </div>
          <p className="text-sm text-center opacity-75">
            I am a passionate React developer, dedicated to shaping the digital
            world through innovative and user-centric web applications. With a
            strong command of JavaScript, HTML, and CSS, I have embarked on an
            exciting journey of transforming design visions into seamless,
            interactive experiences on the web.
          </p>
        </div>

        <hr className="my-8 md:my-12" />

        <div>
          <h4 className="text-xl font-bold border-l-4 border-primary pl-3 mb-4">
            Post Categories
          </h4>
          {categories.map((category, i) => (
            <div
              className="flex justify-between border-dashed border-b items-center gap-x-3 py-4"
              key={i}
            >
              <h5>{category.category}</h5>
              <p>{category.post}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPageSidebar;
