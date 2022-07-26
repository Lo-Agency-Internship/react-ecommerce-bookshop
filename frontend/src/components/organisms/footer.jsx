import React from "react";
import ItemsContainer from "../molecules/itemsContainer";
import SocialIcons from "../molecules/socialIcons";

const Footer = () => {
  return (
    <footer className="bg-[#4b5563] text-white ">
    
      <ItemsContainer />
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20
      text-center pt-3 text-gray-400 text-sm pb-4 ml-60"
      >
        <span>© 2022 All rights reserved.</span>
        <span>Terms · Privacy Policy</span>
        <SocialIcons/>
      </div>
    </footer>
  );
};

export default Footer;