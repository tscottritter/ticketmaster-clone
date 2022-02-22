import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import './Landing.css';

const Landing = ({ keyword, setKeyword, landingSearch }) => {
    const [zipcode, setZipcode] = useState('');
    const history = useHistory();
    
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
                    value={keyword} onChange={(e) => setKeyword(e.target.value)} onKeyUp={async (e) => {
                        if (e.key !== 'Enter') return;
                        
                        try {
                            await landingSearch(zipcode);
                            history.push('/results');
                        } catch {
                            // error is handled in App.js
                        }
                    }}>
                </input>
                <button 
                    type='button'
                    className='btn btn-primary col-md-2 col-sm-3'
                    onClick={async () => {
                        try {
                            await landingSearch(zipcode);
                            history.push('/results');
                        } catch {
                            // error is handled in App.js
                        }
                    }}>
                    Search
                </button>
            </div>
        </div>
    )
}

export default Landing;