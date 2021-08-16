import styles from "./profile.module.css";

function Profile(props) {
  return (
    <div className={styles.profile}>
      <div className="profile">
        <div className="description">
          <img
            src={props.avatar}
            alt="Аватар пользователя"
            className="avatar"
          />
          <p>{props.name}</p>
          <p>{props.tag}</p>
          <p>{props.location}</p>
        </div>
        <ul className="stats">
          <li>Followers {props.stats.followers}</li>
          <li>Views {props.stats.views}</li>
          <li>Likes {props.stats.likes}</li>
        </ul>
      </div>
    </div>
  );
}

export default Profile;
