"use client";

import ErrorImage from "@/assets/ErrorImage.png"
import Image from "next/image";

const ErrorPage = () => {
    return (
        <div>
            <Image src={ErrorImage} width={500} height={500} alt="Error" className="my-5 mx-auto"/>
            <h1 className="text-red-500 text-center my-5 text-3xl uppercase">Oops! <br />Something Went Wrong... <br /><br />Please try again later</h1>            
        </div>
    );
};

export default ErrorPage;