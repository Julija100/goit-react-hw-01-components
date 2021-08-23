import styles from "./App.module.css";
import Description from "./components/profile/Profile";
import user from "./user.json";
import Statistics from "./components/statistics/Statistics";
import statisticalData from "./statistical-data.json";
import FriendList from "./components/friendList/FriendList";
import friends from './friends.json'
import TransactionHistory from "./components/transaction/TransactionHistory";
import transactions from './transactions.json'


function App() {
 
  return (
    <div className={styles.app}>
      <Description
        avatar={user.avatar}
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
