import AboutComponent from "@/components/AboutComponents/AboutComponent";
import './About.css'

export const metadata = {
    title: "About Us | Pearl Hygiene",
    description: `Pearl Hygiene stands as a beacon of excellence in the realm of cleaning solutions, proudly rooted in the Kingdom of Saudi Arabia. Founded by industry veterans with decades of collective experience, our journey began with a simple yet profound vision: to redefine the standards of cleanliness through innovation, reliability, and unwavering commitment to customer satisfaction.

    Our Mission
    
    In a remarkably short span of time, Pearl Hygiene has surged ahead, propelled by a relentless pursuit of excellence and a dedication to meeting the evolving needs of our clients. We've swiftly carved a niche for ourselves in the competitive landscape of the cleaning industry, thanks to our dynamic approach and a steadfast focus on quality.
    
    Innovative Solutions for Every Need
    
    At Pearl Hygiene, we take pride in offering an extensive range of cutting-edge products and services that cater to diverse cleaning requirements. From state-of-the-art equipment to eco-friendly cleaning agents, our offerings are designed to deliver superior results while minimizing environmental impact.
    
    A Commitment to Excellence
    
    We are more than just a supplier; we are your trusted partner in cleanliness. Our team of experts works tirelessly to understand your unique challenges and provide tailored solutions that exceed expectations. Whether you're in need of routine maintenance or tackling a major cleaning project, you can rely on Pearl Hygiene to deliver results that shine.
    
    Unparalleled Growth and Vision
    
    As we look to the future, Pearl Hygiene is poised for unprecedented growth and expansion. With a strategic focus on key market segments and a commitment to continuous innovation, we are charting a course towards industry leadership. Our ambition knows no bounds, and we are determined to set new standards of excellence in the cleaning industry.
    
    Your Trusted Partner in Cleanliness
    
    With Pearl Hygiene by your side, you can rest assured that your cleaning needs are in capable hands. We invite you to join us on this journey towards a cleaner, healthier, and more sustainable future. Together, we can make a difference, one immaculate space at a time.`,
  };
 
const AboutPage = () => {
    return (
        <div className='about-container'>
            <AboutComponent/>
        </div>
    );
};



export default AboutPage;