import './App.css';
import { Switch, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import Signup from './components/Signup';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
    <Switch>
          <Route exact path="/" component={Homepage}/>
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/login" component={Login} />
    </Switch>
    </div>
  );
}

export default App;
