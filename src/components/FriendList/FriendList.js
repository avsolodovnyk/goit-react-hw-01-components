import React from 'react';
import T from 'prop-types';
import FriendListItem from '../FriendListItem';
import styles from './FriendList.module.css';

const FriendList = ({ friends }) => (
  <ul className={styles.friendlist}>
    {friends.map(({ id, isOnline, avatar, name }) => (
      <li className={styles.item} key={id.toString()}>
        <FriendListItem isOnline={isOnline} avatar={avatar} name={name} />
      </li>
    ))}
  </ul>
);

FriendList.propTypes = {
  friends: T.arrayOf(
    T.exact({
      id: T.number.isRequired,
      isOnline: T.bool.isRequired,
      avatar: T.string.isRequired,
      name: T.string.isRequired,
    }),
  ).isRequired,
};
export default FriendList;
