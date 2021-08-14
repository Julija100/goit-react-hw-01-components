const Statistics = ({ stats, title }) => {
  return (
    <section className="statistics">
      {title && <h2 className="title">{title}</h2>}
      <ul>
        {stats.map((statisticalData) => (
          <li key={statisticalData.id}>
            {statisticalData.label} {statisticalData.percentage} %
          </li>
        ))}
      </ul>
    </section>
  );
};


export default Statistics;
