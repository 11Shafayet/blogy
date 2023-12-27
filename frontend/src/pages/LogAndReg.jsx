import Tab from '../components/Tab';
import Login from '../components/Login';
import Register from '../components/Register';
import useAuth from '../hooks/useAuth';

const HomePage = () => {
  const { activeTab, setActiveTab } = useAuth();

  return (
    <section className="bg-gradient-to-r from-cyan-500 to-blue-500 min-h-screen flex justify-center items-center">
      <div className="container mx-auto px-4">
        <div className="shadow-xl p-6 md:p-12 rounded-xl min-h-[600px] max-w-[600px] bg-white mx-auto ">
          <Tab activeTab={activeTab} setActiveTab={setActiveTab} />
          {activeTab ? <Login /> : <Register />}
        </div>
      </div>
    </section>
  );
};

export default HomePage;
