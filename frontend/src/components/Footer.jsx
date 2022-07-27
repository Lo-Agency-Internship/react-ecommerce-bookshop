import React from "react";
import ItemsContainer from "./itemsContainer";
import SocialIcons from "./socialIcons";
import {Icons} from "./menus";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white mt-80">
    
      <ItemsContainer />
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20
      text-center pt-3 text-gray-400 text-sm pb-4 ml-60"
      >
        <span>© 2022 All rights reserved.</span>
        <span>Terms · Privacy Policy</span>
        <SocialIcons Icons={Icons} />
      </div>
    </footer>
  );
};

export default Footer;