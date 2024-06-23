"use client";
import { useEffect, useState } from "react";
import { get, ref } from "firebase/database";
import { database } from "@/firebaseConfig.js";
import Image from "next/image";
import './Products.css'
import Link from "next/link";

const ProductsPage = ({ searchParams }) => {
    const searchBrand = searchParams.brand;
    const searchCategory = searchParams.category;
    const searchSubCategory = searchParams.subCategory;

    const [products, setProducts] = useState([]);
    const [brand, setBrand] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    const [searchQuery, setSearchQuery] = useState("");

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const productsPerPage = 12;

    useEffect(() => {
        const productsRef = ref(database, 'products');
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


    useEffect(() => {
        const brandRef = ref(database, `brands/${searchBrand}`);
        get(brandRef).then((snapshot) => {
            if (snapshot.exists()) {

                setBrand(snapshot.val());

            }
        }).catch((error) => {
            console.error(error);
        });
    }, [searchBrand]);


    // Get current products
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

    // Pagination
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div>
            
            {
                products[0] ? (
                    <div>
                        <h1 className="products-title">Our Products</h1>

                        {
                            !(searchBrand || searchCategory) && <div id="search">
                            <svg viewBox="0 0 420 60" xmlns="http://www.w3.org/2000/svg">
                                <rect class="bar"/>
                                
                                <g class="magnifier">
                                    <circle class="glass"/>
                                    <line class="handle" x1="32" y1="32" x2="44" y2="44"></line>
                                </g>
                        
                                <g class="sparks">
                                    <circle class="spark"/>
                                    <circle class="spark"/>
                                    <circle class="spark"/>
                                </g>
                        
                                <g class="burst pattern-one">
                                    <circle class="particle circle"/>
                                    <path class="particle triangle"/>
                                    <circle class="particle circle"/>
                                    <path class="particle plus"/>
                                    <rect class="particle rect"/>
                                    <path class="particle triangle"/>
                                </g>
                                <g class="burst pattern-two">
                                    <path class="particle plus"/>
                                    <circle class="particle circle"/>
                                    <path class="particle triangle"/>
                                    <rect class="particle rect"/>
                                    <circle class="particle circle"/>
                                    <path class="particle plus"/>
                                </g>
                                <g class="burst pattern-three">
                                    <circle class="particle circle"/>
                                    <rect class="particle rect"/>
                                    <path class="particle plus"/>
                                    <path class="particle triangle"/>
                                    <rect class="particle rect"/>
                                    <path class="particle plus"/>
                                </g>
                            </svg>
                            <input 
                            type="search" 
                            name="searchInput" 
                            aria-label="Search Products" 
                            value={searchQuery} 
                            onChange={handleSearchChange} 
                            placeholder="Search Products"
                        />
                        </div>
                        }


<div>
    {
        !(searchSubCategory || searchCategory) && (brand && searchBrand) && 
        <div className="brand-info">
            
            <Image src={brand.image} alt={searchBrand} width={500} height={500}/>
            <div>
            <h2><b>{searchBrand}</b></h2>
            <p>{brand.details}</p>
            <Link href={`${brand.url}`} target="_blank">For more info visit : <span>{brand.url}</span></Link>
            </div>

        </div>
    }
</div>


<div className="products-container">
    
{searchBrand && products
        .filter(product => product.productBrand === searchBrand)
        .map(product => (
            <div key={product.id} className="product-item">
                <Link href={`products/${product.id}`}>
                <Image src={product.images[0]} alt={product.productName} width={500} height={500}/>
                <h3>{product.productName}</h3>
                </Link>
            </div>
        ))}

{ searchCategory && !searchSubCategory && products
        .filter(product => product.productCategory === searchCategory)
        .map(product => (
            <div key={product.id} className="product-item">
                <Link href={`products/${product.id}`}>
                <Image src={product.images[0]} alt={product.productName} width={500} height={500}/>
                <h3>{product.productName}</h3>
                </Link>
            </div>
        ))
}

{ searchCategory && searchSubCategory && products
        .filter(product => (product.productCategory === searchCategory && product.productSubCategory == searchSubCategory))
        .map(product => (
            <div key={product.id} className="product-item">
                <Link href={`products/${product.id}`}>
                <Image src={product.images[0]} alt={product.productName} width={500} height={500}/>
                <h3>{product.productName}</h3>
                </Link>
            </div>
        ))
}

{
    !(searchBrand || searchCategory) && currentProducts
        .filter(product => product.productName.toLowerCase().includes(searchQuery.toLowerCase()) || product.productBrand.toLowerCase().includes(searchQuery.toLowerCase()))
        .map(product => (
            <div key={product.id} className="product-item">
                <Link href={`products/${product.id}`}>
                    <Image src={product.images[0]} alt={product.productName} width={500} height={500}/>
                    <h3>{product.productName}</h3>
                </Link>
            </div>
        ))
}

</div>

{/* Pagination Controls */}
{!(searchBrand || searchCategory) && (products.length > productsPerPage) && (
    <div style={{margin: '30px 0', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>

        <p className="text-xl text-red-900">Page: </p>

        {Array.from({ length: Math.ceil(products.length / productsPerPage) }, (_, index) => (
            <button 
            className={`pagination-button ${currentPage === index + 1 ? 'active' : ''}`} 
            key={index + 1} 
            onClick={() => paginate(index + 1)}
        >
            {index + 1}
        </button>
        ))}

    </div>
)}

                    </div>
                ) : 
                <div className="overlay">
                
                <div className="lds-facebook"><div></div><div></div><div></div></div>
                </div>
            }

        </div>
    );
};

export default ProductsPage;
