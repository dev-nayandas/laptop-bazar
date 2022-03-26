
import './App.css';
import Bonus from './Components/Bonus/Bonus';
import Header from './Components/Header/Header';
import Product from './Components/Product/Product';
import Shop from './Components/Shop/Shop';

function App() {
  return (
    <div className="App">
      <div>
      <Header></Header>
      <Shop></Shop>
      
      </div>
      <div>
      <Bonus></Bonus> 
      </div>
    </div>

  );
}

export default App;
