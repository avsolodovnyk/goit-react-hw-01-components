import React from 'react';
import T from 'prop-types';
import styles from './Stats.module.css';

const genColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i += 1) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};
const Stats = ({ title, stats }) => (
  <section className={styles.statsSection}>
    <h2 className={styles.title}>{title}</h2>
    <ul className={styles.statList}>
      {stats.map(item => (
        <li
          key={item.id}
          className={styles.item}
          style={{ backgroundColor: genColor() }}
        >
          <span className={styles.label}>{item.label}</span>
          <span className={styles.percentage}>{item.percentage}%</span>
        </li>
      ))}
    </ul>
  </section>
);
Stats.propTypes = {
  title: T.string.isRequired,
  stats: T.arrayOf(
    T.exact({
      id: T.string.isRequired,
      label: T.string.isRequired,
      percentage: T.number.isRequired,
    }),
  ).isRequired,
};
export default Stats;
