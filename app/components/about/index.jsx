"use client";
import React from 'react'
import Header3 from '../header3';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import WOW from "wow.js";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import "animate.css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "swiper/css/autoplay"
import Footer from '../footer';
import Link from 'next/link';
const AboutComponent = ({ testimonials = [], agents = [] }) => {
  const prevButtonRef = React.useRef(null);
  const nextButtonRef = React.useRef(null);

  return (
    <div id="wrapper">
      {/* #page */}
      <div id="page" >
        {/* header */}
        <Header3 />
        {/* /header */}
        {/* main-content */}
        <div className="main-content px-20 default  "  >

          {/* flat-title */}
          <section className="flat-title ">
            <div className='flat-title inner-page' >
            <div className="cl-container full">
              <div className="row">
                <div className="col-12">
                  <div className="content">
                    <h2>About</h2>
                    <ul className="breadcrumbs" style={{listStyle:"none"}} >
                      <li  style={{listStyle:"none"}} className='list-unstyled' >
                        <Link href="/">Home</Link>
                      </li>
                      <li>/</li>
                      <li>About</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            </div>
            <div className="cl-container full about  " style={{paddingTop:90}} >  

              <div className="row justify-center ">
                <div className="col-12 col-md-6">
                  <div className="content">
                    <h3  >Welcome to "Buy a House in Rosarito” Where Your Baja Dreams Meet Feet on the Ground to Help with Practical Living!</h3>
                    <div className="text mt-2">👨‍👩‍👦 Our Family’s Story
                    </div>
                  </div>
                  <div className='text-center' >
                    <img src="/assets/images/about1.png" className='mt-5' alt="about-image" />
                  </div>
                  <p className="wow fadeInUp mt-5 ">
                    We’re the Hansome family - an Ohio State Buckeye, my incredible wife Adriana my “Aztec Warrior Princess”, and our son Adam. While Adriana isn’t deeply connected to her Native ancestry, it’s fascinating to know our family is part of Mexico’s rich cultural tapestry. Join us as we share our personal experiences of raising a family in Rosarito and embracing the unique opportunities this place has to offer.
                  </p>
                  <h5 className="wow fadeInUp text-center mt-5 ">Buy a House in Rosarito</h5>
                  <p className="wow fadeInUp mt-5 ">
                    Discover the magic of Rosarito, Mexico—a stunning coastal haven offering affordability, vibrant culture, and endless opportunities. Hosted by our Mexican American family, we explore why Rosarito is the perfect destination to live, retire, or invest, with all the comforts of the U.S. close at hand, but much cheaper services right in your back yard.
                  </p>
                  <h5 className="wow fadeInUp text-center mt-5 ">🌴 Affordable Real Estate & Living</h5>
                  <div className='text-center' >
                    <img src="/assets/images/about2.png" className='mt-5' alt="about-image" />
                  </div>
                  <ul className='wow fadeInUp mt-5' >
                    <li><p><span><Link href="https://buyahouseinrosarito.com/" target="_blank" >Super Low-Cost Real Estate</Link></span>: Find incredible deals on homes with ocean views, family-friendly communities, and investment properties that maximize your budget.</p></li>
                    <li><p><span>Retirement-Friendly</span>: Discover why retirees are flocking to Rosarito for the affordability, ease of living, and <span><Link href="https://bwt.cbp.gov/details/09250401/POV" target='_blank' > proximity to the U.S.</Link></span></p></li>
                  </ul>
                  <h5 className="wow fadeInUp text-center mt-5 ">🏡 Practical Living & Logistics</h5>
                  <ul className='wow fadeInUp mt-5' >
                    <li><p><span>Getting a U.S. Address</span>: It’s easy. We use our PO Box, and it’s on our California <span><Link href="https://www.dmv.ca.gov/portal/" target='_blank'  > Driver’s License</Link> </span> (which you’re required to get within 10 days of establishing residency.</p></li>
                    <li><p><span>Health Insurance</span>: <Link href="https://www.coveredca.com/" target='_blank'  >Information on health insurance through Covered California.</Link> </p></li>
                    <li><p><span>Banking and Taxes</span>: If you live in the Rosarito area full-time and still earn an active income, YOU LIKELY QUALIFY FOR <Link href="https://www.irs.gov/individuals/international-taxpayers/foreign-earned-income-exclusion" target='_blank' > Foreign Earned Income Exclusion,</Link> where you won’t pay federal taxes on the first 130,000 (2025). Details on the Foreign Earned Income Exclusion for expats still earning an active income. </p></li>
                    <li><p><span>Commuting Across the Border</span>: <Link href="https://ttp.dhs.gov/" target='_blank' >Apply for SENTRI passes for expedited border crossing. </Link> Motorcycles are usually the fastest way to cross. <Link href="https://www.tripadvisor.com/ShowTopic-g150776-i761-k14745321-Special_lane_for_motorcycles_going_into_the_usa-Tijuana_Baja_California.html" target='_blank'  >You can lane-split in Baja California on a motorcycle </Link> which means you can go straight to the front of every line. </p></li>
                    <li><p>High-Speed Internet Options: Stay connected in Rosarito with several reliable high-speed internet providers: <div className='text-center' >
                      <Link href="#" target='_blank' >Telnor: Offers fiber-optic internet services with speeds up to 300 Mbps. </Link><br />
                      <Link href="#" target='_blank' >Totalplay: Provides high-speed internet, television, and telephone services.</Link><br />
                      <Link href="https://www.starlink.com/" target='_blank' >Starlink by SpaceX: Satellite-based internet service offering high-speed connectivity, ideal for areas with limited traditional internet access.</Link>
                    </div> </p></li>
                    <li><p> <span>Popular Cell Phone Services with Data Plans</span>: Stay connected on the go with these major cell phone providers in Mexico: <div className='text-center' >
                      <Link href="#" target='_blank' >Telcel: The largest mobile operator in Mexico, offering extensive coverage of both Mexico & the US, and various data plans. </Link><br />
                      <Link href="#" target='_blank' >AT&T Mexico: Offers a variety of data plans with extensive coverage across Mexico.</Link><br />
                      <Link href="https://www.starlink.com/" target='_blank' >Movistar: Provides competitive data plans and nationwide coverage.</Link>
                    </div> </p></li>
                  </ul>
                  <h5 className="wow fadeInUp text-center mt-5 ">🚚 Trustworthy International Movers with Great Reviews</h5>
                  <p className='text-center' ><strong>1. Shepherd International Movers</strong></p>
                  <ul className='wow fadeInUp mt-5' >
                    <li><p><strong> Overview:</strong> Shepherd International Movers is a <strong> highly rated international moving company</strong> specializing in relocations from <strong> California to Mexico.</strong> Their services include full packing, transport, and customs clearance.</p></li>
                    <li>
                      <p><strong>Services Offered:</strong></p>
                    </li>
                  </ul>
                  <p  >
                    ✅ Full-service international household moving <br />
                    ✅ Vehicle shipping <br />
                    ✅ Packing and storage solutions <br />
                    ✅ Customs assistance for U.S.-Mexico border crossing
                  </p>
                  <ul className='wow fadeInUp' >
                    <li>
                      <p> <strong>Reviews:</strong> </p>
                    </li>
                  </ul>
                  <p>
                    ⭐ <strong>Google Maps: 4.8 stars</strong><br />
                    ⭐ <strong>Yelp: 4.5 stars</strong>
                  </p>
                  <ul className='wow fadeInUp' >
                    <li>
                      <p> <strong>Contact:</strong> </p>
                    </li>
                  </ul>
                  <p>
                    📞<strong> Phone:</strong> (844) 747-6111<br />
                    <span><img src='/assets/images/abouticon.png' height={20} width={20} /></span> <strong>Website:</strong> <Link href="https://maps.app.goo.gl/R3tPyiMWiW5yKFhTA" target='_blank' style={{ textDecoration: "underline" }} >Shepherd Movers</Link>

                  </p>
                  <p className='text-center mt-3 ' ><strong>2. Atlas Transfer & Storage Co.</strong></p>
                  <ul className='wow fadeInUp mt-5' >
                    <li><p><strong> Overview:</strong> A <strong>BBB-accredited</strong> company with over<strong> 90 years of experience,</strong> Atlas Transfer & Storage offers<strong> international moving services from the US to Mexico,</strong> ensuring safe and efficient transport.</p></li>
                    <li>
                      <p><strong>Services Offered:</strong></p>
                    </li>
                  </ul>
                  <p  >
                    ✅ Household moving services <br />
                    ✅ Storage solutions <br />
                    ✅ Packing and unpacking <br />
                    ✅ Customs documentation support
                  </p>
                  <ul className='wow fadeInUp' >
                    <li>
                      <p> <strong>Reviews:</strong> </p>
                    </li>
                  </ul>
                  <p>
                    ⭐ <strong>Google Maps: 4.7 stars</strong><br />
                    ⭐ <strong>Better Business Bureau (BBB): A+ rating</strong><br />
                    ⭐ <strong>Yelp: 4.5 stars</strong>
                  </p>
                  <ul className='wow fadeInUp' >
                    <li>
                      <p> <strong>Contact:</strong> </p>
                    </li>
                  </ul>
                  <p>
                    📞<strong> Phone:</strong> (858) 513-3800<br />
                    <span><img src='/assets/images/abouticon.png' height={20} width={20} /></span> <strong>Website:</strong> <Link href="https://maps.app.goo.gl/eYaTYR4nCwu4nEfX7" target='_blank' style={{ textDecoration: "underline" }} >Atlas Transfer & Storage</Link>

                  </p>
                  <h5 className="wow fadeInUp text-center mt-5 ">🏥 Healthcare and Wellness</h5>
                  <ul className='wow fadeInUp mt-5' >
                    <li><p><span>High-Quality, Affordable Care</span>: Explore Mexico’s top-notch medical facilities for everyday needs, emergencies, and more.</p></li>
                    <li><p><span>Experimental Treatments</span>: Learn about cutting-edge options <Link href="https://www.healthline.com/health/ibogaine-treatment" target='_blank' style={{ fontStyle: "italic" }}  >like ibogaine therapy</Link>, <Link href="about:blank" target='_blank' style={{ fontStyle: "italic" }} >ayahuasca retreats</Link>, and innovative cancer treatments unavailable in the U.S.</p></li>
                    <li><p><span>Dental and Cosmetic Tourism</span>: Whether it’s a perfect smile or a full makeover, enjoy premium care for one-third the cost.</p></li>
                  </ul>
                  <h5 className="wow fadeInUp text-center mt-5 ">🏖️ Recreation & Adventure</h5>
                  <p className='mt-3 text-center' >Rosarito is a paradise for adventure seekers and relaxation lovers alike:</p>
                  <ul className='wow fadeInUp mt-5 mb-3' >
                    <li><p><span>Sport Fishing and Whale Watching, Ensenada</span>: Enjoy sport fishing and tranquil boat rides from nearby Ensenada’s port and marina.</p></li>
                    <div className='text-center' >
                      <img className='mt-3' src='/assets/images/about3.png' />
                    </div>
                    <li className='mt-3' ><p><span className='pt-3' ><Link href="https://www.surf-forecast.com/breaks/Baja-Malibu" target='_blank' >Surfing, Playas de Rosarito</Link></span>: Catch some of the best waves on the Baja coast, perfect for surfers of all levels.</p> </li>
                    <li className='mt-3' ><p><span className='pt-3' >Golfing, Playas de Rosarito</span>: Tee off at scenic golf courses with breathtaking ocean views.</p> </li>
                  </ul>
                  <div className='text-center' >
                    <img className='mt-5 wow fadeInUp' src='/assets/images/about4.png' />
                  </div>
                  <ul className='mt-5 wow fadeInUp' >
                    <li><p><span><Link href="https://maps.app.goo.gl/APzxDcP1dBsnNH5s9" target='_blank' >Jersey Kids Zoo, Ensenada</Link></span>: Located in Valle de Guadalupe, this family-friendly park offers a petting zoo, playgrounds, and water attractions. Perfect for kids and picnics.</p></li>
                  </ul>
                  <div className='text-center' >
                    <img className='mt-5 wow fadeInUp' src='/assets/images/about5.png' />
                  </div>
                  <ul className='mt-5 wow fadeInUp' >
                    <li><p><span>Pai Pai Ecotourism Park, Ensenada</span>: Experience exotic animals, zip-lining, EuroBungee, and interaction with animals at this conservation-focused adventure park.</p></li>
                  </ul>
                  <div className='text-center' >
                    <img className='mt-5 wow fadeInUp' src='/assets/images/about6.png' />
                  </div>
                  <ul className='mt-5 wow fadeInUp' >
                    <li><p><span>Las Cañadas Adventure Park, Ensenada</span>: Zip-lining, ATV trails, horseback riding, camping, wave pools, and more—all in a scenic natural setting.</p></li>
                  </ul>
                  <div className='text-center' >
                    <img className='mt-5 wow fadeInUp' src='/assets/images/about7.png' />
                  </div>
                  <ul className='mt-5 wow fadeInUp' >
                    <li><p><span><Link href="https://maps.app.goo.gl/XLzwJA74iBmEwEdV7" target='_blank' >Morelos Park Zoo, Tijuana </Link></span>: A local favorite, this zoo features various animal exhibits, a petting zoo, and beautiful picnic areas.</p></li>
                  </ul>
                  <h5 className="wow fadeInUp text-center mt-5 ">🌿 Nature & Wildlife</h5>
                  <ul className='mt-5 wow fadeInUp' >
                    <li>
                      <p><span>Exotic Birds and Wildlife</span>: Spot hummingbirds, red-tailed hawks, barn owls, and even dolphins in their natural habitat.</p>
                    </li>
                    <li>
                      <p><span>Wildlife Sanctuaries and Zoos</span>: Visit local sanctuaries and petting farms for family-friendly fun.</p>
                    </li>
                    <li>
                      <p><span>Hiking Clubs</span>: Join community hiking groups to explore Baja’s rugged beauty.</p>
                    </li>
                  </ul>
                  <h5 className="wow fadeInUp text-center mt-5 ">🍷 Food, Wine, and Local Culture</h5>
                  <ul className='mt-5 wow fadeInUp' >
                    <li>
                      <p><span><Link href="https://maps.app.goo.gl/AG4uaKysfkP8KwKx8" target='_blank' >Valle de Guadalupe, Ensenada</Link></span>: Explore Mexico’s answer to Napa Valley, with world-class wineries, gourmet dining, and luxury resorts.</p>
                    </li>
                  </ul>
                  <div className='text-center' >
                    <img className='mt-5 wow fadeInUp' src='/assets/images/about8.png' />
                  </div>
                  <ul className='mt-5 wow fadeInUp' >
                    <li>
                      <p><span>Fresh Seafood & Cuisine</span>: Indulge in Rosarito’s famous lobster tacos and other Baja culinary delights.</p>
                    </li>
                  </ul>
                  <h5 className="wow fadeInUp text-center mt-5 ">🤝 Churches, Community & Sobriety Support</h5>
                  <ul className='mt-5 wow fadeInUp' >
                    <li>
                      <p><span>English-Speaking Resources</span>: Connect through English-speaking and <Link href="https://maps.app.goo.gl/dT4rtnmyrTj2KGLB8" target='_blank' > bilingual churches</Link>, sobriety meetings, <Link href="https://g.co/kgs/1tzXWva" target='_blank' >meditation groups</Link>, and expat networks.</p>
                    </li>
                    <li>
                      <p><span><Link href="https://g.co/kgs/4T68ANW" target='_blank' >Exercise and Fitness</Link></span>: Numerous gyms and health clubs.</p>
                    </li>
                    <li>
                      <p><span>Support for Families</span>: Rosarito offers plenty of kid-friendly activities, schools, and clubs for a balanced lifestyle.</p>
                    </li>
                  </ul>
                  <h5 className="wow fadeInUp text-center mt-5 ">Why Rosarito?</h5>
                  <ul className='mt-5 wow fadeInUp' >
                    <li>
                      <p><span>Affordable Paradise</span>: Get more for your money while living near the ocean.</p>
                    </li>
                    <li>
                      <p><span>Close to the U.S</span>: Enjoy the benefits of living abroad while keeping access to U.S. resources just minutes away.</p>
                    </li>
                    <li>
                      <p><span>Rich Culture</span>: From modern amenities to ancient history, Rosarito has it all.</p>
                    </li>
                    <li>
                      <p><span>Year-Round Sunshine</span>: Perfect weather for an outdoor lifestyle filled with adventure.</p>
                    </li>
                  </ul>
                  <h5 className="wow fadeInUp text-center mt-5 "><Link href="https://youtube.com/@buyahouseinrosarito?feature=shared" target='_blank' >Like and Subscribe to "Buy a House in Rosarito" on YouTube to See A Lot More Today!</Link></h5>
                  <p className='mt-5 wow fadeInUp' >
                    Whether you’re dreaming of a retirement home, exploring family life in Baja, or just curious about the unique lifestyle in Rosarito, this channel is for you.
                    Follow us for in-depth tips, breathtaking visuals, and a personal look into life in this incredible coastal paradise.
                  </p>
                  <h5 className="wow fadeInUp text-center mt-5 ">Don’t wait—start your Baja adventure today! 🌴✨</h5>
                </div>
              </div>
            </div>
          </section>

        </div>
        <Footer />
      </div>
    </div>

  )
}

export default AboutComponent