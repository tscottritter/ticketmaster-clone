import React from "react";

const AttractionDetails = ({ details }) =>
  details.name ? (
    <>
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">
          {details.name}
        </h5>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        ></button>
      </div>
      <div className="modal-body">
        <img
          src={
            details.images.find(
              (img) => img.ratio === "16_9" && img.width > 500
            ).url
          }
          className="card-img-top"
          alt={details.name}
        />
        <p>{details.additionalInfo ?? ""}</p>
        <p>
          {details.upcomingEvents
            ? `${details.name} has ${
                details.upcomingEvents._total
              } upcoming event${details.upcomingEvents._total === 1 ? "" : "s"}`
            : ""}
        </p>
      </div>
      <div className="modal-footer">
        <button
          type="button"
          className="btn btn-secondary"
          data-bs-dismiss="modal"
        >
          Close
        </button>
        <a
          type="button"
          className="btn btn-primary"
          href={details.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          More info↪
        </a>
      </div>
    </>
  ) : (
    "There was an error getting this for you. Please try again."
  );

export default AttractionDetails;
