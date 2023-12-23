import { Hero } from '../components/Hero';
import HomeBlogs from '../components/HomeBlogs';
import HomeSidebar from '../components/HomeSidebar';

const Home = () => {
  return (
    <div>
      <Hero />
      <div className="container px-4 mx-auto my-6 md:my-20">
        {/* blogs */}
        <div className="flex gap-x-5">
          <HomeBlogs />

          <HomeSidebar />
        </div>
      </div>
    </div>
  );
};

export default Home;
