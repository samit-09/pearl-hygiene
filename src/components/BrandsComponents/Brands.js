"use client";

import { useEffect, useState } from "react";
import {get, ref} from "firebase/database";
import {database} from "@/firebaseConfig.js"
import Image from "next/image";
import Link from "next/link";

const Brands = () => {

    const [brands, setBrands] = useState([]);

    useEffect(() =>{
        const brandsRef = ref(database, 'brands');

        get(brandsRef).then((snapshot) =>{
            if(snapshot.exists()){
                const brandsArray = Object.entries(snapshot.val()).map(([id, data]) => ({
                    id,
                    ...data,
                }));;
                setBrands(brandsArray);
            }
        }).catch((error) =>{
            console.error(error);
        });

    }, []);

    return (
<div>
{
                brands[0] ? <div>
                    <h1 className="brands-title">Our Brands</h1>
            <div id="brands-data">

            {
                brands.map((brand) => (
                    <div className="brand-item" key={brand}>
                        <Link href={{
    pathname: '/products',
    query: { brand: brand.id },
  }}>
                        <div>
                        <Image src={brand.image} width={200} height={200} alt={brand.id}/>
                        </div>
                        <h3>{brand.id}</h3>

                        <Link href={{
    pathname: '/products',
    query: { brand: brand.id },
  }}
  ><button className="view_products_btn">View Products</button></Link>
                        </Link>
                    </div>
                ))
            }

</div>
                </div> : <div className="overlay">
                
                <div className="lds-facebook"><div></div><div></div><div></div></div>
                </div>
            }
        </div>
    );
};

export default Brands;