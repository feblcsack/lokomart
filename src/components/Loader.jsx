import React from 'react';
import { ClipLoader } from 'react-spinners';

const Loader = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <ClipLoader color="#3498db" size={50} />
    </div>
  );
};

export default Loader;
