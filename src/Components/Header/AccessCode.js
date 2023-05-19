import React from "react";
import "../../style/AccessCode.css";

function AccessCode() {
    const date = new Date().toLocaleString("pl", { day: '2-digit', month: "numeric", year: 'numeric' });

    return (
        <div className="AccessCode">
            <p>Access code: <b>0001</b></p>
            <p>Issue date: {date}</p>
        </div>
    )
};

export default AccessCode;