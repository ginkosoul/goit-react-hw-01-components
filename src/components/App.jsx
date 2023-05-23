import user from 'user.json';
import data from 'data.json';
import friends from 'friends.json'
import transactions from 'transactions.json';

import { Profile } from "./Profile/Profile";
import { Statistics } from './Statistics/Statistics';
import FriendList from './FriendsList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

export const App = () => {
  return (
    <div
      style={{
        // height: '100vh',
        display: 'flex',
        gap: '40px',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        padding: '20px'
      }}
    >
      <Profile {...user}/>
      <Statistics data={data}/>
      <FriendList friends={friends}/>
      <TransactionHistory items={transactions} />
    </div>
  );
};

