import React from "react";
import "../../style/Patient.css";

function Patient() {
    const patient = {
        name: "John",
        surname: "Kovalsky"
    };

    return (
        <div className="Patient">
            <p>Patient:</p>
            <p className="patient-name">{patient.name} {patient.surname}</p>
        </div>
    )
};

export default Patient;