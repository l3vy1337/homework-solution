import React from "react";

const SummaryBox = ({ size, toppings, totalCost }) => {
    return (
        <div className="card summary">
            <h3>Summary:</h3>
            <p>{size} pizza</p>
            <p>Toppings: {toppings.join(", ")}</p>
            <p id="total-cost">Total cost: ${totalCost}</p>
        </div>
    );
};

export default SummaryBox;

