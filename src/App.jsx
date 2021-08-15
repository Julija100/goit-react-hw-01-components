import "./App.css";
import Description from "./Profile";
import user from "./user.json";
import Statistics from "./Statistics";
import statisticalData from "./statistical-data.json";
import FriendList from "./FriendList";
import friends from './friends.json'
import TransactionHistory from "./TransactionHistory";
import transactions from './transactions.json'

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
      <Statistics stats={statisticalData} title="Upload stats" />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
}

export default App;
