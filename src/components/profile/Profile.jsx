import styles from "./profile.module.css";
import PropTypes from 'prop-types'

const Profile = ({ avatar, name, tag, location, stats }) => {
  
  return (
    <div className={styles.profile}>
      <div className="profile">
        <div className="description">
          <img
            src={avatar}
            alt="Аватар пользователя"
            className={styles.avatar}
          />
          <p className={styles.name}>{name}</p>
          <p>@{tag}</p>
          <p>{location}</p>
        </div>
        <ul className="stats">
          <li className={styles.statsItem}>
            <span className={styles.label}>Followers</span>
            <span className={styles.quantity}>{stats.followers}</span>
          </li>
          <li className={styles.statsItem}>
            <span className={styles.label}>Views</span>
            <span className={styles.quantity}>{stats.views}</span>
          </li>
          <li className={styles.statsItem}>
            <span className={styles.label}>Likes</span>
            <span className={styles.quantity}>{stats.likes}</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
  
Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};


export default Profile;
