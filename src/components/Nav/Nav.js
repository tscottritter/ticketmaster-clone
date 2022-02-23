import React from "react";

import NavTab from "../NavTab/NavTab";
import LoadingButton from "../LoadingButton/LoadingButton";

const Nav = ({ results, keyword, setKeyword, handleSearch }) => (
  <nav>
    <div className="nav nav-pills" id="nav-tab" role="tablist">
      <NavTab type="events" input={results.events} active={true} />
      <NavTab type="attractions" input={results.attractions} active={false} />
      <NavTab type="venues" input={results.venues} active={false} />
      <div className="results-search">
        <input
          id="keywordInput"
          placeholder="Search..."
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          onKeyUp={(e) => {
            if (e.key === "Enter") handleSearch();
          }}
        ></input>
        <button
          id="searchBtn"
          type="button"
          className="btn btn-primary"
          onClick={handleSearch}
        >
          Search
        </button>
        <LoadingButton />
      </div>
    </div>
  </nav>
);

export default Nav;
