import React from "react";
import Prescription from "./Prescription";
import "../../style/Prescriptions.css";

function Prescriptions() {
    const today = new Date();
    const now = new Date();
    const month = new Date(now.setMonth(now.getMonth() + 1)).toLocaleString("en-US", { day: '2-digit', month: "long", year: 'numeric' });
    const year = new Date(today.setYear(today.getFullYear() + 1)).toLocaleString("en-US", { day: '2-digit', month: "long", year: 'numeric' });

    const prescriptions = [
        {
            code: "ASJYUWM26NNNS4PLXCY65IIMN3Q",
            warningDate: month,
            validationDate: year,
            drug: {
                name: "Vitamin D 2000",
                volume: 60
            },
            refund: "30%",
            sets: 6,
            dosage: "1 x 2 pill(s) per day"
        },
        {
            code: "000Y4UM26NERR4PLXCY65IIMN3A",
            warningDate: month,
            validationDate: year,
            drug: {
                name: "Vitamin C 1000",
                volume: 120
            },
            refund: "100%",
            sets: 6,
            dosage: "1 x 3 pill(s) per day"
        },
        {
            code: "A012DM26N000S4PLXCY65IIMN7T",
            warningDate: month,
            validationDate: year,
            drug: {
                name: "Vitamin M 10000",
                volume: 30
            },
            refund: "0%",
            sets: 6,
            dosage: "1 x 1 pill(s) per day"
        },
        {
            code: "PTB6YUWM26NNS4UE4CY78G5MN2D",
            warningDate: month,
            validationDate: year,
            drug: {
                name: "Vitamin B12 500",
                volume: 60
            },
            refund: "100%",
            sets: 6,
            dosage: "1 x 1 pill(s) per day"
        }
    ];

    return (
        <div className="Prescriptions">
            {prescriptions.map((el, ind) => (
                <Prescription
                    key={ind}
                    data={el}
                    length={prescriptions.length}
                    index={prescriptions.indexOf(el) + 1}
                />
            ))}
        </div>
    )
};

export default Prescriptions;