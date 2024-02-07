import React from 'react';

export default function InfoCard ( props ){
  const cardStyle = {
    padding: '20px',
    margin: '20px',
    textAlign: 'center',
    color: '#fff',
    backgroundColor: '#007bff', // You can choose any color here
    borderRadius: '5px'
  };
console.log(props, props.title, props.number)
  return (
    <div style={cardStyle}>
      <h2>{props.title}</h2>
      <p>{props.number}</p>
    </div>
  );
};
