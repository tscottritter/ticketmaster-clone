import React from 'react';

const Attraction = ({ attraction, attractionDetails }) => (
    <div className='card'>
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
                onClick={async () => {
                    await attractionDetails(attraction.id)
                }}>
                    See Details
            </button>
        </div>
    </div>
)

export default Attraction;