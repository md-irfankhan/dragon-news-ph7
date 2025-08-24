import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";


const FindUs = () => {
    return (
        <div>
            <h1 className="font-bold my-2.5">Find Us</h1>
            <div className="join join-vertical flex">
                <button className="btn join-item items-center border border-base-300 bg-white"><FaFacebook></FaFacebook> Facebook</button>
                <button className="btn join-item items-center border border-base-300 bg-white"><FaInstagram></FaInstagram> Instagram</button>
                <button className="btn join-item items-center border border-base-300 bg-white"><FaTwitter></FaTwitter> Twitter</button>
               
            </div>
        </div>
    );
};

export default FindUs;