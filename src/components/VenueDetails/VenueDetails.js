import React from 'react';

const VenueDetails = ({ details }) => (
    details.name ? 
    <>
        <div className='modal-header'>
            <h5 className='modal-title' id='exampleModalLabel'>{details.name}</h5>
            <button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>
        </div>
        <div className='modal-body'>
            <iframe title='map' src={`https://www.google.com/maps/embed/v1/place?q=${details.address.line1}${details.city.name}&key=AIzaSyCvKNQ5MCAfP0FCmPl5YRIkdvCWhL8An-k`}/><br></br>
            <strong>
                {details.address.line1}<br></br>
                {details.city.name}, {details.state?.name}, {details.country.name}<br></br>
            </strong>
            <p>{ details.description ?? '' }</p>
            <p>{ details.generalInfo?.generalRule ?? '' }</p>
            <p>{ details.additionalInfo ?? '' }</p>
            <p>{ details.upcomingEvents ? `${details.name} has ${details.upcomingEvents._total} upcoming event${details.upcomingEvents._total === 1 ? '' : 's'}` : '' }</p>
        </div>
        <div className='modal-footer'>
            <button type='button' className='btn btn-secondary' data-bs-dismiss='modal'>Close</button>
            <a type='button' className='btn btn-primary' href={details.url} target='_blank' rel='noopener noreferrer'>More info↪</a>
        </div>
    </>
    : 'There was an error getting this for you. Please try again.'
)

export default VenueDetails;