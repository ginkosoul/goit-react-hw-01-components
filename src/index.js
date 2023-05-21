import React from 'react';
import ReactDOM from 'react-dom/client';
import user from './user.json';

// import { App } from 'components/App';
// import './index.css';

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
const home = <div className="profile">
<div className="description">
  <img
    src={user.avatar}
    alt="User avatar"
    className="avatar"
  />
  <p className="name">{user.username}</p>
  <p className="tag">{user.tag}</p>
  <p className="location">{user.location}</p>
</div>

<ul className="stats">
  <li>
    <span className="label">Followers</span>
    <span className="quantity">{user.stats.followers}</span>
  </li>
  <li>
    <span className="label">Views</span>
    <span className="quantity">{user.stats.views}</span>
  </li>
  <li>
    <span className="label">Likes</span>
    <span className="quantity">{user.stats.likes}</span>
  </li>
</ul>
</div>
// const div = React.createElement('div',{
//   name:'main',
//   id: 'test-id',
//   className:'test-class',
//   children: ['Hello', ' React', ' from', ' UA']
// })

// console.log(div);
ReactDOM.createRoot(document.getElementById('root')).render(home)