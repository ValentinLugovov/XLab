import './App.css';
import Navbar from '../features/Header/Navbar';
import SideBar from '../features/SideBar/SideBar';
import FindAdress from '../features/Search/FindAdress';

function App() {
  return (
    <>
      <Navbar />
      <div className='main'>
        <SideBar />
        <FindAdress />
      </div>
    </>
  );
}

export default App;
