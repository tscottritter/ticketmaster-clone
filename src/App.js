import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import Landing from './components/Landing/Landing';
import Results from './components/Results/Results';

import './App.css'

const App = () => {
  const [searchResults, setSearchResults] = useState([]);

  return (
    <div>
      <Router>
        <div>
          <main>
            <Route exact path='/' render={() => <Landing setSearchResults={setSearchResults} history/>} />
            <Route exact path='/results' render={() => <Results results={searchResults} />} />
          </main>
          <footer>
            {/* <Route path='/' component={Footer} /> */}
          </footer>
        </div>
      </Router>
    </div>
  )
};

export default App;