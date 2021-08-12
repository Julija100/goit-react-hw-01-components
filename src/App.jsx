
import './App.css';
import Profile from './Profile';


const cityes = [{ id: 1, value: 'Minsk' }, { id: 2, value: 'Moscow' }, { id: 3, value: 'Riga' }];
function App() {
  return (
    <div className="App">
      <Profile title='Phone' price={20} shops={cityes}/>
      <Profile title= 'Book' price= {10} shops={cityes}/>
      <Profile />
    </div>
  );
}

export default App; 
