"use client";
import { Container, Typography } from "@mui/material";
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';

const SendMessageFrom = () => {

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
        <div>
            
<Container style={{background: '#fff'}}>
        <Container style={{ display: 'flex', alignItems: "center", justifyContent: 'center', backgroundColor: "#fff" }} className="mt-5 mb-3">
        <h3 style={{background: '#581412', width: '320px', fontSize: '27px', textAlign: 'center', margin: '20px 0', color: 'white', padding: '10px 0'}}>SEND US A MESSAGE</h3>
        </Container>

        <Container className="mb-10" style={{backgroundColor: '#fff'}}>
        
        <form onSubmit={handleSubmit} className="message-send-form">
          <div className="flex-input">
          <input className="message-input" type="text" name="name" placeholder="Name"  required/>
          <input className="message-input" type="email" name="email" placeholder="Email" required />
          </div>

          <div className="single-input">
          <input className="message-input" type="text" name="subject" placeholder="Subject" required/>
          <textarea className="message-area" name="message" placeholder="Enter your message" required></textarea>
          </div>
          <button type="submit" className="message-submit-btn">
            SEND
          </button>
        </form>

        </Container>
    </Container>
        </div>
    );
};

export default SendMessageFrom;