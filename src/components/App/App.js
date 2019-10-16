import React from 'react';
import Profile from '../Profile';
import Stats from '../Stats';
import FriendList from '../FriendList';
import TransactionHistory from '../TransactionHistory';
import user from '../../Data/user.json';
import friends from '../../Data/friends.json';
import transactions from '../../Data/transactions.json';
import 'normalize.css';

const stats = [
  { id: 'id-1', label: '.docx', percentage: 22 },
  { id: 'id-2', label: '.pdf', percentage: 4 },
  { id: 'id-3', label: '.mp3', percentage: 17 },
  { id: 'id-4', label: '.psd', percentage: 47 },
  { id: 'id-5', label: '.pdf', percentage: 10 },
];

const App = () => (
  <>
    <Profile user={user} />
    <Stats title="Upload stats" stats={stats} />
    <FriendList friends={friends} />
    <TransactionHistory items={transactions} />
  </>
);
export default App;
