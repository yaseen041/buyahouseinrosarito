import React, { useState, useEffect } from "react";

const Calculator = () => {
  const propertyRateOptions = [
    { value: 300, label: "Ocean View" },
    { value: 110, label: "No Ocean View" },
    { value: 500, label: "Beach Front View" },
  ];

  const [budget, setBudget] = useState(0);
  const [propertyRate, setPropertyRate] = useState(propertyRateOptions[0].value);
  const [propertyLabel, setPropertyLabel] = useState(propertyRateOptions[0].label);
  const [sizeInFt, setSizeInFt] = useState("0.00");
  const [sizeInM, setSizeInM] = useState("0.00");

  const handlePropertyRateChange = (value, label) => {
    setPropertyLabel(label)
    setPropertyRate(value);
  };

  const selectedPropertyLabel = propertyRateOptions.find(
    (option) => option.label === propertyRate
  )?.label;

  // Extract the rate and view type from the selected label
  const [viewType, rate] = selectedPropertyLabel?.match(/\(([^)]+)\)$/)?.[1].split(" ") || [];

  // Update sizes when budget or propertyRate changes
  useEffect(() => {
    const calculatedSizeInFt = (budget / propertyRate).toFixed(2);
    const calculatedSizeInM = ((budget / propertyRate) * 0.092903).toFixed(2);

    setSizeInFt(calculatedSizeInFt);
    setSizeInM(calculatedSizeInM);
  }, [budget, propertyRate]);

  return (
    <div className="calculator card p-5 rounded-4">
      <h4 className="wow fadeInUp">Mortgage Calculator</h4>

      <div className="pie-chart">
        <div className="wrap-note pt-0">
          <h6 className="text">
            Find Your Ideal Home Size for Just (<span className="text-primary">{'$'+propertyRate}</span>) PerSquare Foot in Mexico with (<span className="text-success">{propertyLabel}</span>)
          </h6>
        </div>
        </div>
        <div className="pie-chart">

        <div className="wrap-note pt-0">
          <div className="item">
            <p>Size in Square Feet: {sizeInFt} ft²</p>
          </div>
          <div className="item">
            <p>Size in Square Meters: {sizeInM} m²</p>
          </div>
        </div>
      </div>

      <form className="form-comment">
        <fieldset className="number wow fadeInUp has-top-title">
          <input
            type="number"
            placeholder="Enter your budget ($)"
            value={budget}
            onChange={(e) => setBudget(Number(e.target.value))}
            required
          />
          <label>Your Budget ($):</label>
        </fieldset>

        <div className="nice-select" tabIndex={0}>
          <span className="current">
            {selectedPropertyLabel || "Please Select View Type"}
          </span>
          <ul className="list">
            {propertyRateOptions.map((option) => (
              <li
                key={option.value}
                data-value={option.value}
                onClick={() => handlePropertyRateChange(option.value, option.label)}
                className={`option ${option.value === propertyRate ? "selected" : ""}`}
              >
                {option.label}
              </li>
            ))}
          </ul>
        </div>
      </form>
    </div>
  );
};

export default Calculator;
