import React, { useEffect, useState } from "react";

import Attraction from "../Attraction/Attraction";
import AttractionDetails from "../AttractionDetails/AttractionDetails";
import Event from "../Event/Event";
import EventDetails from "../EventDetails/EventDetails";
import Venue from "../Venue/Venue";
import VenueDetails from "../VenueDetails/VenueDetails";
import Nav from "../Nav/Nav";

import TicketmasterService from "../../services/TicketmasterService";

import "./Results.css";

const Results = ({ results, keyword, setKeyword, resultsSearch }) => {
  const [modalType, setModalType] = useState("");
  const [modalDetails, setModalDetails] = useState({});
  const noResultsMessage =
    "No results were found for this keyword. If you think this was an error, please search again.";

  useEffect(() => {
    document.getElementById("loadingBtn").hidden = true;
    document.getElementById("searchBtn").hidden = false;
  });

  const handleSearch = () => {
    document.getElementById("searchBtn").hidden = true;
    document.getElementById("loadingBtn").hidden = false;
    resultsSearch();
  };

  const attractionDetails = async (id) => {
    const data = await TicketmasterService.getAttractionDetails(id);

    setModalType("attraction");
    setModalDetails(data);
  };

  const eventDetails = async (id) => {
    const data = await TicketmasterService.getEventDetails(id);

    setModalType("event");
    setModalDetails(data);
  };

  const venueDetails = async (id) => {
    const data = await TicketmasterService.getVenueDetails(id);

    setModalType("venue");
    setModalDetails(data);
  };

  const attractions = results.attractions.map((attraction, i) => (
    <Attraction
      key={i}
      attraction={attraction}
      attractionDetails={attractionDetails}
    />
  ));

  const events = results.events.map((event, i) => (
    <Event key={i} event={event} eventDetails={eventDetails} />
  ));

  const venues = results.venues.map((venue, i) => (
    <Venue key={i} venue={venue} venueDetails={venueDetails} />
  ));

  return (
    <div id="results">
      <Nav results={results} keyword={keyword} setKeyword={setKeyword} handleSearch={handleSearch} />
      <div className="tab-content" id="nav-tabContent">
        <div
          className="tab-pane fade show active"
          id="events"
          role="tabpanel"
          aria-labelledby="events-tab"
        >
          <div className="card-group">
            {events.length > 0 ? events : noResultsMessage}
          </div>
        </div>
        <div
          className="tab-pane fade"
          id="attractions"
          role="tabpanel"
          aria-labelledby="attractions-tab"
        >
          <div className="card-group">
            {attractions.length > 0 ? attractions : noResultsMessage}
          </div>
        </div>
        <div
          className="tab-pane fade"
          id="venues"
          role="tabpanel"
          aria-labelledby="venues-tab"
        >
          <div className="card-group">
            {venues.length > 0 ? venues : noResultsMessage}
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="detailsModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            {modalType === "event" ? (
              <EventDetails details={modalDetails} />
            ) : modalType === "attraction" ? (
              <AttractionDetails details={modalDetails} />
            ) : modalType === "venue" ? (
              <VenueDetails details={modalDetails} />
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Results;
