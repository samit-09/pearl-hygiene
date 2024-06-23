"use client";
import Image from 'next/image';
import ShowRoomImage from "@/assets/showroom.jpg";
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

const AboutComponent = () => {
  const sliders = [
    { image: ShowRoomImage },
    { image: "https://pearlhygiene.com.sa/images/content/showroom1.jpg" },
    { image: "https://pearlhygiene.com.sa/images/content/showroom2.jpg" },
    { image: "https://pearlhygiene.com.sa/images/content/showroom3.jpg" },
  ];

  const responsive1 = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 1 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 1 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 1 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };

  return (
    <div className="about-container">
      <div className="py-5 text-center"><span className='about-span'>Pearl Hygiene</span></div>
      <h1 className="about-title">About Us</h1>

      <div className="about-page-carousel-container">
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
          {sliders.map((slider, index) => (
            <div key={index} className="carousel-item">
              <Image src={slider.image} width={800} height={800} alt="Pearl Hygiene Showroom" style={{ borderRadius: 10 }} />
            </div>
          ))}
        </Carousel>
      </div>

      <div className="about-text-container">
        <h2>About Pearl Hygiene</h2>
        <p>
          <span style={{ fontSize: 25 }}>P</span>earl Hygiene stands as a beacon of excellence in the realm of cleaning solutions, proudly rooted in the Kingdom of Saudi Arabia. Founded by industry veterans with decades of collective experience, our journey began with a simple yet profound vision: to redefine the standards of cleanliness through innovation, reliability, and unwavering commitment to customer satisfaction.
        </p>

        <h2>Our Mission</h2>
        <p>
          <span style={{ fontSize: 25 }}>I</span>n a remarkably short span of time, Pearl Hygiene has surged ahead, propelled by a relentless pursuit of excellence and a dedication to meeting the evolving needs of our clients. We&apos;ve swiftly carved a niche for ourselves in the competitive landscape of the cleaning industry, thanks to our dynamic approach and a steadfast focus on quality.
        </p>

        <h2>Innovative Solutions for Every Need</h2>
        <p>
          <span style={{ fontSize: 25 }}>A</span>t Pearl Hygiene, we take pride in offering an extensive range of cutting-edge products and services that cater to diverse cleaning requirements. From state-of-the-art equipment to eco-friendly cleaning agents, our offerings are designed to deliver superior results while minimizing environmental impact.
        </p>

        <h2>A Commitment to Excellence</h2>
        <p>
          <span style={{ fontSize: 25 }}>W</span>e are more than just a supplier; we are your trusted partner in cleanliness. Our team of experts works tirelessly to understand your unique challenges and provide tailored solutions that exceed expectations. Whether you&apos;re in need of routine maintenance or tackling a major cleaning project, you can rely on Pearl Hygiene to deliver results that shine.
        </p>

        <h2>Unparalleled Growth and Vision</h2>
        <p>
          <span style={{ fontSize: 25 }}>A</span>s we look to the future, Pearl Hygiene is poised for unprecedented growth and expansion. With a strategic focus on key market segments and a commitment to continuous innovation, we are charting a course towards industry leadership. Our ambition knows no bounds, and we are determined to set new standards of excellence in the cleaning industry.
        </p>

        <h2>Your Trusted Partner in Cleanliness</h2>
        <p>
          <span style={{ fontSize: 25 }}>W</span>ith Pearl Hygiene by your side, you can rest assured that your cleaning needs are in capable hands. We invite you to join us on this journey towards a cleaner, healthier, and more sustainable future. Together, we can make a difference, one immaculate space at a time.
        </p>
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
        containerClass="about-message-carousel-container"
        dotListClass="custom-dot-list-style"
      >
        <div className="about-quote-container">
          <FontAwesomeIcon icon={faQuoteLeft} className="about-quote-icon" />
          <div className="quote-divider"></div>
          <div className="quote-text">
            <p>Our continuous efforts are to earn the trust of our customers in order to be their trusted partner in providing world class cleaning solutions.</p>
            <p className="quote-author">- CHIEF EXECUTIVE OFFICER</p>
            <p className="quote-position">Pearl Hygiene</p>
          </div>
        </div>

        <div className="about-quote-container">
          <FontAwesomeIcon icon={faQuoteLeft} className="about-quote-icon" />
          <div className="quote-divider"></div>
          <div className="quote-text">
            <p>Our continuous efforts are to earn the trust of our customers in order to be their trusted partner in providing world class cleaning solutions.</p>
            <p className="quote-author">- GENERAL MANAGER</p>
            <p className="quote-position">Pearl Hygiene</p>
          </div>
        </div>

        <div className="about-quote-container">
          <FontAwesomeIcon icon={faQuoteLeft} className="about-quote-icon" />
          <div className="quote-divider"></div>
          <div className="quote-text">
            <p>Our continuous efforts are to earn the trust of our customers in order to be their trusted partner in providing world class cleaning solutions.</p>
            <p className="quote-author">- CHIEF OPERATING OFFICER</p>
            <p className="quote-position">Pearl Hygiene</p>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default AboutComponent;
