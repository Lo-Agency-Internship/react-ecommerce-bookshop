import React from "react";
import images from "../../assets/images/notfound4.jpg"

const PageNotFound = () => {
    return (
        <div className="h-screen w-screen flex items-center justify-center">
            <img src={images} alt="Img" />
        </div>
    );
}

export default PageNotFound;