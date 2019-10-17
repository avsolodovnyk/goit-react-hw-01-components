import React from 'react';
import T from 'prop-types';
import styles from './FriendListItem.module.css';

const FriendListItem = ({ isOnline, avatar, name }) => {
  return (
    <>
      <span className={isOnline ? styles.status : styles.statusOnline} />
      <img className={styles.avatar} src={avatar} alt={name} width="48" />
      <p className={styles.name}>{name}</p>
    </>
  );
};

FriendListItem.propTypes = {
  isOnline: T.bool.isRequired,
  avatar: T.string.isRequired,
  name: T.string.isRequired,
};
export default FriendListItem;
