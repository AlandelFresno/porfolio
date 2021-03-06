import React from 'react';
import Presentation from './components/Presentation';
import Welcome from './components/Welcome';

const MainPage = () => {
  return (
    <div className='h-screen w-screen text-white'>
        <Welcome />
        <div className='flex flex-col '>
          <div className='flex justify-center'>
            <Presentation />    
          </div> 
          <div className='flex justify-center'>
            <h3> Projects </h3>    
          </div> 
          <div className='flex justify-center'>
            <h3> Skills </h3>    
          </div> 
        </div>
        <div className='flex justify-center'>
          <h4> About </h4>
        </div>
        <footer className='flex justify-end pr-4'> copyright 2022 </footer>
    </div>
  );
};

export default MainPage;