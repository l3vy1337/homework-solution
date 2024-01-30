import React, { useState } from "react";

const ToppingsSelector = ({ options, onToppingChange }) => {
    const [selectedToppings, setSelectedToppings] = useState([]);

    const handleCheckboxChange = (topping) => {
        const newToppings = selectedToppings.includes(topping)
            ? selectedToppings.filter((t) => t !== topping)
            : [...selectedToppings, topping];

        setSelectedToppings(newToppings);
        onToppingChange(newToppings);
    };

    return (
        <div className="card">
            <h3>Toppings:</h3>
            {options.map((topping) => (
                <label  key={topping}>
                <input 
                    id="topping"
                    type="checkbox"
                    value={topping}
                    onChange={() => handleCheckboxChange(topping)}
                    disabled={topping === "Pineapple"}
                />
                    {topping} <span className="price">$0.50</span>
                </label>
        ))}
        </div>
    );
};

export default ToppingsSelector;

