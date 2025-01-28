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
        <div className="main-content px-20 default about "  >
          <div className="space-20" />
          {/* flat-title */}
          <section className="flat-title ">
            <div className="cl-container full">
              <div className="row justify-center ">
                <div className="col-12 col-md-6">
                  <div className="content">
                    <h3  >Welcome to "Buy a House in Rosarito” Where Your Baja Dreams Meet Feet on the Ground to Help with Practical Living!</h3>
                    <div className="text mt-2">👨‍👩‍👦 Our Family’s Story
                    </div>
                  </div>
                  <img src="/assets/images/about1.png" className='mt-5' alt="" />
                  <p className="wow fadeInUp mt-5 ">
                    We’re the Hansome family - an Ohio State Buckeye, my incredible wife Adriana my “Aztec Warrior Princess”, and our son Adam. While Adriana isn’t deeply connected to her Native ancestry, it’s fascinating to know our family is part of Mexico’s rich cultural tapestry. Join us as we share our personal experiences of raising a family in Rosarito and embracing the unique opportunities this place has to offer.
                  </p>
                  <h5 className="wow fadeInUp text-center mt-5 ">Buy a House in Rosarito</h5>
                  <p className="wow fadeInUp mt-5 ">
                    Discover the magic of Rosarito, Mexico—a stunning coastal haven offering affordability, vibrant culture, and endless opportunities. Hosted by our Mexican American family, we explore why Rosarito is the perfect destination to live, retire, or invest, with all the comforts of the U.S. close at hand, but much cheaper services right in your back yard.
                  </p>
                  <h5 className="wow fadeInUp text-center mt-5 ">🌴 Affordable Real Estate & Living</h5>
                  <img src="/assets/images/about2.png" className='mt-5' alt="" />
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
                  <h5 className="wow fadeInUp text-center mt-5 ">🏥 Healthcare and Wellness</h5>
                  <ul className='wow fadeInUp mt-5' >
                    <li><p><span>High-Quality, Affordable Care</span>: Explore Mexico’s top-notch medical facilities for everyday needs, emergencies, and more.</p></li>
                    <li><p><span>Experimental Treatments</span>: Learn about cutting-edge options <Link href="https://www.healthline.com/health/ibogaine-treatment" target='_blank' style={{ fontStyle: "italic" }}  >like ibogaine therapy</Link>, <Link href="about:blank" target='_blank' style={{ fontStyle: "italic" }} >ayahuasca retreats</Link>, and innovative cancer treatments unavailable in the U.S.</p></li>
                    <li><p><span>Dental and Cosmetic Tourism</span>: Whether it’s a perfect smile or a full makeover, enjoy premium care for one-third the cost.</p></li>
                  </ul>
                  <h5 className="wow fadeInUp text-center mt-5 ">🏖️ Recreation & Adventure</h5>
                  <p className='mt-3 text-center' >Rosarito is a paradise for adventure seekers and relaxation lovers alike:</p>
                  <ul className='wow fadeInUp mt-5' >
                    <li><p><span>Sport Fishing and Whale Watching, Ensenada</span>: Enjoy sport fishing and tranquil boat rides from nearby Ensenada’s port and marina.</p></li>
                      <img className='mt-3' src='/assets/images/about3.png' />
                      <li><span><Link href="https://www.surf-forecast.com/breaks/Baja-Malibu" target='_blank' >Surfing, Playas de Rosarito</Link></span>: Catch some of the best waves on the Baja coast, perfect for surfers of all levels. </li>
                      <li><span>Golfing, Playas de Rosarito</span>: Tee off at scenic golf courses with breathtaking ocean views. </li>
                  </ul>
                  <img className='mt-5 wow fadeInUp' src='/assets/images/about4.png' />
                  <ul className='mt-5 wow fadeInUp' >
                    <li><span><Link href="https://maps.app.goo.gl/APzxDcP1dBsnNH5s9" target='_blank' >Jersey Kids Zoo, Ensenada</Link></span>: Located in Valle de Guadalupe, this family-friendly park offers a petting zoo, playgrounds, and water attractions. Perfect for kids and picnics.</li>
                  </ul>
                  <img className='mt-5 wow fadeInUp' src='/assets/images/about5.png' />
                  <ul className='mt-5 wow fadeInUp' >
                    <li><span>Pai Pai Ecotourism Park, Ensenada</span>: Experience exotic animals, zip-lining, EuroBungee, and interaction with animals at this conservation-focused adventure park.</li>
                  </ul>
                  <img className='mt-5 wow fadeInUp' src='/assets/images/about6.png' />
                  <ul className='mt-5 wow fadeInUp' >
                    <li><span>Las Cañadas Adventure Park, Ensenada</span>: Zip-lining, ATV trails, horseback riding, camping, wave pools, and more—all in a scenic natural setting.</li>
                  </ul>
                  <img className='mt-5 wow fadeInUp' src='/assets/images/about7.png' />
                  <ul className='mt-5 wow fadeInUp' >
                    <li><span><Link href="https://maps.app.goo.gl/XLzwJA74iBmEwEdV7" target='_blank' >Morelos Park Zoo, Tijuana </Link></span>: A local favorite, this zoo features various animal exhibits, a petting zoo, and beautiful picnic areas.</li>
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
                    <img className='mt-5 wow fadeInUp' src='/assets/images/about8.png' />
                    <ul className='mt-5 wow fadeInUp' >
                    <li>
                      <p><span>Fresh Seafood & Cuisine</span>: Indulge in Rosarito’s famous lobster tacos and other Baja culinary delights.</p>
                    </li>
                    </ul>
                    <h5 className="wow fadeInUp text-center mt-5 ">🤝 Churches, Community & Sobriety Support</h5>
                    <ul className='mt-5 wow fadeInUp' >
                    <li>
                      <p><span>English-Speaking Resources</span>: Connect through English-speaking and <Link href="https://maps.app.goo.gl/dT4rtnmyrTj2KGLB8" target='_blank' > bilingual churches</Link>, sobriety meetings, meditation groups, and expat networks.</p>
                    </li>
                    </ul>
                </div>
              </div>
            </div>
          </section>
          {/* /flat-title */}
          {/* vision-mission */}
          <section className="tf-section vision-mission">
            <div className="cl-container">
              <div className="row">
                <div className="col-12">
                  <div className="content">
                    <div className="vision">
                      <h2 className="wow fadeInUp">Vision</h2>
                      <p className="wow fadeInUp">
                        Adipiscing et vel tempor elementum dignissim urna. Eu sem
                        sed enim habitant libero ultricies sagittis. Malesuada
                        viverra netus diam vehicula nulla. Neque mattis lacus sed
                        tristique. Luctus ipsum lobortis sed odio ut ultricies
                        adipiscing nisi nulla. Turpis aliquam feugiat tortor rutrum
                        diam molestie vel pharetra.
                      </p>
                    </div>
                    <div className="mission">
                      <h2 className=" wow fadeInUp" data-wow-delay="0.1s">
                        Mission
                      </h2>
                      <p className=" wow fadeInUp" data-wow-delay="0.1s">
                        Sit arcu odio aenean vitae eu egestas. Gravida commodo non
                        sem diam faucibus justo dolor. Consectetur nunc scelerisque
                        ut enim tristique sed. At leo urna eu quam cursus dolor. In
                        bibendum sit scelerisque mattis cum.{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* /vision-mission */}
          {/* slider */}
          <section className="tf-section-default">
            <div className="cl-container">
              <div className="row justify-center">
                <div className="col-xxl-10">
                  <Swiper
                    className='swiper-container slider-4-center'
                    slidesPerView={2}
                    spaceBetween={40}
                    modules={[Pagination, A11y]}
                    loop={true}

                    breakpoints={{
                      450: {
                        slidesPerView: 1,
                        spaceBetween: 30,
                      },
                      768: {
                        slidesPerView: 1,
                        spaceBetween: 30,
                      },
                      1024: { // Adjust breakpoint to avoid overlap with 868
                        slidesPerView: 2,
                        spaceBetween: 40,
                      },
                    }}
                  >


                    <SwiperSlide>
                      <div className="swiper-slide">
                        <img src="/assets/images/slider/slider-about-1.jpg" alt="" />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="swiper-slide">
                        <img src="/assets/images/slider/slider-about-2.jpg" alt="" />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="swiper-slide">
                        <img src="/assets/images/slider/slider-about-3.jpg" alt="" />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="swiper-slide">
                        <img src="/assets/images/slider/slider-about-4.jpg" alt="" />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="swiper-slide">
                        <img src="/assets/images/slider/slider-about-1.jpg" alt="" />
                      </div>
                    </SwiperSlide>
                  </Swiper>

                </div>
              </div>
            </div>
          </section>
          {/* /slider */}
          {/* flat-counter */}
          <section className="tf-section flat-counter">
            <div className="cl-container">
              <div className="row">
                <div className="col-12">
                  <div className="heading-section text-center">
                    <h2 className="wow fadeInUp">Take a look at our numbers</h2>
                    <div className="text wow fadeInUp">
                      Based on your view history
                    </div>
                  </div>
                </div>
              </div>
              <div className="counter">
                <div className="row">
                  <div className="col-xl-3 col-md-6">
                    <div className="number-counter style-1">
                      <div className="text-center">
                        $
                        <span
                          className="number"
                          data-speed={2500}
                          data-to={16}
                          data-inviewport="yes"
                        >
                          16
                        </span>
                        .4M
                      </div>
                      <h4>
                        Owned from properties <br /> transactions
                      </h4>
                      <p className="text-content">
                        Pellentesque egestas elementum egestas faucibus sem.
                      </p>
                    </div>
                  </div>
                  <div className="col-xl-3 col-md-6">
                    <div className="number-counter style-1">
                      <div className="text-center">
                        <span
                          className="number"
                          data-speed={2500}
                          data-to={26}
                          data-inviewport="yes"
                        >
                          26
                        </span>
                        K+
                      </div>
                      <h4>
                        Properties For <br /> Buy
                      </h4>
                      <p className="text-content">
                        Pellentesque egestas elementum egestas faucibus sem.
                      </p>
                    </div>
                  </div>
                  <div className="col-xl-3 col-md-6">
                    <div className="number-counter style-1">
                      <div className="text-center">
                        <span
                          className="number"
                          data-speed={2500}
                          data-to={14}
                          data-inviewport="yes"
                        >
                          14
                        </span>
                        K+
                      </div>
                      <h4>
                        Properties Buy <br /> Sell
                      </h4>
                      <p className="text-content">
                        Pellentesque egestas elementum egestas faucibus sem.
                      </p>
                    </div>
                  </div>
                  <div className="col-xl-3 col-md-6">
                    <div className="number-counter style-1">
                      <div className="text-center">
                        <span
                          className="number"
                          data-speed={2500}
                          data-to={890}
                          data-inviewport="yes"
                        >
                          890
                        </span>
                      </div>
                      <h4>
                        Daily Completed <br /> Transactions
                      </h4>
                      <p className="text-content">
                        Pellentesque egestas elementum egestas faucibus sem.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* /flat-counter */}
          {/* luxury-home */}
          <section className="tf-section luxury-home style-5">
            <div className="cl-container">
              <div className="row justify-between">
                <div className="col-md-6">
                  <div className="image wow fadeInLeft">
                    <img src="/assets/images/section/luxury-home-4.jpg" alt="" />
                    <div className="box">
                      <div className="icon">
                        <i className="flaticon-customer" />
                      </div>
                      <div>
                        <p>Total Clients</p>
                        <h4>7,000 M</h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-5 col-md-6">
                  <div className="content">
                    <h2 className="wow fadeInUp">
                      Local expertise for <br /> luxury homes
                    </h2>
                    <div className="text-content wow fadeInUp">
                      Pellentesque egestas elementum egestas faucibus sem. Velit
                      nunc egestas ut morbi. Leo diam diam nibh eget fermentum massa
                      pretium. Mi mauris nulla ac dictum ut mauris non.
                    </div>
                    <a
                      href="#"
                      className="tf-button-primary style-black wow fadeInUp"
                    >
                      Learn More <i className="icon-arrow-right-add" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* /luxury-home */}
          {/* work-with-us */}
          <section className="tf-section work-with-us style-2 pt-0">
            <div className="cl-container">
              <div className="row">
                <div className="col-12">
                  <div className="heading-section text-center">
                    <h2 className="wow fadeInUp">Why You Should Work With Us</h2>
                    <div className="text wow fadeInUp">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </div>
                  </div>
                </div>
              </div>
              <div className="row justify-center">
                <div className="col-xl-10">
                  <div className="wrap">
                    <div className="box-icon style-1 wow fadeInUp">
                      <div className="icon has-ellipse">
                        <i className="flaticon-house-1" />
                      </div>
                      <div className="content">
                        <a href="#" className="title">
                          Wide Range of Properties
                        </a>
                        <p>
                          We offer expert legal help for all related <br /> property
                          items in Dubai.
                        </p>
                      </div>
                    </div>
                    <div
                      className="box-icon style-1 wow fadeInUp"
                      data-wow-delay="0.1s"
                    >
                      <div className="icon has-ellipse">
                        <i className="flaticon-home" />
                      </div>
                      <div className="content">
                        <a href="#" className="title">
                          Buy or Rent Homes
                        </a>
                        <p>
                          We sell your home at the best market price <br /> and very
                          quickly as well.
                        </p>
                      </div>
                    </div>
                    <div
                      className="box-icon style-1 wow fadeInUp"
                      data-wow-delay="0.2s"
                    >
                      <div className="icon has-ellipse">
                        <i className="flaticon-shield" />
                      </div>
                      <div className="content">
                        <a href="#" className="title">
                          Thrusted by Thousands
                        </a>
                        <p>
                          We offer you free consultancy to get a loan <br /> for
                          your new home.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* /work-with-us */}
          {/* flat-testimonial */}
          <section className="tf-section flat-testimonial style-1">
            <div className="testimonials">
              <div className="cl-container">
                <div className="row justify-between">
                  <div className="col-xl-4 col-md-6">
                    <div className="testimonials-inner">
                      <h2 className="wow fadeInUp">
                        What our customers are saying us?
                      </h2>
                      <div className="text wow fadeInUp">
                        Various versions have evolved over the years, sometimes by
                        accident, sometimes on purpose injected humour <br /> and
                        the like.
                      </div>
                      <div className="list">
                        <div className="item wow fadeInUp">
                          <h3>13m+</h3>
                          <p>Happy People</p>
                        </div>
                        <div className="item wow fadeInUp" data-wow-delay="0.1s">
                          <h3>4.88</h3>
                          <p>Overall rating</p>
                          <div className="ratings">
                            <i className="flaticon-star-1" />
                            <i className="flaticon-star-1" />
                            <i className="flaticon-star-1" />
                            <i className="flaticon-star-1" />
                            <i className="flaticon-star-1" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-5 col-md-6">
                    <Swiper
                      className="swiper-container padding-bottom-80 slider-testimonials arrow-style-1 pagination-style-number"
                      slidesPerView={1}
                      spaceBetween={40}
                      modules={[Pagination, A11y, Navigation]}

                      pagination={{
                        el: ".testimonials-pagination",
                        clickable: true,
                        renderBullet: function (index, className) {
                          return '<span class="' + className + '">' + (index + 1) + "</span>";
                        }
                      }}
                      navigation={{
                        prevEl: prevButtonRef.current,
                        nextEl: nextButtonRef.current,
                      }}

                      onInit={(swiper) => {
                        // Bind swiper navigation to custom buttons
                        swiper.params.navigation.prevEl = prevButtonRef.current;
                        swiper.params.navigation.nextEl = nextButtonRef.current;
                        swiper.navigation.init();
                        swiper.navigation.update();
                      }}

                    >
                      {testimonials.slice(0, 5).map((item) => (
                        <SwiperSlide key={item.id} >
                          <div className="swiper-slide">
                            <div className="testimonials-item">
                              <div className="head">
                                <div className="image wow fadeInLeft">
                                  <img src={item.image} alt="" />
                                </div>
                                <div>
                                  <div className="title wow fadeInUp">
                                    <a href="#">{item.name}</a>
                                  </div>
                                  <p className="wow fadeInUp">{item.designation}</p>
                                </div>
                              </div>
                              <div className="description wow fadeInUp">
                                {item.content}
                              </div>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={45}
                                height={44}
                                viewBox="0 0 45 44"
                                fill="none"
                              >
                                <g filter="url(#filter0_d_249_14836)">
                                  <path
                                    d="M9.67883 38C6.64234 38 4.27007 36.9524 2.56204 34.8571C0.854015 32.6667 0 29.4286 0 25.1429C0 20.6667 0.99635 16.381 2.98905 12.2857C5.07664 8.19048 8.01825 4.14286 11.8139 0.142864C11.9088 0.0476213 12.0511 0 12.2409 0C12.5255 0 12.7153 0.142858 12.8102 0.428574C13 0.619048 13.0474 0.857143 12.9526 1.14286C10.6752 4.19048 9.10949 7.14286 8.25548 10C7.49635 12.7619 7.11679 15.8571 7.11679 19.2857C7.11679 21.8571 7.44891 23.8571 8.11314 25.2857C8.77737 26.7143 9.67883 28 10.8175 29.1429L5.40876 30.1429C5.31387 28.5238 5.74088 27.2857 6.68978 26.4286C7.73358 25.5714 9.06205 25.1429 10.6752 25.1429C12.6679 25.1429 14.1861 25.7143 15.2299 26.8571C16.3686 28 16.938 29.5714 16.938 31.5714C16.938 33.6667 16.2737 35.2857 14.9453 36.4286C13.7117 37.4762 11.9562 38 9.67883 38ZM31.5985 38C28.562 38 26.1898 36.9524 24.4818 34.8571C22.8686 32.6667 22.062 29.4286 22.062 25.1429C22.062 20.5714 23.0584 16.2381 25.0511 12.1429C27.0438 8.04762 29.9854 4.04762 33.8759 0.142864C33.9708 0.0476213 34.1131 0 34.3029 0C34.5876 0 34.7774 0.142858 34.8723 0.428574C35.062 0.619048 35.1095 0.857143 35.0146 1.14286C32.7372 4.19048 31.1715 7.14286 30.3175 10C29.5584 12.7619 29.1788 15.8571 29.1788 19.2857C29.1788 21.8571 29.4635 23.9048 30.0328 25.4286C30.6971 26.8571 31.5985 28.0952 32.7372 29.1429L27.4708 30.1429C27.3759 28.5238 27.8029 27.2857 28.7518 26.4286C29.7007 25.5714 31.0292 25.1429 32.7372 25.1429C34.7299 25.1429 36.2482 25.7143 37.292 26.8571C38.4307 28 39 29.5714 39 31.5714C39 33.6667 38.3358 35.2857 37.0073 36.4286C35.7737 37.4762 33.9708 38 31.5985 38Z"
                                    fill="#1A1A1A"
                                  />
                                </g>
                                <defs>
                                  <filter
                                    id="filter0_d_249_14836"
                                    x={0}
                                    y={0}
                                    width={45}
                                    height={44}
                                    filterUnits="userSpaceOnUse"
                                    colorInterpolationFilters="sRGB"
                                  >
                                    <feFlood
                                      floodOpacity={0}
                                      result="BackgroundImageFix"
                                    />
                                    <feColorMatrix
                                      in="SourceAlpha"
                                      type="matrix"
                                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                      result="hardAlpha"
                                    />
                                    <feOffset dx={6} dy={6} />
                                    <feComposite in2="hardAlpha" operator="out" />
                                    <feColorMatrix
                                      type="matrix"
                                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                                    />
                                    <feBlend
                                      mode="normal"
                                      in2="BackgroundImageFix"
                                      result="effect1_dropShadow_249_14836"
                                    />
                                    <feBlend
                                      mode="normal"
                                      in="SourceGraphic"
                                      in2="effect1_dropShadow_249_14836"
                                      result="shape"
                                    />
                                  </filter>
                                </defs>
                              </svg>
                            </div>
                          </div>
                        </SwiperSlide>
                      ))}



                      <div className=' slider-testimonials arrow-style-1 pagination-style-number' >
                        <div className="bottom-wrap">
                          <div className="testimonials-prev has-border swiper-button-prev px-5" ref={prevButtonRef} />
                          <div className="swiper-pagination testimonials-pagination " />
                          <div className="testimonials-next has-border swiper-button-next px-5 " ref={nextButtonRef} />
                        </div>

                      </div>
                    </Swiper>

                  </div>
                </div>
              </div>
            </div>
            <div className="divider" />
            <div className="cl-container">
              <div className="row">
                <div className="col-12">
                  <div className="heading-section text-center">
                    <div className="text wow fadeInUp">
                      Thousands of world’s leading companies trust Space
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <div className="flat-brand">
                    <Swiper
                      className="swiper-container slider-brand"
                      slidesPerView={2}

                      autoplay={{ delay: 0, disableOnInteraction: false }}
                      modules={[Autoplay]}
                      speed={10000}
                      loop={true}
                      breakpoints={{
                        450: {
                          slidesPerView: 3,
                          spaceBetween: 30,
                        },
                        768: {
                          slidesPerView: 4,
                          spaceBetween: 30,
                        },
                        868: {
                          slidesPerView: 5,
                          spaceBetween: 30,
                        },
                        1400: {
                          slidesPerView: 5,
                          spaceBetween: 171,
                        },
                      }}






                    >
                      <SwiperSlide>
                        <div className="swiper-slide">
                          <div className="slogan-logo">
                            <a href="#">
                              <img
                                src="/assets/images/image-box/brand-1.png"
                                alt="images"
                              />
                            </a>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="swiper-slide">
                          <div className="slogan-logo">
                            <a href="#">
                              <img
                                src="/assets/images/image-box/brand-2.png"
                                alt="images"
                              />
                            </a>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="swiper-slide">
                          <div className="slogan-logo">
                            <a href="#">
                              <img
                                src="/assets/images/image-box/brand-3.png"
                                alt="images"
                              />
                            </a>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="swiper-slide">
                          <div className="slogan-logo">
                            <a href="#">
                              <img
                                src="/assets/images/image-box/brand-4.png"
                                alt="images"
                              />
                            </a>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="swiper-slide">
                          <div className="slogan-logo">
                            <a href="#">
                              <img
                                src="/assets/images/image-box/brand-5.png"
                                alt="images"
                              />
                            </a>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="swiper-slide">
                          <div className="slogan-logo">
                            <a href="#">
                              <img
                                src="/assets/images/image-box/brand-6.png"
                                alt="images"
                              />
                            </a>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="swiper-slide">
                          <div className="slogan-logo">
                            <a href="#">
                              <img
                                src="/assets/images/image-box/brand-1.png"
                                alt="images"
                              />
                            </a>
                          </div>
                        </div>
                      </SwiperSlide>

                    </Swiper>

                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* /flat-testimonial */}
          {/* flat-experts */}
          <section className="tf-section flat-experts style-1">
            <div className="cl-container">
              <div className="row">
                <div className="col-12">
                  <div className="heading-section text-center">
                    <h2 className="wow fadeInUp">Meet Our Team Of Experts</h2>
                    <div className="text wow fadeInUp">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </div>
                  </div>
                </div>
              </div>
              <div className="row wrap-experts">
                <div className="col-12">
                  <Swiper
                    className="swiper-container slider-news slider-auto"
                    slidesPerView={1}
                    spaceBetween={30}
                    modules={[Pagination, A11y]}
                    loop={true}

                    breakpoints={{
                      450: {
                        slidesPerView: 1,
                        spaceBetween: 30,
                      },
                      768: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                      },
                      1024: { // Adjust breakpoint to avoid overlap with 868
                        slidesPerView: 4,
                        spaceBetween: 30,
                      },
                    }}
                  >
                    {agents.map((item) => (
                      <SwiperSlide key={item.id} >
                        <div className="swiper-slide">
                          <div className="experts-item wow fadeInUp">
                            <div className="image" style={{ height: 360 }} >
                              <img src={item.image} alt="" style={{ height: "100%", objectFit: "cover" }} />
                              {/* <ul className="wg-social-1">
                                 <li>
                                   <a href="#">
                                     <i className="flaticon-facebook" />
                                   </a>
                                 </li>
                                 <li>
                                   <a href="#">
                                     <i className="flaticon-twitter" />
                                   </a>
                                 </li>
                                 <li>
                                   <a href="#">
                                     <i className="flaticon-instagram" />
                                   </a>
                                 </li>
                                 <li>
                                   <a href="#">
                                     <i className="flaticon-linkedin" />
                                   </a>
                                 </li>
                               </ul> */}
                            </div>
                            <h4>
                              <a href="#">{item.name}</a>
                            </h4>
                            <p>{item.designation}</p>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}


                  </Swiper>

                </div>
              </div>
            </div>
          </section>
          {/* /flat-experts */}
        </div>
        {/* /main-content */}
        {/* footer */}
        <Footer />
        {/* /footer */}
      </div>
      {/* /#page */}
    </div>

  )
}

export default AboutComponent