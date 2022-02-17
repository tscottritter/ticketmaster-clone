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
        <div className='container'>
            <div className='row titles'>
                <h1 className='col-8 left'>TicketMaestro♫</h1>
                <h4 className='col-4 right'>find what you're looking for</h4>
            </div>
            <div className='row content'>
                <input id='landingSearch' className='col-9' placeholder='search...' value={keyword} onChange={(e) => setKeyword(e.target.value)}></input>
                <button type='button' className='btn btn-primary offset-1 col-2' onClick={landingSearch}>Search</button>
            </div>
        </div>
    )
}

export default Landing;