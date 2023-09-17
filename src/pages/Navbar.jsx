import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIdBadge } from "@fortawesome/free-regular-svg-icons";

const Navbar = () => {
  return (
    <div className="bg-basicColor text-white py-5 ">
      <div className=" max-w-screen-2xl mx-auto">
        <div className="flex space-x-3">
          <FontAwesomeIcon className="h-8 " icon={faIdBadge} />
          <h1 className="font-serif text-2xl">Contact Master</h1>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
