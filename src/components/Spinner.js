import React from 'react';
import './Spinner.css';

const Spinner = () => {
  return (
    <div className='h-screen flex flex-col justify-center items-center space-y-4'>
      <div className='spinner'></div>
      <p className='text-bgDark text-lg font-semibold'>Loading...</p>
    </div>
  );
};

export default Spinner;
