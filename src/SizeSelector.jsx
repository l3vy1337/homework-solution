import React from "react";

const SizeSelector = ({ options, onSizeChange }) => {
    return (
        <div className="card">
            <h3>Size:</h3>
            {Object.keys(options).map((size) => (
                <label key={size}>
                <input type="radio" name="size" value={size} onChange={(e) => onSizeChange(e.target.value)} />
                {size} <span className="price">${options[size]}</span>
                </label>
            ))}
        </div>
    );
};

export default SizeSelector;

