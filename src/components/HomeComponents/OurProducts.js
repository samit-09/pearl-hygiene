import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Grid } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { faBolt, faCartShopping, faFilter, faFlag, faMap, faRotate, faSnowflake } from "@fortawesome/free-solid-svg-icons";

const OurProducts = () => {
    return (
        <div>
      <div style={{ textAlign: "center", margin: "50px 0" }}>
        <h1 style={{ fontSize: 30, textTransform: "uppercase", color: "#581412" }}>Our Products</h1>
        <p style={{ margin: "10px 15%", fontSize: "18px", color: "gray" }}>Keeping your office, manufacturing facility, shopping malls clean on a day to day basis can be a challenging proposition. With Pearl Hygiene by your side we shall be your trusted partner to provide professional consulting service and industry specific cleaning solutions.</p>

        <hr style={{ background: "#581412", height: '4px', width: '63px', margin: "20px auto", borderRadius: "10px" }} />
      </div>

      <div>

        <div style={{ margin: "80px 0", padding: "20px" }}>

          <Grid container spacing={1} alignItems="center">

            <Grid item md={4} sm={12} xs={12}>

              <div className="ourProductsItem">

                <FontAwesomeIcon icon={faBolt} />

                <div >
                  <Link href="/"><h3 style={{ textAlign: "start" }}>Category Wise Products</h3></Link>
                  <p>Explore our full range of Professional cleaning products for your cleaning requirement solution.</p>
                </div>

              </div>

              <div className="ourProductsItem">

                <FontAwesomeIcon icon={faSnowflake} />
                <div>
                  <Link href="/"><h3 style={{ textAlign: "start" }}>Industry wise Products</h3></Link>
                  <p>Find complete cleaning and hygiene solution for you workplace, factory, institution or facility under one roof.</p>
                </div>

              </div>

              <div className="ourProductsItem">

                <FontAwesomeIcon icon={faCartShopping} />

                <div>
                  <Link href="/"><h3 style={{ textAlign: "start" }}>Brand wise Products</h3></Link>
                  <p>Choose products from our selected world leading, well established and high quality committed brands.</p>
                </div>


              </div>
            </Grid>

            <Grid item md={4} sm={12} xs={12}>

              <Image src={ProductCenter1} alt="Pearl Hygiene Product" width={350} height={350} style={{ margin: "10px auto", display: 'block' }} />

            </Grid>

            <Grid item md={4} sm={12} xs={12}>

              <div className="ourProductsItem">

                <div >
                  <Link href="/"><h3>Futuristic Products</h3></Link>
                  <p>Future is Here. Pearl Hygiene is your trusted partner for your futuristic needs in AI based Robotics.</p>
                </div>
                <FontAwesomeIcon icon={faBolt} />

              </div>

              <div className="ourProductsItem">

                <div >
                  <Link href="/"><h3>Novelty and Special Products</h3></Link>
                  <p>Our range of special exclusive hygiene products, chosen from premium manufacturers round the globe.</p>
                </div>
                <FontAwesomeIcon icon={faFlag} />

              </div>

              <div className="ourProductsItem">

                <div >
                  <Link href="/"><h3>New Arrivals</h3></Link>
                  <p>Explore our range of new featured products for your peace of mind and extreme comfort level.</p>
                </div>
                <FontAwesomeIcon icon={faFilter} />

              </div>
            </Grid>

          </Grid>
        </div>

        <div style={{ padding: 20, margin: "60px 0" }}>

          <Grid container spacing={1} alignItems="center">

            <Grid item md={4} sm={12}>
              <div className="ourProductsGridItem">
                <FontAwesomeIcon icon={faBolt} />
                <h3>Futuristic Products</h3>
                <p>Future is Here. Pearl Hygiene is your trusted partner for your futuristic needs in AI based Robotics.</p>
                <Link href="/">Read More</Link>
              </div>
            </Grid>

            <Grid item md={4} sm={12}>

              <div className="ourProductsGridItem" style={{ background: "#581412" }}>
                <FontAwesomeIcon icon={faMap} />
                <h3>AFTER SALES</h3>
                <p>Pearl Hygiene service team assures equipment&apos;s and tools performance according to buyers&apos; expectations.</p>
                <Link style={{ background: "white", color: "#581412" }} href="/">Request for service</Link>
              </div>

            </Grid>

            <Grid item md={4} sm={12}>

              <div className="ourProductsGridItem">
                <FontAwesomeIcon icon={faRotate} />
                <h3>CONSULTATION</h3>
                <p>Our Experts provide most appropriate and cost effective solutions catering to business dynamics.</p>
                <Link href="/">Read More</Link>
              </div>

            </Grid>
          </Grid>






        </div>
      </div>
            
        </div>
    );
};

export default OurProducts;