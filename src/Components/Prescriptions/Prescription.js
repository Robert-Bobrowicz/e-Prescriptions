import React from "react";
import "../../style/Prescription.css";

function Prescription(props) {

    return (
        <div className="Prescription">
            <div className="prescription-code">
                <p><b>Prescription {props.index}/{props.length}</b></p>
                <p>{props.data.code}</p>
            </div>
            <div className="warning-valid-date">Please be advised to buy first prescription NOT LATAER THAN {props.data.warningDate} to remain one year prescription valid. After that date you will not be able to receive all of the pills.</div>
            <div className="drug-volume">
                <p>{props.data.drug.name} {props.data.drug.volume} pcs.</p>
                <p>{props.data.refund}</p>
            </div>
            <div>
                {props.data.sets} sets
            </div>
            <div>
                Dosage: {props.data.dosage}
            </div>
            <div>
                Refund rate: <p className="refund-code">{props.data.refund}</p>
            </div>
            <div>
                Prescription is valid to: <p className="valid-date"> {props.data.validationDate}</p>
            </div>
        </div>
    )
};

export default Prescription;