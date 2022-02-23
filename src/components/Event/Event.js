import React from "react";

const Event = ({ event, eventDetails }) => (
  <div className="card">
    <img
      src={
        event.images.find((img) => img.ratio === "16_9" && img.width > 500).url
      }
      className="card-img-top"
      alt={event.name}
    />
    <div className="card-body">
      <h5 className="card-title">{event.name}</h5>
      <p className="card-text">
        {new Date(event.dates.start.localDate).toLocaleDateString()}
        {event._embedded ? ` at ${event._embedded.venues[0].name}` : ""}
      </p>
    </div>
    <div className="card-footer">
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#detailsModal"
        onClick={async () => {
          await eventDetails(event.id);
        }}
      >
        See Details
      </button>
    </div>
  </div>
);

export default Event;
