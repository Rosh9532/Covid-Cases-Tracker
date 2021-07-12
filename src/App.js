
import './App.css';
import Covid from './components/covid';
import StateWise from './components/statewise';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact component={Covid} />
          <Route path="/statewiseresult" component={StateWise} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
