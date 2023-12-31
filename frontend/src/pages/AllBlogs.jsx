import Sidebar from '../components/Sidebar';
import SingleBlogItem from '../components/SingleBlogItem';
// import Pagination from '../components/Pagination';
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

const AllBlogs = () => {
  return (
    <div className="container px-4 mx-auto my-6 md:my-20">
      {/* blogs */}
      <div className="flex gap-x-5">
        <Sidebar />

        <div>
          {data?.map((item, i) => (
            <SingleBlogItem key={i} item={item} />
          ))}

          <div className="mt-8">{/* <Pagination /> */}</div>
        </div>
      </div>
    </div>
  );
};

export default AllBlogs;
