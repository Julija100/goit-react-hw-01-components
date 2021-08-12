
import './App.css';
import Product from './Product';


const cityes = [{ id: 1, value: 'Minsk' }, { id: 2, value: 'Moscow' }, { id: 3, value: 'Riga' }];
function App() {
  return (
    <div className="App">
      <Product title='Phone' price={20} shops={cityes}/>
      <Product title= 'Book' price= {10} shops={cityes}/>
      <Product />
    </div>
  );
}

export default App; 
