import Link from "next/link";
import NotFoundImage from "@/assets/notFound.png"
import Image from "next/image";

const NotFound = () => {
    return (
        <div>
            <Image src={NotFoundImage} width={450} height={450} alt="Not Found" className="my-5 mx-auto"/>
            <div className="my-5 text-center">
            <h1 className="my-5 text-4xl text-red-800 uppercase text-center">You lost - Page Not Found 😪</h1>
            <Link href="/" className="text-white bg-red-950 py-2 px-4 rounded-sm text-2xl">Go Back</Link>
            </div>
        </div>
    );
};

export default NotFound;