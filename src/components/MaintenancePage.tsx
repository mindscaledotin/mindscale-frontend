import React from 'react';
import Navbar from './navbar';


import SendButton from './SendButton';

const MaintenancePage: React.FC = () => {
  return (
    <div className="min-h-screen font-lato bg-[linear-gradient(252.82deg,_#000000_0%,_#06257F_120.75%)]">
      <Navbar />
      
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-160px)]">
        <h1 className="text-4xl md:text-6xl font-bold text-center text-white">
          This Page is Under Maintenance
        </h1>
      </div>
      
    
      <div className="fixed bottom-8 left-0 right-0 flex justify-center">
        <SendButton text="Lets connect" />


      </div>
    </div>
  );
};

export default MaintenancePage;