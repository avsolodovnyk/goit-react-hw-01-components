import React from 'react';
import T from 'prop-types';
import styles from './FriendListItem.module.css';

const FriendListItem = ({ friends }) =>
  friends.map(friend => (
    <li className={styles.item} key={friend.id.toString()}>
      <span className={friend.isOnline ? styles.status : styles.statusOnline}>
        {friend.isOnline}
      </span>
      <img
        className={styles.avatar}
        src={friend.avatar}
        alt={friend.name}
        width="48"
      />
      <p className={styles.name}>{friend.name}</p>
    </li>
  ));

FriendListItem.propTypes = {
  friends: T.arrayOf(
    T.exact({
      id: T.number.isRequired,
      isOnline: T.bool.isRequired,
      avatar: T.string.isRequired,
      name: T.string.isRequired,
    }),
  ).isRequired,
};
export default FriendListItem;
