import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage';
import pages from './pages/pages';
import './assets/scss/style.scss';

function App() {
  return (
      <div className="App">
        <Router>
          {/* <Route path='/' component={LandingPage}></Route> */}
          <Route path='/pages' component={pages}></Route>
        </Router>
      </div>
  )
}

export default App;
