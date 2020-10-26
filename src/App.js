import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import Main from './components/Main';
import MainQuestions from './components/MainQuestions';
import Questionary from './components/Questionary';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/test">
            {/* <MainQuestions /> */}
            <Questionary />
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
