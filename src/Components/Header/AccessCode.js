import React from "react";
import "../../style/AccessCode.css";

function AccessCode() {
    const date = "17.05.2023 r.";

    return (
        <div className="AccessCode">
            <p>Access code: <b>0001</b></p>
            <p>Issue date: {date}</p>
        </div>
    )
};

export default AccessCode;