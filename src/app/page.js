import Link from "next/link";
import TopCarousel from "@/components/HomeComponents/TopCarousel";
import AboutUsComponent from "@/components/HomeComponents/AboutUsComponent";
import FeaturedProducts from "@/components/HomeComponents/FeaturedProducts";
import OurServices from "@/components/HomeComponents/OurServices";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faWandMagicSparkles } from "@fortawesome/free-solid-svg-icons";

const HomePage = () => {

  return (
    <div>

<TopCarousel/>

<AboutUsComponent/>

<FeaturedProducts/>



<div className="catalog-container">
    <h2 className="catalog-heading">
        Browse our product catalog  &nbsp;
        <FontAwesomeIcon icon={faWandMagicSparkles}/> &nbsp;
        Download now to discover more!
    </h2>
    <Link className="catalog-download-link" href="./pdf/products_catalog.pdf" target="_blank" rel="noopener noreferrer">
        Download Now <FontAwesomeIcon icon={faDownload}/>
    </Link>
</div>


<OurServices/>

    </div>
  );
};

export default HomePage;