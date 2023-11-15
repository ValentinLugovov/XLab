import { Route, Router, Routes } from 'react-router-dom';

import './App.css';
import Navbar from '../features/Header/Navbar';
// import MainPage from '../features/Main/MainPage';
import SideBar from '../features/SideBar/SideBar';

function App() {
  return (
    <>
      <Navbar />
      <SideBar />
    </>
  );
}

export default App;
