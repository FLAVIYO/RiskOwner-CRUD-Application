import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { useParams } from 'react-router-dom'; // Import useParams hook

const RiskOwnerDetails = () => {
  const { id } = useParams(); // Extract id from URL params
  const [riskOwner, setRiskOwner] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRiskOwner = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/RiskOwner/${id}`);
        setRiskOwner(response.data);
      } catch (error) {
        setError(error.message);
      }
    };

    if (id) {
      fetchRiskOwner();
    }
  }, [id]);

  if (!id) {
    return <div>No risk owner ID provided</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded px-8 py-6">
    {riskOwner && (
      <div>
        <h2 className="text-lg font-bold mb-4">Risk Owner Details</h2>
        <p className="mb-2"><strong className="font-semibold">Name:</strong> {riskOwner.name}</p>
        <p className="mb-2"><strong className="font-semibold">Title:</strong> {riskOwner.title}</p>
        <p className="mb-2"><strong className="font-semibold">Email:</strong> {riskOwner.email}</p>
        <p className="mb-2"><strong className="font-semibold">Role:</strong> {riskOwner.role}</p>
      </div>
    )}
  </div>
  );
};

RiskOwnerDetails.propTypes = {
  id: PropTypes.string,
};

export default RiskOwnerDetails;
