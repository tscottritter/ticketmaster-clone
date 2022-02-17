const TicketmasterService = {
    async simpleSearch(keyword, location = null) {
        const response = await fetch(`https://app.ticketmaster.com/discovery/v2/events.json?size=10&apikey=ziEJfclrZPcDy9rUgAXJK6fFX4SGKcG6&keyword=${keyword}`);

        return response.ok ? response.json() : { 'error': response.status };
    }
}

export default TicketmasterService;