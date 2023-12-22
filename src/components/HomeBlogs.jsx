import { FaCalendarAlt, FaComment } from 'react-icons/fa';
import blog1 from '/images/blog1.webp';

const data = [
  {
    img: blog1,
    category: 'Gadget',
    title: 'New Protect: 2nd gen smoke + CO Alarm',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam magnam dolorem culpa voluptate qui nam, delectus,',
    date: 'March 14, 2018',
    commentCount: '05',
  },
  {
    img: blog1,
    category: 'Gadget',
    title: 'New Protect: 2nd gen smoke + CO Alarm',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam magnam dolorem culpa voluptate qui nam, delectus,',
    date: 'March 14, 2018',
    commentCount: '05',
  },
  {
    img: blog1,
    category: 'Gadget',
    title: 'New Protect: 2nd gen smoke + CO Alarm',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam magnam dolorem culpa voluptate qui nam, delectus,',
    date: 'March 14, 2018',
    commentCount: '05',
  },
  {
    img: blog1,
    category: 'Gadget',
    title: 'New Protect: 2nd gen smoke + CO Alarm',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam magnam dolorem culpa voluptate qui nam, delectus,',
    date: 'March 14, 2018',
    commentCount: '05',
  },
];

const HomeBlogs = () => {
  return (
    <div className="w-full md:w-2/3">
      {data?.map((item, i) => {
        const { img, category, title, desc, date, commentCount } = item;
        return (
          <div
            className="px-4 lg:px-12 pb-6 md:pb-16 relative overflow-hidden z-10"
            key={i}
          >
            <img
              src={img}
              alt=""
              className="max-h-[300px] w-full object-cover -z-10"
            />

            <div className="bg-white shadow-xl max-w-[90%] mx-auto -mt-20 py-12 px-8 relative">
              <span className="px-6 py-2 text-sm border border-primary rounded-full">
                {category}
              </span>
              <h2 className="capitalize text-2xl font-bold hover:text-primary duration-500 my-4">
                {title}
              </h2>
              <p className="opacity-75">{desc}</p>
              <div className="flex gap-x-5 mt-4">
                <h5 className="text-sm flex items-center gap-x-2">
                  <FaCalendarAlt /> {date}
                </h5>
                <h5 className="text-sm flex items-center gap-x-2">
                  <FaComment /> {commentCount}
                </h5>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default HomeBlogs;
