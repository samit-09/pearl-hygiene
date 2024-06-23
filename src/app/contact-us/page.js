import Map from "@/components/ContactComponents/Map";
import './Contact.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import SendMessageFrom from "@/components/ContactComponents/SendMessageFrom";


export const metadata = {
    title: "Contact Us | Pearl Hygiene",
    description: `For any query contact us at - marketing@pearlhygiene.com.sa`,
  };
 

const ContactPage = () => {

    return (
        <div style={{padding: '20px'}}>


<div className="contact-pearl-logo"></div>

            <div className='py-5 text-center'><span className='contact-span'>Pearl Hygiene</span></div>
            <h1 className="contact-title">Contact Us</h1>

<div style={{display: 'flex', marginTop: '50px', marginBottom: '50px', gap: '30px'}}>

    <div>

<h3 style={{background: '#581412', width: '180px', fontSize: '30px', textAlign: 'center', margin: '20px 0', color: 'white'}}>LOCATION</h3>
            <Map/>
</div>

<div>

<h3 style={{background: '#581412', width: '250px', fontSize: '30px', textAlign: 'center', margin: '20px 0', color: 'white'}}>CONTACT INFO</h3>

<div className="contact-info-item">
    <FontAwesomeIcon icon={faLocationDot} className="contact-us-icons"/>
<p style={{fontSize: '20px'}}><span style={{fontSize: '25px', color: '#581412'}}>
    ADDRESS</span><br /> Riyadh - Al Malaz - Makkah Road (Gulf Bridge)
Beside Allianz Saudi Fransi Insurance,
PO Box: 103218, RIYAD 11695, KSA</p>
</div>


<div className="contact-info-item">
    <FontAwesomeIcon icon={faPhone} className="contact-us-icons"/>
<p style={{fontSize: '20px'}}><span style={{fontSize: '25px', color: '#581412'}}>PHONE</span><br /> 
    <Link href='tel:+966920003479'>+966920003479</Link>
    <br />
    <Link href='tel:+966560000342'>+966560000342</Link>

    </p>
</div>


<div className="contact-info-item">
    <FontAwesomeIcon icon={faEnvelope} className="contact-us-icons"/>
<p style={{fontSize: '20px'}}>
    <span style={{fontSize: '25px', color: '#581412'}}>EMAIL</span>
    <br />
    <Link href='mailto:marketing@pearlhygiene.com.sa'>marketing@pearlhygiene.com.sa</Link>
    </p>
</div>

</div>

</div>


<div >
<SendMessageFrom/>
</div>

        </div>
    );
};

export default ContactPage;