const BASE_URL = "https://explorelogicsit.net/elrealestate/portal/api"


export class url {
    // Home URLs
    static PROPERTY_TYPES = `${BASE_URL}/types/all`
    static CITIES = `${BASE_URL}/cities/all`
    static RECENT_FOR_RENT = `${BASE_URL}/properties/recentforrent`
    static RECENT_FOR_SALE = `${BASE_URL}/properties/recentforsale`
    static AGENTS_3 = `${BASE_URL}/agents/three`
    static AGENT = `${BASE_URL}/agents/details`
    static BESTDEALS = `${BASE_URL}/properties/bestdeals`
    // Property URLs
    static PROPERTIES = `${BASE_URL}/search/submit`
    static FILTERS = `${BASE_URL}/search/input-options`
    static PROPERTY = `${BASE_URL}/properties/detailswithslug`
    static COMMUNITY = `${BASE_URL}/neighborhoods/all`
    static FEATUREDPROPERTIES = `${BASE_URL}/properties/featured`

    // About URLs

    static TESTIMONIALS = `${BASE_URL}/testimonials/all`
    static AGENTS = `${BASE_URL}/agents/all`

    // Blogs URLs

    static BLOGS = `${BASE_URL}/blogs`
    static CATEGORIES = `${BASE_URL}/categories`
    static SINGLEBLOG = `${BASE_URL}/blogs/fetch/`
    static PROPERTIESOPTIONS = `${BASE_URL}/contact/property-options`
    static SUBMITCONTACT = `${BASE_URL}/contact/submit`
    static SUBMITTOUR = `${BASE_URL}/tour/submit` 
    static BLOG_CATEGORY =  `${BASE_URL}/blogs/category-withslug`   
// Pages
    static CITY_PAGE = `${BASE_URL}/cities/page`
    static COOMUNITY_PAGE = `${BASE_URL}/neighborhoods/page`

//SEO
    static HOME_SEO = `${BASE_URL}/seo/home`
    static PROPERTY_SEO = `${BASE_URL}/seo/property`
    static ABOUT_SEO = `${BASE_URL}/seo/about`
    static BLOG_SEO = `${BASE_URL}/seo/blog`
    static FAQ_SEO = `${BASE_URL}/seo/faq`
    static CONTACT_SEO = `${BASE_URL}/seo/contact`
}
