import styles from "./friendList.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className={styles.friendList}>
      <li className="item">
        <span className="status">{isOnline}</span>
        <img className="avatar" src={avatar} alt="" width="48" />
        <p className="name">{name}</p>
      </li>
    </div>
  );
};

const FriendList = ({ friends }) => {
  return (
    // <div className={styles.friendList}>
      <ul className="friend-list">
        {friends.map((friend) => (
          <FriendListItem
            isOnline={friend.isOnline}
            avatar={friend.avatar}
            name={friend.name}
          />
        ))}
      </ul>
    // </div>
  );
};

export default FriendList;
