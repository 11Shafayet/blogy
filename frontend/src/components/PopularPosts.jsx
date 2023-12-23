import blog1 from '/images/blog1.webp';

const popularPostsData = [
  {
    img: blog1,
    title: 'Space the final Frontier',
    timestamp: '2 Hours',
  },
  {
    img: blog1,
    title: 'Space the final Frontier',
    timestamp: '2 Hours',
  },
  {
    img: blog1,
    title: 'Space the final Frontier',
    timestamp: '2 Hours',
  },
  {
    img: blog1,
    title: 'Space the final Frontier',
    timestamp: '2 Hours',
  },
];

const PopularPosts = () => {
  return (
    <div className="flex flex-col gap-y-3">
      <h4 className="text-xl font-bold border-l-4 border-primary pl-3 mb-4">
        Popular Posts
      </h4>
      {popularPostsData.map((item, i) => (
        <div className="flex items-center gap-x-3" key={i}>
          <img src={item.img} alt="" className="h-16 w-24 object-cover" />
          <div>
            <p className="font-medium text-sm opacity-75">{item.title}</p>
            <p className="text-[12px]">{item.timestamp} Ago</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PopularPosts;
