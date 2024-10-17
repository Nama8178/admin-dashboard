import './App.css'
import Maindash from './Components/Maindash/Maindash';
import RightSide from './Components/RightSide/RightSide';
import Sidebar from './Components/Sidebar';

function App() {
  return (
    <div className="App">
        <div className='AppGlass'>
          <Sidebar />
          <Maindash />
          <RightSide />
        </div>
    </div>
  );
}

export default App;
