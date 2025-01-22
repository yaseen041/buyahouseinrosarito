import React from 'react';

const NotFound = ({ message = "" }) => {
  return (
    <div className="no-results text-center">
      <h4>No results found</h4>
      <p>{message}</p>
    </div>
  );
};

export default NotFound;
