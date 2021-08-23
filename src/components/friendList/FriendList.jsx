import styles from "./friendList.module.css";
import PropTypes from 'prop-types'

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className={styles.friendList}>
      <li className={styles.item}>
        <span
          className={isOnline ? `${styles.isOnline}` : `${styles.isOffline}`}
        ></span>
        <img
          className="avatar"
          src={avatar}
          alt={`${name} avatar`}
          width="48"
        />
        <p className="name">{name}</p>
      </li>
    </div>
  );
};

const FriendList = ({ friends }) => {
  return (
    <ul className="friend-list">
      {friends.map(({ id, avatar, name, isOnline }) => (
        <FriendListItem
          key={id}
          isOnline={isOnline}
          avatar={avatar}
          name={name}
        />
      ))}
    </ul>
  );
};


FriendList.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};

export default FriendList;
