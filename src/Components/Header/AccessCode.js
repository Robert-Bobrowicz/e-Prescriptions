import React from "react";
import "../../style/AccessCode.css";

function AccessCode() {
    const date = new Date().toLocaleString("en-EN", { day: '2-digit', month: "long", year: 'numeric' });
    const accessCode = "0001"

    return (
        <div className="AccessCode">
            <p>Access code: <b>{accessCode}</b></p>
            <p>Issue date: {date}</p>
        </div>
    )
};

export default AccessCode;