import React, { useState, useEffect } from 'react';
import './Results.css';

const Results = ({ results }) => {
    const data = results.map((event, i) => (
        <li key={i}>{event.name}</li>
    ))

    return (
        <ul>{data}</ul>
    )
}

export default Results;