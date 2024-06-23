"use client";

import { useEffect, useState } from "react";
import {get, ref} from "firebase/database";
import {database} from "@/firebaseConfig.js"
import './Styles.css'
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';
import Image from "next/image";

const RequestQuotePage = ({searchParams}) => {


    const handleSubmit = (e) => {
        e.preventDefault();
      
        // Send email using EmailJS
        emailjs.init("9ms6th_t81CpzqhZc")

        emailjs.sendForm('service_6c4n1nk', 'template_muf7139', e.target)
          .then((result) => {
            console.log('Quotation sent successfully:', result.text);

            Swal.fire({
                icon: 'success',
                title: 'Success!',
                text: 'Quotation sent successfully!\nThank you very much!',
              });

              e.target.reset();

          }, (error) => {
            console.error('Error sending quotation:', error.text);
            // Optionally, show an error message to the user
            Swal.fire({
                icon: 'error',
                title: 'Oops 🥴',
                text: 'Failed to send quotation. Please try again later.',
              });

          });

      }

    const id = searchParams.id;

    const [product, setProduct] = useState([]);

    useEffect(() =>{
        const productRef = ref(database, `products/${id}`);

        get(productRef).then((snapshot) =>{
            if(snapshot.exists()){

                setProduct(snapshot.val());

            }
        }).catch((error) =>{
            console.error(error);
        });

    }, [id]);

    let name = product.productName, images = product.images, code =  product.productCode, brand =  product.productBrand;

    console.log(product);

    return (
        <div>
            {images ?
            
            <div>
                <div className="request-quotation-top">
    
                    <h2><span>Request for Quotation</span></h2>
                    <h2><b>{name}</b></h2>
                </div>

          <div className="request-quotation-main">

          <div className="quotation-form-container">
                <form onSubmit={handleSubmit} className="quotation-message-send-form">

                <div className="flex-input">
          <div>
            <label htmlFor="productName"><b>*</b>Product</label>
          <input className="message-input" type="text" name="productName" placeholder="Name" readOnly value={name}/>
          </div>
          <div>
          <label htmlFor="productBrand"><b>*</b>Brand</label>
          <input className="message-input" type="text" name="productBrand" placeholder="Brand" readOnly value={brand}/>
          </div>
          </div>

          <div className="flex-input" style={{display: 'none'}}>
          <div>
            <label htmlFor="productCode"><b>*</b>Product Code</label>
          <input className="message-input" type="text" name="productCode" placeholder="Code" readOnly value={code}/>
          </div>
          <div>
          <label htmlFor="productId"><b>*</b>Id</label>
          <input className="message-input" type="text" name="productId" placeholder="Id" readOnly value={id}/>
          </div>
          </div>


          <div className="flex-input">
          <div>
            <label htmlFor="name"><b>*</b>Name</label>
            <input className="message-input" type="text" name="name" placeholder="Name" required />
          </div>
          

          <div>
            <label htmlFor="email"><b>*</b>Email</label>
            <input className="message-input" type="email" name="email" placeholder="Email" required/>
          </div>

          </div>

          <div className="single-input">

          <label htmlFor="subject"><b>*</b>Subject</label>
          <input className="message-input" type="text" name="subject" placeholder="Subject" required/>

          <label htmlFor="message"><b>*</b>Message</label>
          <textarea className="message-area" name="message" placeholder="Enter your message" required></textarea>
          </div>
          <button type="submit" className="message-submit-btn">
            SEND
          </button>
        </form>
                </div>

                <div>
                    <Image src={images[0]} width={500} height={500} alt={name}/>
                </div>

          </div>
                
                </div>

            :<div className="overlay">
                
                <div className="lds-facebook"><div></div><div></div><div></div></div>
    
                </div>}            
        </div>
    );
};

export default RequestQuotePage;