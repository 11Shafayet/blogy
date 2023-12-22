import { useState } from "react";
import logo from "/images/logo.png";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [activeTab, setActiveTab] = useState("home");

  const navData = [
    {
      title: "Home",
      text: "home",
      link: "/",
    },
    {
      title: "Categories",
      text: "categories",
      link: "/categories",
    },
    {
      title: "All Blogs",
      text: "allblogs",
      link: "/allblogs",
    },
    {
      title: "Featured",
      text: "featured",
      link: "/allblog",
    },
    {
      title: "Contact",
      text: "contact",
      link: "/contact",
    },
  ];

  return (
    <>
      <div className="min-h-20 flex justify-center items-center py-4">
        <img src={logo} alt="Logo" className="h-16 object-cover" />
      </div>

      <div className="bg-primary text-white font-primary w-full">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <ul className="flex text-sm font-semibold">
              {navData.map((item, i) => (
                <Link to={item.link} key={i}>
                  <li
                    className={`uppercase hover:bg-black hover:bg-opacity-15 py-4 px-5 duration-500 cursor-pointer ${
                      activeTab === item.text && "bg-black bg-opacity-15"
                    }`}
                  >
                    {item.title}
                  </li>
                </Link>
              ))}
            </ul>
            <div>
              <div>
                <FaSearch />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
