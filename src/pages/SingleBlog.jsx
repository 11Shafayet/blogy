import banner1 from '/images/banner1.webp';
import banner2 from '/images/banner2.webp';

const SingleBlog = () => {
  return (
    <div>
      <div
        className="h-[60vh] bg-cover bg-center bg-no-repeat flex justify-center items-center"
        style={{ backgroundImage: `url(${banner1})` }}
      >
        <div className="max-w-[600px] text-center">
          <h4 className="text-white text-2xl md:text-4xl lg:text-5xl font-medium capitalize">
            This is the title
          </h4>
        </div>
      </div>

      <div className="container mx-auto px-4 my-6 md:my-12">
        <div className="max-w-[900px] mx-auto ">
          <img
            src={banner2}
            alt=""
            className="w-full h-auto object-cover text-center"
          />
          <h4 className="text-2xl md:text-4xl font-medium capitalize my-4">
            This is the title
          </h4>
          <div className="flex justify-between items-center gap-x-4 my-4">
            <p className="bg-primary bg-opacity-10 px-5 pt-1.5 pb-2 font-medium rounded-full">
              Category
            </p>
            <p className="font-medium rounded-full">10/12/2000</p>
          </div>
          <p className="my-8 opacity-75 leading-loose">
            MCSE boot camps have its supporters and its detractors. Some people
            do not understand why you should have to spend money on boot camp
            when you can get the MCSE study materials yourself at a fraction of
            the camp price. However, who has the willpower MCSE boot camps have
            its supporters and its detractors. Some people do not understand why
            you should have to spend money on boot camp when you can get the
            MCSE study materials yourself at a fraction of the camp price.
            However, who has the willpower to actually sit through a
            self-imposed MCSE training. who has the willpower to actually sit
            through a self-imposed MCSE training.
          </p>

          <div className="flex items-center gap-x-4 my-4">
            <div className="bg-primary bg-opacity-10 px-5 pt-1.5 pb-2 font-medium rounded-full cursor-pointer hover:bg-opacity-100 duration-300 hover:text-white">
              Prev Post
            </div>
            <div className="bg-primary bg-opacity-10 px-5 pt-1.5 pb-2 font-medium rounded-full cursor-pointer hover:bg-opacity-100 duration-300 hover:text-white">
              Next Post
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
