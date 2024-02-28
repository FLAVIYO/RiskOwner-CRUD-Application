import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const EditRiskOwner = () => {
  const { id } = useParams(); // Extract id from URL params
  const [riskOwner, setRiskOwner] = useState(null);
  const [name, setName] = useState('');
  const [title, setTitle] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRiskOwner = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/RiskOwner/${id}`);
        setRiskOwner(response.data);
        setName(response.data.name);
        setTitle(response.data.title);
        setEmail(response.data.email);
        setRole(response.data.role);
      } catch (error) {
        setError(error.message);
      }
    };

    if (id) {
      fetchRiskOwner();
    }
  }, [id]);

  const handleSave = async () => {
    try {
      const response = await axios.put(`http://localhost:3000/RiskOwner/${id}`, {
        name: name,
        title: title,
        email: email,
        role: role
      });

      if (response.status !== 200) {
        throw new Error('Failed to update risk owner');
      }

      // Show window alert after successfully updating the risk owner
      window.alert('Risk owner updated successfully!');

      // Redirect back to dashboard
      navigate('/dashboard');
    } catch (error) {
      console.error('Error updating risk owner:', error);
    }
  };

  if (!riskOwner) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded px-8 py-6">
      <h2 className="text-lg font-bold mb-4">Edit Risk Owner</h2>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Title:</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Email:</label>
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Role:</label>
        <input type="text" value={role} onChange={(e) => setRole(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
      </div>
      <button onClick={handleSave} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Update</button>
    </div>
  );
};

export default EditRiskOwner;
