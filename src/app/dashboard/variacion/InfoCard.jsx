import React from 'react';

const InfoCard = ({ title, number }) => {
  const cardStyle = {
    padding: '20px',
    margin: '20px',
    textAlign: 'center',
    color: '#fff',
    backgroundColor: '#007bff', // You can choose any color here
    borderRadius: '5px'
  };

  return (
    <div style={cardStyle}>
      <h2>{title}</h2>
      <p>{number}</p>
    </div>
  );
};

export default InfoCard;