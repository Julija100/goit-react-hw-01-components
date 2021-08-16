import styles from "./profile.module.css";

function Profile(props) {
  return (
    <div className={styles.profile}>
      <div className="profile">
        <div className="description">
          <img 
            src={props.avatar}
            alt="Аватар пользователя"
            className={styles.avatar}
          />
          <p className={styles.name}>{props.name}</p>
          <p>{props.tag}</p>
          <p>{props.location}</p>
        </div>
        <ul className="stats">
          <li className={styles.list}>Followers {props.stats.followers}</li>
          <li className={styles.list}>Views {props.stats.views}</li>
          <li className={styles.list}>Likes {props.stats.likes}</li>
        </ul>
      </div>
    </div>
  );
}

export default Profile;
