import React from 'react';
import MainRoutes from './MainRoutes';
import Navbar from './components/Navbar/Navbar';
import AuthContextProvider from './contexts/AuthContextProvider';


function App() {
  return (
    <>
    <AuthContextProvider>
      <Navbar />
      <MainRoutes />      
    </AuthContextProvider>
    </>
  );
}

export default App;
