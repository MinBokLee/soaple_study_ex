import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';

// import Library from './chapter03/Library';  
// import Clock from './chapter04/Clock';
// import CommentList from './chapter05/CommentList';
// import NotificationList from './chapter06/NotificationList';  
// import Accommdoate from './chapter07/Accommodate';
// import ConfirmButton from './chapter08/ConfirmButton';
// import ConfirmButton1 from './chapter08/ConfirmButton1';
// import LandinfPage from './chapter09/LandingPage';
// import AttendanceBook from './chapter10/AttendanceBook';
//import SignUp from './chapter11/SignUp';
// import Calculator from './chapter12/Calculator'; 
// import ProfileCard from './chapter13/ProfileCard';
import DarkOrLight from './chapter14/DarkOrLight';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DarkOrLight />
  </React.StrictMode>

);

/*
root.render(
  <React.StrictMode>
    <CommentList />
  </React.StrictMode>

);
*/


/*setInterval(() => { 
  root.render(
    <React.StrictMode>
      <Clock />
    </React.StrictMode>
  );
}, 1000);
*/
// root.render(
//   <React.StrictMode>
//     <Library />
//   </React.StrictMode>
// );   

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
