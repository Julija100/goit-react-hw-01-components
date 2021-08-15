const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className="item">
      <span className="status">{isOnline}</span>
      <img className="avatar" src={avatar} alt="" width="48" />
      <p className="name">{name}</p>
    </li>
  );
};

const FriendList = ({ friends }) => {
  return (
    <ul className="friend-list">
      {friends.map((friend) => (
          <FriendListItem
              isOnline={friend.isOnline}
              avatar={friend.avatar}
              name={friend.name}/>
      ))}
    </ul>
  );
};

export default FriendList;
