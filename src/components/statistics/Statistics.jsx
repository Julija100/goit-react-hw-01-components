import styles from './statistics.module.css'

const Statistics = ({ stats, title }) => {
  return (
    <section className={styles.statistics}>
      {title && <h2 className={styles.title}>{title}</h2>}
      <ul className={styles.statList}>
        {stats.map((statisticalData) => (
          <li className={styles.item} key={statisticalData.id}>
            {statisticalData.label} {statisticalData.percentage} %
          </li>
        ))}
      </ul>
    </section>
  );
};


export default Statistics;
