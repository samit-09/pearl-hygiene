import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Grid } from "@mui/material";
import Link from "next/link";
import { faFilter, faFlag, faHandshake, faSnowflake } from "@fortawesome/free-solid-svg-icons";
import './OurServices.css';

const OurServices = () => {
    return (
        <div>
            
      <div className="services-header">
        <h1 >Our Services</h1>
        <p>Pearl Hygiene is adjudged as one of the largest provider of cleaning solutions in the Kingdom of Saudi Arabia by Industry standards and experts. Established in the year 1986 in Riyadh the Company is anchored by a dedicated workforce of more than 50 professionals.
        
        <span className="fancy-brown"></span>

        </p>
      </div>


      <div style={{ margin: "80px 0", padding: '10px' }}>
        <Grid container spacing={2} >

          <Grid item md={6} sm={12} xs={12} xl={3} lg={6}>

            <div className="ourServicesItem">
              <FontAwesomeIcon icon={faHandshake} />

              <div>
                <h4>
                  CONSULTING
                </h4>
                <p>Our Experts provide most appropriate and cost effective solutions catering to business dynamics.</p>
                <Link href='/'>Read More</Link>
              </div>

            </div>
          </Grid>

          <Grid item md={6} sm={12} xs={12} xl={3} lg={6}>

            <div className="ourServicesItem">
              <FontAwesomeIcon icon={faFlag} />

              <div>
                <h4>
                  TRAINING
                </h4>
                <p>Pearl Hygiene offers free of cost onsite training to clients&apos; representatives for better performance. <br /></p>
                <Link href='/'>Read More</Link>
              </div>

            </div>
          </Grid>

          <Grid item md={6} sm={12} xs={12} xl={3} lg={6}>

            <div className="ourServicesItem">
              <FontAwesomeIcon icon={faFilter} />

              <div>
                <h4>
                AFTER SALES
                </h4>
                <p>Pearl Hygiene service team assures equipment&apos;s and tools performance according to buyers&apos; expectations.</p>
                <Link href='/'>Read More</Link>
              </div>

            </div>
          </Grid>

          <Grid item md={6} sm={12} xs={12} xl={3} lg={6}>

            <div className="ourServicesItem">
              <FontAwesomeIcon icon={faSnowflake} />

              <div>
                <h4>
                  RENTALS
                </h4>
                <p>
                  Pearl Hygiene look forward to tailor its offerings to match your specific business needs to assure quality of service.</p>
                <Link href='/'>Read More</Link>
              </div>

            </div>
          </Grid>

        </Grid>
      </div>

        </div>
    );
};

export default OurServices;