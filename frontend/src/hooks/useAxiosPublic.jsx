import axios from 'axios';

const axiosPublic = axios.create({
  baseURL: 'http://localhost:11011',
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
