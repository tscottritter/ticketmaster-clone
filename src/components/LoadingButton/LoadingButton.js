import React from "react";

const LoadingButton = ({ classes }) => (
  <button
    id="loadingBtn"
    className={`btn btn-primary ${classes}`}
    type="button"
    disabled
  >
    <span
      className="spinner-border spinner-border-sm"
      role="status"
      aria-hidden="true"
    ></span>
    Searching...
  </button>
);

export default LoadingButton;
