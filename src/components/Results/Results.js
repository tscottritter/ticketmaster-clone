import React, { useState } from 'react';

import EventDetails from '../EventDetails/EventDetails';
import AttractionDetails from '../AttractionDetails/AttractionDetails';
import VenueDetails from '../VenueDetails/VenueDetails';

import TicketmasterService from '../../services/TicketmasterService';

import './Results.css';

const Results = ({ results, keyword, setKeyword, resultsSearch, showError }) => {
    const [modalType, setModalType] = useState('');
    const [modalDetails, setModalDetails] = useState({});

    const attractionDetails = async (id) => {
        const data = await TicketmasterService.getAttractionDetails(id);

        setModalType('attraction');
        setModalDetails(data);
    }

    const eventDetails = async (id) => {
        const data = await TicketmasterService.getEventDetails(id);

        setModalType('event');
        setModalDetails(data);
    }

    const venueDetails = async (id) => {
        const data = await TicketmasterService.getVenueDetails(id);

        setModalType('venue');
        setModalDetails(data);
    }

    const attractions = results.attractions.map((attraction, i) => (
        <div className='card' key={i}>
            <img src={attraction.images.find(img => img.ratio === '16_9' && img.width > 500).url} className='card-img-top' alt={attraction.name} />
            <div className='card-body'>
                <h5 className='card-title'>{attraction.name}</h5>
                <p className='card-text'>{attraction.classifications.find(item => item.primary).genre.name}</p>
            </div>
            <div className='card-footer'>
                <button type='button'
                    className='btn btn-primary'
                    data-bs-toggle='modal'
                    data-bs-target='#detailsModal'
                    onClick={async (e) => {
                        await attractionDetails(attraction.id)
                    }}>
                        See Details
                </button>
            </div>
        </div>
    ));

    const events = results.events.map((event, i) => (
        <div className='card'key={i}>
            <img src={event.images.find(img => img.ratio === '16_9' && img.width > 500).url} className='card-img-top' alt={event.name} />
            <div className='card-body'>
                <h5 className='card-title'>{event.name}</h5>
                <p className='card-text'>{new Date(event.dates.start.localDate).toLocaleDateString()}{event._embedded ? ` at ${event._embedded.venues[0].name}` : ''}</p>
            </div>
            <div className='card-footer'>
                <button type='button'
                    className='btn btn-primary'
                    data-bs-toggle='modal'
                    data-bs-target='#detailsModal'
                    onClick={async (e) => {
                        await eventDetails(event.id)
                    }}>See Details</button>
            </div>
        </div>
    ));

    const venues = results.venues.map((venue, i) => (
        <div className='card' key={i}>
            <img src='./location.png' className='card-img-top' alt=''/>
            <div className='card-body'>
                <h5 className='card-title'>{venue.name}</h5>
                <p className='card-text'>{venue.city?.name}{`${venue.state ? ', ' + venue.state.name : '' }`}{venue.country && venue.country.name === 'United States Of America' ? '' : ', ' + venue.country.name}</p>
            </div>
            <div className='card-footer'>
                <button type='button'
                className='btn btn-primary'
                data-bs-toggle='modal'
                data-bs-target='#detailsModal'
                onClick={async (e) => {
                    await venueDetails(venue.id)
                }}>See Details</button>
            </div>
        </div>
    ));

    return (
        <div id='results'>
            <nav>
                <div className='nav nav-pills'
                    id='nav-tab'
                    role='tablist'>
                    <button className='nav-link active'
                        id='events-tab'
                        data-bs-toggle='tab'
                        data-bs-target='#events'
                        type='button'
                        role='tab'
                        aria-controls='events'
                        aria-selected='true'>
                            Events ({results.events.length}{results.events.length === 100 ? '+' : ''})
                    </button>
                    <button className='nav-link'
                        id='attractions-tab'
                        data-bs-toggle='tab'
                        data-bs-target='#attractions'
                        type='button'
                        role='tab'
                        aria-controls='attractions'
                        aria-selected='false'>
                            Artists/Teams ({results.attractions.length}{results.attractions.length === 100 ? '+' : ''})
                    </button>
                    <button className='nav-link'
                        id='venues-tab'
                        data-bs-toggle='tab'
                        data-bs-target='#venues'
                        type='button'
                        role='tab'
                        aria-controls='venues'
                        aria-selected='false'>
                            Venues ({results.venues.length}{results.venues.length === 100 ? '+' : ''})
                    </button>
                    <div className='results-search'>
                        <input 
                            id='keywordInput'
                            placeholder='Search...'
                            value={keyword} onChange={(e) => setKeyword(e.target.value)}
                            onKeyUp={(e) => {
                                if (e.key === 'Enter') resultsSearch();
                            }}>
                        </input>
                        <button 
                            type='button'
                            className='btn btn-primary'
                            onClick={() => resultsSearch()}>
                                Search
                        </button>
                    </div>
                </div>
            </nav>
            <div className='tab-content'
                id='nav-tabContent'>
                <div className='tab-pane fade show active'
                    id='events'
                    role='tabpanel'
                    aria-labelledby='events-tab'><div className='card-group'>{ events.length > 0 ? events : 'Nothing was found for this keyword. If you think this is an error, please search again.' }</div></div>
                <div className='tab-pane fade'
                    id='attractions'
                    role='tabpanel'
                    aria-labelledby='attractions-tab'><div className='card-group'>{ attractions.length > 0 ? attractions : 'Nothing was found for this keyword. If you think this is an error, please search again.' }</div></div>
                <div className='tab-pane fade'
                    id='venues'
                    role='tabpanel'
                    aria-labelledby='venues-tab'><div className='card-group'>{ venues.length > 0 ? venues : 'Nothing was found for this keyword. If you think this is an error, please search again.' }</div></div>
            </div>
            <div className='modal fade'
                id='detailsModal' tabIndex='-1'
                aria-labelledby='exampleModalLabel'
                aria-hidden='true'>
                <div className='modal-dialog'>
                    <div className='modal-content'>
                        { 
                            modalType === 'event' ? <EventDetails details={modalDetails}/> :
                            modalType === 'attraction' ? <AttractionDetails details={modalDetails} /> :
                            modalType === 'venue' ? <VenueDetails details={modalDetails} /> : ''
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Results;