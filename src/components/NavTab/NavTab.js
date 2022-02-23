import React from "react";

const NavTab = ({ type, input, active }) => (
<button
        className={`nav-link${active ? ' active' : ''}`}
        id={`${type}-tab`}
        data-bs-toggle="tab"
        data-bs-target={`#${type}`}
        type="button"
        role="tab"
        aria-controls={type}
        aria-selected={active}
        >
        {type === 'attractions' ? 'ARTISTS/TEAMS' : type.toUpperCase()} ({input.length}
        {input.length === 100 ? "+" : ""})
        </button>
)

export default NavTab;