import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import NewHome from './components/NewHome';


function App() {
  return (
    <>
    <Router>
      <NewHome />
    <Switch>
    </Switch>
    </Router>
    
        </>
  );
}

export default App;
