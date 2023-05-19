import React from "react";
import "../../style/Header.css";
import Barcode from "react-barcode";
import logo from "../../assets/images/e-prescription-logo-blue.png";
import PrefixID from "./PrefixID";
import AccessCode from "./AccessCode";

function Header() {
    return (
        <div className="Header">
            <img src={logo} alt="logo" width="250px" />
            <Barcode value='M.0007614000012345678987654321123344556677880000' width={1.5} height={50} fontSize={12} />
            <PrefixID />
            <AccessCode />
        </div>
    )
};

export default Header;