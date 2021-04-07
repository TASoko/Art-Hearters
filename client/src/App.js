import logo from './logo.svg';
import './App.css';

function App() {
  const [registerUsername, setRegisterUsername] = useState("")
  const [registeredPassword, setRegisteredPassword] = useState('');
  const [loginUsername, setLoginUsername] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  const register = () => {};
  const login = () => {};
  const getUser = () => {};

  return (
    <div className="App">
      <div>
        <h1>Register</h1>
        <input placeholder="username" onChange={e => setRegisterUsername(e.target.value)}/>
        <input placeholder="password" onChange={e => setRegisterPassword(e.target.value)}/>
        <button onClick={register}>Submit</button>
      </div>

      <div>
        <h1>Login</h1>
        <input placeholder="username" onChange={e => setLoginUsername(e.target.value)}/>
        <input placeholder="password" onChange={e => setLoginPassword(e.target.value)}/>
        <button onClick={login}>Submit</button>
      </div>

      <div>
        <h1>Get User</h1>
        <button onClick={getUser}>Submit</button>
      </div>

    </div>
  );
}

export default App;
