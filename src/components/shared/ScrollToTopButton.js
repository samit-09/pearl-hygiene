"use client"
import ScrollToTop from "react-scroll-to-top";

const ScrollToTopButton = () => {
    return (
        <div>
            <ScrollToTop smooth color="white" width="18" height="18" style={{display: "flex", justifyContent: "center", alignItems: "center", background: "#581412", width: "40px", right: 15, bottom: 15, borderRadius: 5}}/>

        </div>
    );
};

export default ScrollToTopButton;