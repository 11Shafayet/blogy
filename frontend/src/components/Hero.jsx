import { useState } from 'react';
import { FaCalendarAlt, FaComment } from 'react-icons/fa';
import hero1 from '/images/hero1.webp';
import hero2 from '/images/hero5.jpg';
import hero3 from '/images/hero3.jpg';
import hero4 from '/images/hero4.jpg';
import hero5 from '/images/hero2.jpg';
import hero6 from '/images/hero6.jpg';
import Loader from './Loader';

// Import Swiper styles
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, EffectCoverflow } from 'swiper/modules';

const data = [
  {
    img: hero1,
    category: 'gadget',
    title: 'New Protect: 2nd gen smoke + CO Alarm',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam magnam dolorem culpa voluptate qui nam, delectus,',
    date: 'March 14, 2018',
    commentCount: '05',
  },
  {
    img: hero2,
    category: 'travel',
    title: 'New Protect: 2nd gen smoke + CO Alarm',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam magnam dolorem culpa voluptate qui nam, delectus,',
    date: 'March 14, 2018',
    commentCount: '05',
  },
  {
    img: hero3,
    category: 'technology',
    title: 'New Protect: 2nd gen smoke + CO Alarm',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam magnam dolorem culpa voluptate qui nam, delectus,',
    date: 'March 14, 2018',
    commentCount: '05',
  },
  {
    img: hero4,
    category: 'gadget',
    title: 'New Protect: 2nd gen smoke + CO Alarm',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam magnam dolorem culpa voluptate qui nam, delectus,',
    date: 'March 14, 2018',
    commentCount: '05',
  },
  {
    img: hero5,
    category: 'travel',
    title: 'New Protect: 2nd gen smoke + CO Alarm',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam magnam dolorem culpa voluptate qui nam, delectus,',
    date: 'March 14, 2018',
    commentCount: '05',
  },
  {
    img: hero6,
    category: 'technology',
    title: 'New Protect: 2nd gen smoke + CO Alarm',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam magnam dolorem culpa voluptate qui nam, delectus,',
    date: 'March 14, 2018',
    commentCount: '05',
  },
];

export const Hero = () => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="w-full min-h-[600px] overflow-hidden">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {data?.length === 0 ? (
            <p className="text-lg font-medium">No Product Found!</p>
          ) : (
            <div>
              <Swiper
                grabCursor={true}
                centeredSlides={false}
                spaceBetween={0}
                breakpoints={{
                  360: {
                    slidesPerView: 1,
                  },
                  640: {
                    slidesPerView: 2,
                  },
                  768: {
                    slidesPerView: 3,
                  },
                  1068: {
                    slidesPerView: 4,
                  },
                }}
                modules={[EffectCoverflow, Autoplay]}
                className="mySwiper text-center"
              >
                {data?.slice(0, 10)?.map((item, i) => (
                  <SwiperSlide key={i} className="h-[600px]">
                    <div className="px-4 lg:px-8 py-6 text-white relative overflow-hidden z-10 h-full">
                      <img
                        src={item.img}
                        alt=""
                        className="absolute top-0 left-0 right-0 bottom-0 h-full w-full object-cover -z-10"
                      />
                      <div className="absolute top-0 left-0 right-0 bottom-0 bg-gray-600 bg-opacity-35 -z-10" />
                      <div className="h-full flex flex-col justify-end text-start">
                        <div>
                          <span className="px-6 py-2 text-sm border border-primary rounded-full capitalize">
                            {item.category}
                          </span>
                          <h2 className="capitalize text-2xl font-bold hover:text-primary duration-500 my-4">
                            {item.title}
                          </h2>
                          <p className="font-secondary">{item.desc}</p>
                          <div className="flex gap-x-5 mt-4">
                            <h5 className="text-sm flex items-center gap-x-2">
                              <FaCalendarAlt /> {item.date}
                            </h5>
                            <h5 className="text-sm flex items-center gap-x-2">
                              <FaComment /> {item.commentCount}
                            </h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          )}
        </>
      )}
    </div>
  );
};
{
  /* products */
}
