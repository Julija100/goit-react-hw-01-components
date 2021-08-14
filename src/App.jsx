
import './App.css';
import Description from './Profile';
import user from './user.json'
import Statistics from './Statistics';
import statisticalData from './statistical-data.json'



function App() {
  return (
    <div className="App">
      <Description
        img={user.avatar}
        name={user.name}
        tag={user.tag}
        location={user.location}
        stats={user.stats}
      />
      <Statistics
        stats={statisticalData} />
    </div>
  );
}

export default App; 
