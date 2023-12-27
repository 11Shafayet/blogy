import { Table } from 'flowbite-react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import Loader from '../../components/Loader';
import axios from 'axios';
import { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import { ToastContainer, toast } from 'react-toastify';

const AllBlogs = () => {
  const [loading, setLoading] = useState(false);
  const [adminId, setAdminId] = useState();
  const { user } = useAuth();
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [roles, setRoles] = useState([]);

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem('userInfo'));
    setAdminId(loggedInUser?._id);
  }, [user]);

  const fetchData = async () => {
    if (!adminId) {
      return; // Skip the request if adminId is undefined
    }
    setLoading(true);

    try {
      const response = await axios.get(`http://localhost:5000/user/${adminId}`);

      const data = response.data;
      setData(data);
    } catch (error) {
      console.error('Axios error', error);
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [adminId]);

  const handleDelete = async (userId) => {
    try {
      const response = await axios.delete(
        `http://localhost:5000/user/${userId}`
      );

      console.log(response);
    } catch (error) {
      console.error('Axios error', error);
      setError(error);
    } finally {
      setLoading(false);
      fetchData();
    }
  };

  const handleUpdate = async (e, userId, index) => {
    e.preventDefault();
    const updatedRole = roles[index];

    try {
      setLoading(true);

      const response = await axios.patch(`http://localhost:5000/user`, {
        userId,
        updatedRole,
      });
      if (response) {
        toast.success('Role edited successfully!');
      } else {
        toast.success('Faile to update role!');
      }
    } catch (error) {
      console.error('Axios error', error);
      setError(error);
    } finally {
      setLoading(false);
      fetchData();
    }

    console.log(updatedRole, userId);
  };
  useEffect(() => {
    // Initialize the roles array with the initial roles from data
    if (data) {
      const initialRoles = data.map((item) => item.role);
      setRoles(initialRoles);
    }
  }, [data]);

  return (
    <div className="my-12 overflow-x-auto h-[700px] md:h-auto">
      <div className="container px-4 mx-auto">
        <h2 className="text-center font-bold text-3xl md:text-5xl mb-12">
          Manage Users
        </h2>
        {loading ? (
          <Loader />
        ) : (
          <>
            {data?.length === 0 ? (
              <p className="text-center text-xl font-semibold">No Data Found</p>
            ) : (
              <Table striped className="relative">
                <Table.Head>
                  <Table.HeadCell className="text-start">
                    Thumbnail
                  </Table.HeadCell>
                  <Table.HeadCell className="text-start">Name</Table.HeadCell>
                  <Table.HeadCell className="text-start">Email</Table.HeadCell>
                  <Table.HeadCell className="text-start">Role</Table.HeadCell>

                  <Table.HeadCell className="text-start">
                    Edit Role
                  </Table.HeadCell>
                  <Table.HeadCell className="text-start">Delete</Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                  {data?.map((item, i) => (
                    <Table.Row
                      className={`${
                        i % 2 === 0 ? 'bg-gray-100' : 'bg-white'
                      }  `}
                      key={i}
                    >
                      <Table.Cell>
                        <img
                          src={item.pic}
                          alt=""
                          className="w-16 h-16 object-cover rounded-full"
                        />
                      </Table.Cell>
                      <Table.Cell className="whitespace-wrap font-bold text-gray-900 ">
                        {item.name}
                      </Table.Cell>
                      <Table.Cell>{item.email}</Table.Cell>
                      <Table.Cell>{item.role}</Table.Cell>
                      <Table.Cell>
                        <form
                          action=""
                          onSubmit={(e) => handleUpdate(e, item._id, i)}
                        >
                          <select
                            name="role"
                            id="role"
                            value={roles[i]}
                            onChange={(e) => {
                              const updatedRoles = [...roles];
                              updatedRoles[i] = e.target.value;
                              setRoles(updatedRoles);
                            }}
                            className="bg-white p-2.5 px-4 font-semibold"
                            required
                          >
                            <option value="pending">Pending</option>
                            <option value="user">User</option>
                            <option value="admin">Admin</option>
                          </select>
                          <button type="submit">
                            <FaEdit
                              size={20}
                              className="text-teal-500 cursor-pointer ml-3"
                            />
                          </button>
                        </form>
                      </Table.Cell>
                      <Table.Cell>
                        <FaTrash
                          className="text-red-500 cursor-pointer"
                          onClick={() => handleDelete(item._id)}
                        />
                      </Table.Cell>
                    </Table.Row>
                  ))}
                </Table.Body>
              </Table>
            )}
            <ToastContainer
              position="bottom-center"
              autoClose={1000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
            />
          </>
        )}
      </div>
    </div>
  );
};

export default AllBlogs;
