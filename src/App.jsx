import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import SizeSelector from "./SizeSelector";
import ToppingsSelector from "./ToppingsSelector";
import SummaryBox from "./SummaryBox";

const SIZES = {
    Small: 2.99,
    Medium: 4.99,
    Large: 7.99
};

const TOPPINGS = ["Cheese", "Pepperoni", "Salami", "Bacon", "Pineapple", "Mushrooms", "Onions", "Olives"];

const App = () => {
    const [size, setSize] = useState("");
    const [toppings, setToppings] = useState([]);
    const [totalCost, setTotalCost] = useState(0);

    const handleSizeChange = (selectedSize) => {
        setSize(selectedSize);
        calculateTotalCost(selectedSize, toppings);
    };

    const handleToppingChange = (selectedToppings) => {
        setToppings(selectedToppings);
        calculateTotalCost(size, selectedToppings);
    };

    const calculateTotalCost = (selectedSize, selectedToppings) => {
        let cost = SIZES[selectedSize] || 0;
        cost += selectedToppings.length * 0.5;
        setTotalCost(cost.toFixed(2));
    };

    return (
        <div className="App">
            <h1>Pizza customization</h1>
            <SizeSelector options={SIZES} onSizeChange={handleSizeChange} />
            <ToppingsSelector options={TOPPINGS} onToppingChange={handleToppingChange} />
            <SummaryBox size={size} toppings={toppings} totalCost={totalCost} />
        </div>
    );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
