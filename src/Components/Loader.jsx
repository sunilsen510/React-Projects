import React from 'react';
import LoaderImg from '../assets/loader.gif';
const Loader = () => {
  return (
   <div className="fixed top-0 left-0 w-full h-full inset-0 z-[100] bg-white flex items-center justify-center  animate-pulse">
      <img src={LoaderImg} alt="loader" className="w-[100px] h-[100px]" />
    </div>
  );
};

export default Loader;