"use client";
import styles from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faXTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Link from "next/link";
import { Container, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Vision2030 from "@/assets/vision_2030.png";
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';


const Footer = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
      
        // Send email using EmailJS

        emailjs.init("9ms6th_t81CpzqhZc")

        emailjs.sendForm('service_6c4n1nk', 'template_tq686aw', e.target)
          .then((result) => {
            console.log('Email sent successfully:', result.text);

            Swal.fire({
                icon: 'success',
                title: 'Success!',
                text: 'Email sent successfully!\nThank you very much!',
              });

              e.target.reset();

          }, (error) => {
            console.error('Error sending email:', error.text);
            // Optionally, show an error message to the user
            Swal.fire({
                icon: 'error',
                title: 'Oops 🥴',
                text: 'Failed to send email. Please try again later.',
              });

          });

        // console.log(e.target);

      }

    return (
        <footer>

            <div className={styles.footer_dark}>

            <Grid container spacing={1}>


            <Grid item md={5} sm={12} xs={12}>
    <Container className="ms-5">
    <div style={{ display: 'flex', alignItems: "center" }} className="mt-5 mb-3">
            <Typography variant="h6" className="poppins"><b>CONTACT INFO</b></Typography>
        </div>

        <div>
<p className="my-3 text-base">
                
                <b>Email: </b>
                <Link href='mailto:marketing@pearlhygiene.com.sa'>
                marketing@pearlhygiene.com.sa
                </Link>
</p>
<p className="my-3 text-base">
    
    <b>Marketing & Sales Enquiries: </b>
                <Link href='tel:+966 56 000 0342'>
                +966 56 000 0342
                </Link>
</p>
<p className="my-3 text-base">
    
    <b>Service Enquiries: </b>
                <Link href='tel:0112486986'>
                011 2486986
                </Link>
</p>

                <p className="my-3 text-base">
                    <b>Location: </b>
                    <a target="_blank" href='https://maps.app.goo.gl/KC4TEKwrazZvwYpC8' >
                    Abdullah Al Hamathani, Near Al Harbi Market, Al Malaz District, PO Box 103218, Riyadh 11695, Kingdom of Saudi Arabia
                </a>
                </p>

                <div>

                    <ul className={styles.wrapper}>

                        <li>
                            <Link href="/" className={`${styles.icon} ${styles.facebook}`}>
                            <span className={styles.tooltip}>Facebook</span>
                            <FontAwesomeIcon icon={faFacebookF} style={{ width: 9 }} />
                        </Link>
                        </li>

                        <li>
                            <Link href="/" className={`${styles.icon} ${styles.twitter}`} >
                            <span className={styles.tooltip}>X</span>
                            <FontAwesomeIcon icon={faXTwitter} style={{ width: 13 }} />
                        </Link>
                        </li>
                        

                        <li>
                            <Link href="/" className={`${styles.icon} ${styles.instagram}`}>
                            <span className={styles.tooltip}>Instagram</span>
                            <FontAwesomeIcon icon={faInstagram} style={{ width: 13 }} />
                        </Link>
                        </li>

                        <li>
                            <Link href="/" className={`${styles.icon} ${styles.linkedin}`}>
                            <span className={styles.tooltip}>LinkedIn</span>
                            <FontAwesomeIcon icon={faLinkedin} style={{ width: 13 }} />
                        </Link>
                        </li>

                        
                        
                    </ul>
                </div>

        </div>

    </Container>

</Grid>

<Grid item md={3} sm={12} xs={12}>

<Container>
    <Container style={{ display: 'flex', alignItems: "center" }} className="mt-5 mb-3">
            <Typography variant="h6" className="poppins"><b>COMPANY</b></Typography>
        </Container>

        <Container>
            
        <ul style={{listStyle: "disc", margin: "0 15px"}}>

            <li className={styles.footer_links}>
                <Link href='/'>
                Home
                </Link>
            </li>

            <li className={styles.footer_links}>
                <Link href='/about-us'>
                About Us
                </Link>
            </li>

            <li className={styles.footer_links}>
                <Link href='/products'>
                Products
                </Link>
            </li>

            <li className={styles.footer_links}>
                <Link href='/cleaning-sectors'>
                Cleaning Sectors
                </Link>
            </li>

            <li className={styles.footer_links}>
                <Link href='/brands'>
                    Brands
                </Link>
            </li>

            <li className={styles.footer_links}>
                <Link href='/contact-us'>
                Contact Us
                </Link>
            </li>
        </ul>

        </Container>

    </Container>
    
</Grid>


<Grid item md={4} sm={12} xs={12}>

    <Container>
        <Container style={{ display: 'flex', alignItems: "center" }} className="mt-5 mb-3">
            <Typography variant="h6" className="poppins"><b>REACH US</b></Typography>
        </Container>

        <Container className="mb-10">
        <Typography variant="p" className="poppins my-2">Send us a message</Typography>
        
        <form onSubmit={handleSubmit}>
          <input className={styles.searchInput} type="text" name="name" placeholder="Name" required/>
          <input className={styles.searchInput} type="email" name="email" placeholder="Email" required/>
          <textarea className={styles.textarea} name="message" placeholder="Enter your message" required></textarea>
          <button type="submit" className={styles.searchButton}>
            SEND
          </button>
        </form>

        </Container>
    </Container>
</Grid>

</Grid>
<div style={{ fontSize: 17, textAlign: 'center', paddingBottom: "20px" }}>© 2024 <Link href="/">Pearl Hygiene</Link>  &nbsp;-  &nbsp; All Rights Reserved</div>
            </div>

            <div style={{ display: "flex", justifyContent: 'space-between', alignItems: 'center', padding: "10px 60px 30px 50px", flexWrap: 'wrap'}}>
                
                <Link href="https://vision2030.gov.sa" target="_blank">
                <Image src={Vision2030} width={100} height={100} alt="Saudi Vision 2030 Logo"/>
                </Link>

                <Link href="https://sparknetco.com" target="_blank"> Developed By -  <span style={{ fontSize: 17, color: "#13072E", textDecoration: "underline"}}>SparkNet Corporation </span></Link> 

            </div>

        </footer>
    );
};

export default Footer;