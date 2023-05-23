import React, { useContext } from 'react';
import UserContext from './UserContext';

const Login = ({ users, onLogin }) => {
  const currentUser = useContext(UserContext);

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    const email = event.target.elements.email.value;
    const password = event.target.elements.password.value;
    const user = users.find(user => user.email === email && user.password === password);
    onLogin(user);
  };

  return (
    <>
      {currentUser ? (
        <p>{currentUser.firstName} {currentUser.lastName}</p>
      ) : (//cuda
        <form onSubmit={handleLoginSubmit}>
          <input type="email" name="email" required />
          <input type="password" name="password" required />
          <button type="submit">Login</button> 
        </form>
      )}
    </>
  );
};

export default Login;
