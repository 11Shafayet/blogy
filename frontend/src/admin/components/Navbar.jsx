import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '/images/logo.png';
import useAuth from '../../hooks/useAuth';

const Navbar = () => {
  const { activeNav, setActiveNav } = useAuth();
  const [user, setUser] = useState(null);
  const [activeProfile, setActiveProfile] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem('userInfo'));

    setUser(loggedInUser);
  }, []);

  const logoutHandler = () => {
    localStorage.removeItem('userInfo');
    setUser(null);
    navigate('/');
  };

  const navData = [
    {
      title: 'Home',
      text: 'home',
      link: '/',
    },
    {
      title: 'My Blogs',
      text: 'dashboard',
      link: '/dashboard',
    },
    {
      title: 'Add Blog',
      text: 'addblog',
      link: '/dashboard/add-blog',
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
                      activeNav === item.text && 'bg-black bg-opacity-15'
                    }`}
                    onClick={() => setActiveNav(item.text)}
                  >
                    {item.title}
                  </li>
                </Link>
              ))}
              {user?.role === 'admin' && (
                <Link to="/dashboard/all-users">
                  <li
                    className={`uppercase hover:bg-black hover:bg-opacity-15 py-4 px-5 duration-500 cursor-pointer ${
                      activeNav === 'allUsers' && 'bg-black bg-opacity-15'
                    }`}
                    onClick={() => setActiveNav('allUsers')}
                  >
                    All Users
                  </li>
                </Link>
              )}
            </ul>
            <div className="flex items-center">
              <div
                className="relative bg-gray-100 rounded-full cursor-pointer"
                onClick={() => setActiveProfile((prev) => !prev)}
              >
                <img
                  src={user?.pic}
                  alt="user"
                  className="w-11 h-11 rounded-full"
                />
                {activeProfile && (
                  <div className="absolute bg-white text-black top-full right-0 rounded-md z-[100] pt-4 shadow">
                    <h4
                      className="uppercase hover:bg-black hover:bg-opacity-15 py-4 px-5 duration-500 font-bold cursor-pointer"
                      onClick={logoutHandler}
                    >
                      Logout
                    </h4>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
