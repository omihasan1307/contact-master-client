import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIdBadge } from "@fortawesome/free-regular-svg-icons";
import AddContactModal from "../contact/AddContactModal";

const Navbar = () => {
  let [isOpen, setIsOpen] = useState(true);

  function openModal() {
    setIsOpen(true);
  }
  return (
    <div className="bg-basicColor text-white py-5 ">
      <div className=" max-w-screen-2xl mx-auto flex items-center justify-between">
        <div className="flex space-x-3">
          <FontAwesomeIcon
            className="h-8 text-secondaryColor"
            icon={faIdBadge}
          />
          <h1 className="font-serif text-2xl text-secondaryColor ">
            Contact Master
          </h1>
        </div>
        <div className="space-x-3">
          <input
            type="text"
            className="px-2 py-1 rounded focus:outline text-basicColor "
            placeholder="Search Your Contact"
          />
          <button className="px-2 py-1 border rounded">1</button>
          <button className="px-2 py-1 border rounded ">2</button>
          <button
            onClick={openModal}
            className="px-2 py-1 border-2 rounded bg-white text-basicColor hover:bg-basicColor hover:text-white"
          >
            Add Contact
            <AddContactModal isOpen={isOpen} setIsOpen={setIsOpen} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
