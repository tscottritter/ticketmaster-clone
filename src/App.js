import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Landing from "./components/Landing/Landing";
import Results from "./components/Results/Results";

import TicketmasterService from "./services/TicketmasterService";

import "./App.css";

const App = () => {
  const [searchResults, setSearchResults] = useState({});
  const [keyword, setKeyword] = useState("");

  const search = async (zipcode = "") => {
    const eventResults = TicketmasterService.eventSearch(keyword, zipcode);
    const venueResults = TicketmasterService.venueSearch(keyword);
    const attractionResults = TicketmasterService.attractionSearch(keyword);

    const finalResults = [
      await eventResults,
      await venueResults,
      await attractionResults,
    ];

    setSearchResults({
      events: finalResults[0]._embedded?.events ?? [],
      venues: finalResults[1]._embedded?.venues ?? [],
      attractions: finalResults[2]._embedded?.attractions ?? [],
    });
  };

  return (
    <Router>
      <main className="container">
        <Route
          exact
          path="/"
          render={() => (
            <Landing
              keyword={keyword}
              setKeyword={setKeyword}
              landingSearch={search}
            />
          )}
        />
        <Route
          exact
          path="/results"
          render={() => (
            <Results
              results={searchResults}
              keyword={keyword}
              setKeyword={setKeyword}
              resultsSearch={search}
            />
          )}
        />
      </main>
    </Router>
  );
};

export default App;
