"use client";

import "./Product.css"
import { useEffect, useState } from "react";
import {get, ref} from "firebase/database";
import {database} from "@/firebaseConfig.js"
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShare } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";

const ProductDetails = ({params}) => {

    const [product, setProduct] = useState([]);

    useEffect(() =>{
        const productRef = ref(database, `products/${params.id}`);

        get(productRef).then((snapshot) =>{
            if(snapshot.exists()){

                setProduct(snapshot.val());

            }
        }).catch((error) =>{
            console.error(error);
        });

    }, [params.id]);

    let name = product.productName, images = product.images, description = product.productDescription, code =  product.productCode, brand =  product.productBrand, category =  product.productCategory, specifications = product.specifications, subCategory = product.subCategory;
    
    let shortDescription;
    if (description) {
    const words = description.split(' ');
    shortDescription = words.slice(0, 36).join(' ');
    }
    
    if(images){
        images = images.map(url => ({
            original: url,
            thumbnail: url
          }));
    }

    const handleShare = () => {
        if (navigator.clipboard && window.isSecureContext) {
          // Use the Clipboard API to copy the URL
          navigator.clipboard.writeText(window.location.href).then(() => {
            // Show the SweetAlert2 dialog
            Swal.fire({
              title: 'Copied!',
              text: 'The URL has been copied to your clipboard.',
              icon: 'success',
              confirmButtonText: 'OK'
            });
          }).catch((err) => {
            console.error('Failed to copy: ', err);
            Swal.fire({
              title: 'Error',
              text: 'Failed to copy the URL. Please try again.',
              icon: 'error',
              confirmButtonText: 'OK'
            });
          });
        } else {
          // Fallback method for older browsers
          const textArea = document.createElement('textarea');
          textArea.value = window.location.href;
          textArea.style.position = 'fixed';  // Avoid scrolling to bottom
          document.body.appendChild(textArea);
          textArea.focus();
          textArea.select();
          try {
            document.execCommand('copy');
            Swal.fire({
              title: 'Copied!',
              text: 'The URL has been copied to your clipboard.',
              icon: 'success',
              confirmButtonText: 'OK'
            });
          } catch (err) {
            console.error('Fallback: Oops, unable to copy', err);
            Swal.fire({
              title: 'Error',
              text: 'Failed to copy the URL. Please try again.',
              icon: 'error',
              confirmButtonText: 'OK'
            });
          }
          document.body.removeChild(textArea);
        }
      };

    return (
        
        <div>
            {
                name ? <div>
                <div className="product-details-top">
    
                    <h2>Product Details - <b>{name}</b></h2>
                </div>
    
    <div className="product-details-main">
    
    {images && (
        <div className="product-image-container">
            
            <ImageGallery items={images} showFullscreenButton={false} showPlayButton={false} showBullets={false} showIndex={false} showNav={true} infinite={true} autoPlay={false}/>
        </div>
    
    )}
    
    <div className="product-details-text">
        <h2>{name}</h2>
        <h3>Brand: <span><Link href={{pathname: '/products', query: {brand: brand}}}>{brand}</Link></span></h3>
        <h3>Category: <span><Link href={{pathname: '/products', query: {category: category}}}>
          {category}
          </Link></span></h3>
        <h3>Code: <span>{code}</span></h3>
        <p><span>{shortDescription} ...</span> <Link href="#product-description">Read More</Link></p>
        <div className="product-details-btns">
        <Link href={{pathname: '/request-quote', query: {id: params.id}}}><button id="requestBtn">Request for Quotation</button></Link>
        <button title="Share This Product" id="shareBtn" onClick={handleShare}><FontAwesomeIcon icon={faShare}/></button>
        </div>
    </div>
    </div>
    
    <div id="product-description">
         <h2>Product Description</h2>
         <br />
        <p>{description}</p>
    </div>
    
    <div id="product-specifications">
         <h2>Product Specifications</h2>
         <br />
    
    <div>
    {specifications && (
            <table className="spec-table">
              <tbody>
                {specifications.map((spec) => (
                  <tr key={spec.field}>
                    <td>{spec.field}</td>
                    <td>{spec.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
    </div>
    
    </div>
    
            </div> : <div className="overlay">
                
            <div className="lds-facebook"><div></div><div></div><div></div></div>

            </div>
            }
        </div>

    );
};

export default ProductDetails;