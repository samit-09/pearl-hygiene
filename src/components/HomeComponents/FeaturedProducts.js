"use client";

import Image from "next/image";
import Link from "next/link";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import 'aos/dist/aos.css';
import { useEffect, useState } from "react";
import {get, ref} from "firebase/database";
import {database} from "@/firebaseConfig.js"

const FeaturedProducts = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const productsRef = ref(database, 'featuredProducts');
    get(productsRef).then((snapshot) => {
        if (snapshot.exists()) {
            const productsArray = Object.entries(snapshot.val()).map(([id, data]) => ({
                id,
                ...data,
            }));
            setProducts(productsArray);
        }
    }).catch((error) => {
        console.error(error);
    });
}, []);

    

  // const products = [
  //   {
  //     id: 1,
  //     title: "Nilfisk MC 4M",
  //     image: "https://chbibcare.com/prodimages/tn_prod-20200929171322.jpg"
  //   },
  //   {
  //     id: 2,
  //     title: "Egholm CR2260",
  //     image: "https://chbibcare.com/prodimages/tn_prod-20201010091033.jpg"
  //   },
  //   {
  //     id: 3,
  //     title: "Nilfisk CS7010 D Hybrid",
  //     image: "https://chbibcare.com/prodimages/tn_prod-20200929170523.jpg"
  //   },
  //   {
  //     id: 4,
  //     title: "Nilfisk GM 80P",
  //     image: "https://chbibcare.com/prodimages/tn_prod-20201004090025.jpg"
  //   },
  //   {
  //     id: 5,
  //     title: "TMB TPO 43 Orbital",
  //     image: "https://chbibcare.com/prodimages/tn_prod-20200925182548.jpg"
  //   },
  //   {
  //     id: 6,
  //     title: "Nilfisk SC500 53B",
  //     image: "	https://chbibcare.com/prodimages/tn_prod-20200915201605.jpg"
  //   },
  //   {
  //     id: 7,
  //     title: "Nilfisk GD10",
  //     image: "https://chbibcare.com/prodimages/tn_prod-20200923184507.jpg"
  //   }
  // ]


  const responsive2 = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 6
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 565 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 564, min: 0 },
      items: 1
    }
  };

    return (
        <div>
            <div  data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1260"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top-center"
            >
            <div style={{ textAlign: "center", margin: "50px 0" }}>
            <h1 style={{ fontSize: 30, textTransform: "uppercase", color: "#581412", margin: '50px' }}>Featured Products
            <span className="fancy-brown" style={{width: "72px", display: 'block', margin: '5px auto'}}></span>
            </h1>

    {
      products[0] ? 
      <Carousel
              responsive={responsive2}
              swipeable={true}
              draggable={true}
              showDots={true}
              infinite={true}
              autoPlaySpeed={3000}
              autoPlay={true}
              keyBoardControl={true}
              transitionDuration={500}
              containerClass="carousel-container"
              dotListClass="custom-dot-list-style"
            >
    
              {
                products.map((product) => (
                  <div className="product-slider-item" key={product}>
                    <Link href={`products/${product.id}`}>
                      <Image src={product.image} width={500} height={500} alt={product.title} />
                      <p>{product.title}</p>
                    </Link>
    
                  </div>
                ))
              }
    
            </Carousel> : <div className="overlay">
                
                <div className="lds-facebook"><div></div><div></div><div></div></div>
                </div>
    }        
    
    
          </div>
    
            </div>
        </div>
    );
};

export default FeaturedProducts;