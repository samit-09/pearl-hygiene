'use client';

import Image from "next/image";
import Link from "next/link";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './AboutUs.css'


const AboutUsComponent = () => {

  useEffect(() => {
    AOS.init({
      disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
      startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
      initClassName: 'aos-init', // class applied after initialization
      animatedClassName: 'aos-animate', // class applied on animation
      useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
      disableMutationObserver: false, // disables automatic mutations' detections (advanced)
      debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
      throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
      
    
      // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
      offset: 120, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 400, // values from 0 to 3000, with step 50ms
      easing: 'ease', // default easing for AOS animations
      once: false, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: 'top-bottom', //
    });
  }, []);

    
  const sliders = [
    {
      image: "https://pearlhygiene.com.sa/images/content/showroom1.jpg"
    },
    {
      image: "https://pearlhygiene.com.sa/images/content/showroom2.jpg"
    },
    {
      image: "https://pearlhygiene.com.sa/images/content/showroom3.jpg"
    },
  ]

  
  const responsive1 = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

    return (
        // React Component
<div data-aos="fade-left"
    data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="1260"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="true"
    data-aos-anchor-placement="top-center"
    className="aos-container">
    <h2 className="about-link-header">
        <Link href="/about-us" className="about-link">
            <span className="fancy">About &nbsp; Us</span>
        </Link>
    </h2>

    <div className="about-content">
        <div className="about-text">
            <h1 className="home-about-title">
                <Link href="/about-us">About Pearl Hygiene</Link>
            </h1>
            <p className="about-description">
                Pearl Hygiene, a Saudi owned, young and dynamic company formed by long servicing industry experts in the business, encompassing decades of product and market experiences.
                Pearl Hygiene, in a short span of time has gained enviable momentum in the cleaning business with several new range of innovative products and services, which are being well received by the industry. We aim to be your one stop shop solution for all cleaning needs.
                We have very ambitious growth plan to focus on key market segments and introducing never seen before products and secure a leadership position.
            </p>
            <div className="read-more-container">
                <Link className="readMoreLink" href="/about-us">Read More</Link>
            </div>
        </div>

        <Carousel
            responsive={responsive1}
            swipeable={true}
            draggable={true}
            showDots={false}
            infinite={true}
            autoPlaySpeed={3000}
            autoPlay={true}
            arrows={false}
            keyBoardControl={true}
            transitionDuration={500}
            containerClass="about-carousel-container"
            dotListClass="custom-dot-list-style"
        >
            {
                sliders.map((slider) => (
                    <div key={slider} className="slider-image-container">
                        <Image src={slider.image} width={500} height={500} alt="About Pearl Hygiene" className="slider-image"/>
                    </div>
                ))
            }
        </Carousel>
    </div>
</div>
    );
};

export default AboutUsComponent;