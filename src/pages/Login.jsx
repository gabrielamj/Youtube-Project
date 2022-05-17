import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../redux/loginService';
import { useNavigate } from 'react-router-dom';
import styles from './login.module.scss'

const Login = (props) => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { user } = useSelector((state) => state.login);
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login({ username, password }));
  };
  const userHandler = (username) => {
    setUsername(username.target.value);
  };
  const passwordHandler = (password) => {
    setPassword(password.target.value);
  };
  const navigate = useNavigate();
  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, []);
  const checkAuthUser = () => {
    if (user) {
      navigate('/');
    }
    return false;
  };

  return (
    <div className={styles.container}>
      {checkAuthUser()}
      
      <form onSubmit={submitHandler} className={styles.form}>
        <h2>Login</h2>
        <label for="username"> Username: </label>
        <input id="username" onChange={userHandler} type="text" name="username" />
        <label for="password"> Password: </label>
        <input id="password" onChange={passwordHandler} type="password" name="password" />
        <input type="submit"  className={styles.button} value="Submit" />
      </form>
    </div>
  );
};

Login.propTypes = {};

export default Login;
