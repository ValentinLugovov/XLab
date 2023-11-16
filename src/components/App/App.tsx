import './App.css';
import Navbar from '../features/Header/Navbar';
import SideBar from '../features/SideBar/SideBar';
import FindAdress from '../features/Search/FindAdress';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar />
      <div className="main">
        <SideBar />
        <Routes>
          <Route path="/" element={<FindAdress />} />
          <Route path="/address" element={<FindAdress />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
