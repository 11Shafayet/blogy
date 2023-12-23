import blog1 from '/images/blog1.webp';
import SingleBlogItem from './SingleBlogItem';

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
      {data?.map((item, i) => (
        <SingleBlogItem key={i} item={item} />
      ))}
    </div>
  );
};

export default HomeBlogs;
