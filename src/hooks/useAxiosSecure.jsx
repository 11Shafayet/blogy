import axios from 'axios';

const axiosSecure = axios.create({
  baseURL: 'https://saimums-backend.vercel.app',
});

const useAxiosSecure = () => {
  return axiosSecure;
};

export default useAxiosSecure;
