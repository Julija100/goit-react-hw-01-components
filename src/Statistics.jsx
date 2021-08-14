const Statistics = ({ stats }) => {
  return (
    <section class="statistics">
      <h2 class="title">Upload stats</h2>
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
