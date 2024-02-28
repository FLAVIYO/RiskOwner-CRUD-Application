import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Dashboard = () => {
  const [riskOwnerData, setRiskOwnerData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/RiskOwner/')
      .then(response => setRiskOwnerData(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleDeleteRiskOwner = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this risk owner?");
    if (!confirmDelete) {
      return;
    }
    try {
      await axios.delete(`http://localhost:3000/RiskOwner/${id}`);
      setRiskOwnerData(prevData => prevData.filter(owner => owner.id !== id));
    } catch (error) {
      console.error('Error deleting risk owner:', error);
    }
  };

  return (
    <div className="container mx-auto">
      <div className="flex items-center justify-between mt-10">
        <h1 className="text-4xl font-bold">
          <span className="border-l-2 border-green-500 h-14 pl-2  text-gray-400 font-normal">Risk Owner</span>
        </h1>
        <Link to="/addRiskOwner">
          <button className="px-4 py-2 bg-blue-500 text-white hover:bg-blue-400">Add Risk Owner</button>
        </Link>
      </div>

      <div className="overflow-x-auto mt-10 shadow-md">
        <table className="w-full border-collapse shadow-md bg-gray-100">
          <thead>
            <tr className="text-lg font-semibold bg-gray-200">
              <th className="px-4 py-2 border-b border-gray-300 text-left text-gray-400 font-normal">Name</th>
              <th className="px-4 py-2 border-b border-gray-300 text-left  text-gray-400 font-normal">Title</th>
              <th className="px-4 py-2 border-b border-gray-300 text-left  text-gray-400 font-normal">Email</th>
              <th className="px-4 py-2 border-b border-gray-300 text-left  text-gray-400 font-normal">Role</th>
              <th className="px-4 py-2 border-b border-gray-300 text-left  text-gray-400 font-normal"></th>
            </tr>
          </thead>
          <tbody>
            {riskOwnerData.map((owner, index) => (
              <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-100"}>
                <td className="px-4 py-2  text-black-400 font-normal text-sm">{owner.name}</td>
                <td className="px-4 py-2  text-gray-400 font-normal text-sm">{owner.title}</td>
                <td className="px-4 py-2  text-gray-400 font-normal text-sm">{owner.email}</td>
                <td className="px-4 py-  text-gray-400 font-normal2 text-sm">{owner.role}</td>
                <td className="px-4 py-2">
                  <div className="flex">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2" style={{ color: 'red' }} onClick={() => handleDeleteRiskOwner(owner.id)} >
                      <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                    </svg>
                    <Link to={`/editRiskOwner/${owner.id}`}>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2" style={{ color: 'blue' }}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
                      </svg>
                    </Link>
                    <Link to={`/viewRiskOwner/${owner.id}`}>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6" style={{ color: 'green' }}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                      </svg>
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
