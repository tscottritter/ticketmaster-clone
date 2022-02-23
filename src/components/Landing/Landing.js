import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import './Landing.css';

const Landing = ({ keyword, setKeyword, landingSearch }) => {
    const [zipcode, setZipcode] = useState('');
    const history = useHistory();

    useEffect(() => document.getElementById('loadingBtn').hidden = true);

    const handleSearch = async () => {
        document.getElementById('searchBtn').hidden = true;
        document.getElementById('loadingBtn').hidden = false;

        try {
            await landingSearch(zipcode);
            history.push('/results');
        } catch {
            // error is handled in App.js
        }
    }
    
    return (
        <div id='landing'>
            <div className='row titles'>
                <h1 className='offset-md-2 col-md-6 col-sm-12 left'>TicketMaestro♫</h1>
                <h4 className='col-md-2 col-sm-12 right'>find what you're looking for</h4>
            </div>
            <div className='row content'>
                <input 
                    id='locationInput'
                    className='offset-md-2 col-md-2 col-sm-3'
                    placeholder='Enter zipcode'
                    value={zipcode} onChange={(e) => setZipcode(e.target.value)}>
                </input>
                <input 
                    id='keywordInput'
                    className='col-md-4 col-sm-6'
                    placeholder='Search events, artists, and more...'
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                    onKeyUp={(e) => {
                        if (e.key === 'Enter') handleSearch();
                    }}>
                </input>
                <button 
                    type='button'
                    id='searchBtn'
                    className='btn btn-primary col-md-2 col-sm-3'
                    onClick={handleSearch}>
                    Search
                </button>
                <button id='loadingBtn' className='btn btn-primary' type='button' disabled>
                    <span className='spinner-border spinner-border-sm' role='status' aria-hidden='true'></span>
                    Searching...
                </button>
            </div>
        </div>
    )
}

export default Landing;