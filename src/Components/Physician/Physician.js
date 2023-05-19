import React from "react";
import "../../style/Physician.css";

function Physician() {
    const physician = {
        title: "doc.",
        name: "Anna",
        surname: "Goodhealth",
        id: "1008839",
        phone: "+44 727888454"
    };

    return (
        <div className="Physician">
            <p>Physician: </p>
            <div className="physician-name">
                <p >{physician.title} {physician.name} {physician.surname}</p>
                <p>Physician ID: {physician.id}</p>
                <p>phone: {physician.phone}</p>
            </div>
        </div>
    )
};

export default Physician;