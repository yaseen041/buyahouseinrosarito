const BASE_URL = "https://explorelogicsit.net/elrealestate/portal/api"


export class url {
    // Home URLs
    static PROPERTY_TYPES = `${BASE_URL}/types/all`
    static CITIES = `${BASE_URL}/cities/all`
    static RECENT_FOR_RENT = `${BASE_URL}/properties/recentforrent`
    static RECENT_FOR_SALE = `${BASE_URL}/properties/recentforsale`
    static AGENTS_3 = `${BASE_URL}/agents/three`
    static AGENT = `${BASE_URL}/agents/details`
    // Property URLs
    static PROPERTIES = `${BASE_URL}/properties/all-filtered`
    static FILTERS = `${BASE_URL}/properties/filters`
    static PROPERTY = `${BASE_URL}/properties/detailswithslug`

    // About URLs

    static TESTIMONIALS = `${BASE_URL}/testimonials/all`
    static AGENTS = `${BASE_URL}/agents/all`

}