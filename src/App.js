import './App.css';

import IceCreamView from './features/icecream/icecreamView'
import UserView from './features/user/UserView'
import CakeView from './features/cake/CakeView'
function App() {
  return (
    <div className="App">
     <CakeView />
     <IceCreamView />
     <UserView />
    </div>
  );
}

export default App;
