"use client";
import { useState, useEffect } from 'react';
import { CodeIcon, HamburgetMenuClose, HamburgetMenuOpen } from "./Icons";
import Link from 'next/link';
import styles from "./Navbar.module.css";
import Image from 'next/image';
import PearlHygieneLogo from "@/assets/logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faHome, faUsers, faBriefcase, faEnvelope, faBroom, faLightbulb, faGears, faSearch } from '@fortawesome/free-solid-svg-icons';
import { get, ref } from "firebase/database";
import { database } from "@/firebaseConfig.js";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const isActive = () => false;
  const handleClick = () => setClick(!click);

  const [categories, setCategories] = useState([]);

  useEffect(() => {

    const categoriesRef = ref(database, 'categories');
    get(categoriesRef).then((snapshot) => {
      if (snapshot.exists()) {
        const categoriesArray = Object.entries(snapshot.val()).map(([id, data]) => ({
          id,
          data,
        }));
        setCategories(categoriesArray);
      }
    }).catch((error) => {
      console.error(error);
    });

  }, []);

  console.log(categories);

  const navItems = [{
    route: "Home",
    pathName: "/",
    icon: faHome
  },
  {
    route: "About Us",
    pathName: "/about-us",
    icon: faUsers
  },
  {
    route: "Products",
    pathName: "/products",
    icon: faLightbulb,
    subMenu: categories.map((category) => ({
      label: category.data.name ? category.data.name : category.data,
      pathName: `/products`,
      subCategories: category.data.subCategories
    }))
  },
  {
    route: "Services",
    pathName: "/services",
    icon: faBriefcase
  },
  {
    route: "Cleaning Sectors",
    pathName: "/cleaning-sectors",
    icon: faBroom
  },
  {
    route: "Brands",
    pathName: "/brands",
    icon: faGears
  },
  {
    route: "Contact Us",
    pathName: "/contact-us",
    icon: faEnvelope
  }];

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.nav_container}>
          <Link
            exact="true"
            href="/"
            className={styles.nav_logo}>

            <Image src={PearlHygieneLogo} alt='Pearl Hyigene Logo' width={90} height={90} />
          </Link>

          <ul className={click ? `${styles.nav_menu} ${styles.active}` : styles.nav_menu}>
            {navItems.map((navItem) => (
              <li key={navItem.route} className={styles.nav_item}>
                <Link
                  exact="true"
                  href={navItem.pathName}
                  className={`${styles.nav_links} ${isActive('/contact') ? styles.active : ''}`}
                  onClick={handleClick}
                >
                  <FontAwesomeIcon width={15} icon={navItem.icon} /> &nbsp;
                  {navItem.route} &nbsp;
                  {navItem.subMenu ? <FontAwesomeIcon width={9} icon={faChevronDown} /> : ""}
                </Link>

                {navItem.subMenu && (
                  <ul className={styles.sub_menu}>
                    
                    {navItem.subMenu.map((subNavItem, subIndex) => (

                      <li key={subIndex} style={{background: 'white'}} className={styles.catItem}>
                        <Link href={{ pathname: subNavItem.pathName, query: { category: subNavItem.label } }} className={styles.subItem}>
                          <div>
                            {subNavItem.label}
                          </div>
                        </Link>

                        {
                         subNavItem.subCategories &&  subNavItem.subCategories.map(subCat => (
                          
                          <li key={subCat} className={styles.subCatItem}>
                            <Link href={{ pathname: subNavItem.pathName, query: { category: subNavItem.label, subCategory: subCat } }}>
                            <div>{subCat}</div>
                          </Link>
                          </li>

                        ))
                        }

                      </li>
                      
                    ))}

                  </ul>
                )}
              </li>
            ))}

            <li className={styles.nav_item}>
              <div>
                
              <Link
                  exact="true"
                  className={`${styles.nav_links} ${isActive('/contact') ? styles.active : ''} ${styles.nav_links_icon}`}
                  onClick={handleClick}
                  href="/products#search"
                >
                <FontAwesomeIcon icon={faSearch} />
                </Link>
              </div>
            </li>

          </ul>

          <div className={styles.nav_icon} onClick={handleClick}>
            {click ? (
              <span className={styles.icon}>
                <HamburgetMenuClose />{" "}
              </span>
            ) : (
              <span className={styles.icon}>
                <HamburgetMenuOpen />
              </span>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
