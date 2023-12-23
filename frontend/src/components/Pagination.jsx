import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const Pagination = () => {
  return (
    <div className="flex gap-x-1">
      <div className="bg-primary text-white w-11 h-11 flex justify-center items-center cursor-pointer hover:bg-opacity-90">
        <FaArrowLeft />
      </div>
      <div className="bg-gray-200 hover:bg-primary hover:text-white w-11 h-11 flex justify-center items-center font-bold text-lg cursor-pointer">
        1
      </div>
      <div className="bg-gray-200 hover:bg-primary hover:text-white w-11 h-11 flex justify-center items-center font-bold text-lg cursor-pointer">
        2
      </div>
      <div className="bg-gray-200 hover:bg-primary hover:text-white w-11 h-11 flex justify-center items-center font-bold text-lg cursor-pointer">
        3
      </div>
      <div className="bg-primary text-white w-11 h-11 flex justify-center items-center cursor-pointer hover:bg-opacity-90">
        <FaArrowRight />
      </div>
    </div>
  );
};

export default Pagination;
