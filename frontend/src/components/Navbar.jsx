import logo from '/images/logo.png';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const Navbar = () => {
  const { activeNav, setActiveNav } = useAuth();

  const navData = [
    {
      title: 'Home',
      text: '/home',
      link: '/',
    },
    {
      title: 'All Blogs',
      text: '/allblogs',
      link: '/allblogs',
    },
    {
      title: 'Featured',
      text: '/featured',
      link: '/allblogs',
    },
    {
      title: 'Contact',
      text: '/contact',
      link: '/contact',
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
                    className={`uppercase hover:bg-black hover:bg-opacity-15 py-4 px-5 duration-500 cursor-pointer`}
                    onClick={() => setActiveNav(item.text)}
                  >
                    {item.title}
                  </li>
                </Link>
              ))}
            </ul>
            <div>
              <div className="p-3 bg-gray-100 rounded-full">
                <FaUser />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
