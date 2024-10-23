import './App.css';
import Api from './component/api/Api';
import Clock from './component/clock/HiddenWord';
import HiddenWord from './component/hiddenWord/Clock';

function App() {

  return (
  <div>

       <Clock/>
       <HiddenWord/>
        <Api/>
  </div>
  );
}

export default App;
