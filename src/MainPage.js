import React from 'react';
import Welcome from './components/Welcome';

const MainPage = () => {
  return (
    <div className='h-screen w-screen bg-gray-900 text-white'>
        <Welcome />
        <div className='flex justify-center'>
          <h4> Content </h4>
        </div>
        <footer className='flex justify-end pr-4'> copyright 2022 </footer>
    </div>
  );
};

export default MainPage;