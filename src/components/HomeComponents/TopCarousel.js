"use client";

import Link from "next/link";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useEffect, useState } from "react";
import {get, ref} from "firebase/database";
import {database} from "@/firebaseConfig.js"
import './TopCarousel.css'

const TopCarousel = () => {

  const [sliders, setSliders] = useState([]);

  useEffect(() =>{
      const slidersRef = ref(database, 'sliders');

      get(slidersRef).then((snapshot) =>{
          if(snapshot.exists()){
              const slidersArray = Object.entries(snapshot.val()).map(([id, data]) => ({
                  id,
                  ...data,
              }));;
              setSliders(slidersArray);
          }
      }).catch((error) =>{
          console.error(error);
      });

  }, []);


  

    
  // const sliders = [
  //   {
  //     title: "Glutton® Collect®  Street Vacuum Cleaner",
  //     subtitle: "The Glutton waste vacuum cleaner collects and removes everything in its path",
  //     link: "/",
  //     image: "https://chbibcare.com/images/slides/Glutton-Vacuum.jpg"
  //   },
  //   {
  //     title: "Egholm City Ranger 2260",
  //     subtitle: "     Keeping outdoor areas clean round the year.   ",
  //     link: "/",
  //     image: "https://chbibcare.com/images/slides/011.jpg"
  //   },
  //   {
  //     title: "Comac HP 6000",
  //     subtitle: "Futuristic, modern & new technology. High performance 6 cu.m. street sweeper with Twin Action System",
  //     link: "/",
  //     image: "https://chbibcare.com/images/slides/010-1.jpg"
  //   },
  // ]

  
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
        <div>
          {
            sliders[0] ? (<Carousel
                responsive={responsive1}
                swipeable={true}
                draggable={true}
                showDots={true}
                infinite={true}
                autoPlaySpeed={4000}
                autoPlay={true}
                keyBoardControl={true}
                transitionDuration={500}
                containerClass="carousel-container"
                dotListClass="custom-dot-list-style"
            >
                {
                    sliders.map((slider) => (
                        <div key={slider} className="slider-item" style={{background: `url(${slider.image})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundAttachment: 'local'}}>
                            <h1 className="slider-title">{slider.title}</h1>
                            <h3 className="slider-subtitle">{slider.subtitle}</h3>
                            <Link href={`products/${slider.id}`} className="slider-link">
                                View Product Details
                            </Link>
                        </div>
                    ))
                }
            </Carousel>) : (<div className="overlay">
                <div className="lds-facebook"><div></div><div></div><div></div></div>
            </div>)
        }
        </div>
    );
};

export default TopCarousel;