import { FaCalendarAlt, FaComment } from 'react-icons/fa';
import heroOne from '/images/hero1.webp';

const data = [
  {
    img: heroOne,
    category: 'Gadget',
    title: 'New Protect: 2nd gen smoke + CO Alarm',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam magnam dolorem culpa voluptate qui nam, delectus,',
    date: 'March 14, 2018',
    commentCount: '05',
  },
  {
    img: heroOne,
    category: 'Gadget',
    title: 'New Protect: 2nd gen smoke + CO Alarm',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam magnam dolorem culpa voluptate qui nam, delectus,',
    date: 'March 14, 2018',
    commentCount: '05',
  },
  {
    img: heroOne,
    category: 'Gadget',
    title: 'New Protect: 2nd gen smoke + CO Alarm',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam magnam dolorem culpa voluptate qui nam, delectus,',
    date: 'March 14, 2018',
    commentCount: '05',
  },
  {
    img: heroOne,
    category: 'Gadget',
    title: 'New Protect: 2nd gen smoke + CO Alarm',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam magnam dolorem culpa voluptate qui nam, delectus,',
    date: 'March 14, 2018',
    commentCount: '05',
  },
];

export const Hero = () => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 w-full min-h-[600px] overflow-hidden">
      {data?.map((item, i) => {
        const { img, category, title, desc, date, commentCount } = item;
        return (
          <div
            className="px-4 lg:px-12 py-6 text-white relative overflow-hidden z-10"
            key={i}
          >
            <img
              src={img}
              alt=""
              className="absolute top-0 left-0 right-0 bottom-0 h-full w-full object-cover -z-10"
            />
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-gray-600 bg-opacity-35 -z-10" />
            <div className="h-full flex flex-col justify-end">
              <div>
                <span className="px-6 py-2 text-sm border border-primary rounded-full">
                  {category}
                </span>
                <h2 className="capitalize text-2xl font-bold hover:text-primary duration-500 my-4">
                  {title}
                </h2>
                <p className="font-secondary">{desc}</p>
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
          </div>
        );
      })}
    </div>
  );
};
