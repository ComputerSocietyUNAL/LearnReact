import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import Main from './components/Main';
import Questionary from './components/Questionary/Questionary';
import Result from "./components/Result";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/test">            
            <Questionary />
          </Route>
          <Route path="/result">         
            <Result />
          </Route>
          <Route path="/">
            <Main/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
