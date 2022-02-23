const fetch = require('fetch-retry')(window.fetch);

const TicketmasterService = {
    async eventSearch(keyword, zipcode) {
        try {
            const response = await fetch(`https://app.ticketmaster.com/discovery/v2/events.json?size=100&apikey=ziEJfclrZPcDy9rUgAXJK6fFX4SGKcG6&keyword=${keyword}&postalCode=${zipcode}`);

            return response.ok ? response.json() : { 'error': response.status };
        } catch (error) {
            return { 'error': error };
        }
    },

    async getEventDetails(id) {
        try {
            const response = await fetch(`https://app.ticketmaster.com/discovery/v2/events/${id}.json?apikey=ziEJfclrZPcDy9rUgAXJK6fFX4SGKcG6`);

            return response.ok ? response.json() : { 'error': response.status };
        } catch (error) {
            return { 'error': error };
        }
    },

    async venueSearch(keyword) {
        try {
            const response = await fetch(`https://app.ticketmaster.com/discovery/v2/venues.json?size=100&apikey=ziEJfclrZPcDy9rUgAXJK6fFX4SGKcG6&keyword=${keyword}`);

            return response.ok ? response.json() : { 'error': response.status };
        } catch (error) {
            return { 'error': error };
        }
    },

    async getVenueDetails(id) {
        try {
            const response = await fetch(`https://app.ticketmaster.com/discovery/v2/venues/${id}.json?apikey=ziEJfclrZPcDy9rUgAXJK6fFX4SGKcG6`);

            return response.ok ? response.json() : { 'error': response.status };
        } catch (error) {
            return { 'error': error };
        }
    },

    async attractionSearch(keyword) {
        try {
            const response = await fetch(`https://app.ticketmaster.com/discovery/v2/attractions.json?size=100&apikey=ziEJfclrZPcDy9rUgAXJK6fFX4SGKcG6&keyword=${keyword}`);

            return response.ok ? response.json() : { 'error': response.status };
        } catch (error) {
            return { 'error': error };
        }
    },

    async getAttractionDetails(id) {
        try {
            const response = await fetch(`https://app.ticketmaster.com/discovery/v2/attractions/${id}.json?apikey=ziEJfclrZPcDy9rUgAXJK6fFX4SGKcG6`);

            return response.ok ? response.json() : { 'error': response.status };
        } catch (error) {
            return { 'error': error };
        }
    }
}

export default TicketmasterService;