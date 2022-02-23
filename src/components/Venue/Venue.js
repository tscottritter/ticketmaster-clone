import React from 'react';

const Venue = ({ venue, venueDetails }) => (
    <div className='card'>
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
            onClick={async () => {
                await venueDetails(venue.id)
            }}>See Details</button>
        </div>
    </div>
)

export default Venue;