import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import TicketmasterService from '../../services/TicketmasterService';

import './Landing.css';

const Landing = ({ setSearchResults }) => {
    const [keyword, setKeyword] = useState('');
    const history = useHistory();

    const landingSearch = async () => {
        const results = await TicketmasterService.simpleSearch(keyword);
        setSearchResults(results._embedded.events);
        history.push('/results');
    }
    
    return (
        <>
            <h1>TicketMaestro</h1>
            <h3>find what you're looking for</h3>
            <input id='landingSearch' placeholder='search...' value={keyword} onChange={(e) => setKeyword(e.target.value)}></input>
            <button type='button' className='btn btn-primary' onClick={landingSearch}>Search</button>
        </>
    )
}

export default Landing;