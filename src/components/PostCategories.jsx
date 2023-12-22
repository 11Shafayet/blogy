const categories = [
  {
    category: 'Gadget',
    post: '05',
  },
  {
    category: 'Technology',
    post: '05',
  },
  {
    category: 'Lifestyle',
    post: '05',
  },
  {
    category: 'Fashion',
    post: '05',
  },
  {
    category: 'Art',
    post: '05',
  },
  {
    category: 'Adventure',
    post: '05',
  },
];

const PostCategories = () => {
  return (
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
  );
};

export default PostCategories;
