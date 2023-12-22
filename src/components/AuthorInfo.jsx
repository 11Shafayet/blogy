import authorImage from '/images/own.jpg';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaGithub, FaLinkedinIn } from 'react-icons/fa';

const AuthorInfo = () => {
  return (
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
  );
};

export default AuthorInfo;
