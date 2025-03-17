import './App.css';
import SignIn from './components/SignIn';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebase.js';
import Line from './components/Line';

function App() {
  //ログインしてるのかしてないかの情報をuserに入れる
  const [user] = useAuthState(auth);
  return <div className="App">{user ? <Line /> : <SignIn />}</div>;
}

export default App;
