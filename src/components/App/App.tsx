import './App.css';
import Navbar from '../features/Header/Navbar';
import SideBar from '../features/SideBar/SideBar';
import FindAdress from '../features/Search/FindAdress';
import { Route, Routes } from 'react-router-dom';
import NewsPage from '../features/News/NewsPage';

function App() {
  return (
    <>
      <Navbar />
      <div className="main">
          <SideBar />
          <Routes>
            <Route path="/" element={<NewsPage />} />
            <Route path="/address" element={<FindAdress />} />
          </Routes>
      </div>
    </>
  );
}

export default App;
