import React, { useState, useEffect, useRef } from "react";

const Calculator = () => {
  const propertyRateOptions = [
    { value: 500, label: "Luxury Living With Beach Front View $500/sqft " },
    { value: 300, label: "Affordable Elegance With Ocean View $300/sqft " },
    { value: 110, label: "Find Your Ideal Home With No Ocean View $110/sqft " },
  ];

  const [budget, setBudget] = useState("0");
  const [propertyRate, setPropertyRate] = useState(propertyRateOptions[0].value);
  const [propertyLabel, setPropertyLabel] = useState(propertyRateOptions[0].label);
  const [sizeInFt, setSizeInFt] = useState("0.00");
  const [sizeInM, setSizeInM] = useState("0.00");
  const [open, setOpen] = useState(false);
  const toggleNiceSelect = () => setOpen(!open);
  const selectRef = useRef(null);
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

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setOpen(false); // Close the dropdown if clicked outside
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);



  return (
    <div className="calculator card p-5 rounded-4 h-100 wow fadeInUp " style={{ borderRadius: "16px",zIndex:-1 }} >
      <div className="heading-section " style={{ marginBottom: "27px" }} >
        <h4 className="wow fadeInUp">Your Dream Home Estimate Calculator</h4>
        <p className="text mt-2" >With this tools you can estimate home size based on budget, you can easily find the property that fits your lifestyle and financial goals. Take the first step toward your dream home in Rosarito today!</p>
      </div>
      <div className="row justify-content-center " >
        <div className="col-12 col-md-9" >
          <form className="form-comment">
            <fieldset className="number wow fadeInUp has-top-title mt-1">
              <input
                type="text"
                placeholder="Enter your budget ($)"
                value={budget}
                onChange={(e) => {
                  const value = e.target.value;
                  // Allow only numbers (including empty string for reset)
                  if (/^\d*$/.test(value)) {
                    setBudget(Number(value));
                  }
                }}
                required
              />
              <label>Your Budget ($):</label>
            </fieldset>

            <div className={`nice-select mt-5 ${open ? "open" : ""}  `} tabIndex={0} onClick={toggleNiceSelect} ref={selectRef}>
              <span className="current">
                {propertyLabel || "Please Select View Type"}
              </span>
              <ul className="list" style={{ maxWidth: "unset" }} >
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
          {budget > 0 && (
          <div className="col-12 col-md-12 mt-5  " style={{ backgroundColor: "#124773", borderRadius: 12,padding:"12px 18px" }} >
              <p style={{ color: "#FFF" }} >Your ideal home would span over <span style={{ color: "#FFF", fontWeight: "bold" }} >{sizeInFt} ft²  </span> or <span style={{ color: "#FFF", fontWeight: "bold" }} >{sizeInM} m² </span></p>
            </div>
            )}
        </div>
      </div>
     

       
    </div>
  );
};

export default Calculator;
