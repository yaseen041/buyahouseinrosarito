import React from "react";

const Temperatures = () => {
  const temperatures = [
    { month: "January", high: "65°F / 18°C", low: "48°F / 9°C" },
    { month: "February", high: "65°F / 18°C", low: "49°F / 9°C" },
    { month: "March", high: "66°F / 19°C", low: "50°F / 10°C" },
    { month: "April", high: "68°F / 20°C", low: "53°F / 12°C" },
    { month: "May", high: "70°F / 21°C", low: "57°F / 14°C" },
    { month: "June", high: "73°F / 23°C", low: "60°F / 16°C" },
    { month: "July", high: "75°F / 24°C", low: "63°F / 17°C" },
    { month: "August", high: "75°F / 24°C", low: "64°F / 18°C" },
    { month: "September", high: "74°F / 23°C", low: "62°F / 17°C" },
    { month: "October", high: "72°F / 22°C", low: "58°F / 14°C" },
    { month: "November", high: "68°F / 20°C", low: "52°F / 11°C" },
    { month: "December", high: "65°F / 18°C", low: "48°F / 9°C" },
  ];

  return (
    <div className="mt-4">
      <table className="table text-center ">
        <thead className="table-header" style={{ backgroundColor: "rgb(18, 29, 54)" }}>
          <tr>
            <th className="text-center">
              <p style={{color:"#FFF"}} className="m-0 fw-bold">Month</p>
            </th>
            <th className="text-center">
              <p style={{color:"#FFF"}} className="m-0 fw-bold">High Temperature</p>
            </th>
            <th className="text-center">
              <p style={{color:"#FFF"}} className="m-0 fw-bold">Low Temperature</p>
            </th>
          </tr>
        </thead>
        <tbody>
          {temperatures.map((temp, index) => (
            <tr
              key={index}
              style={{
                backgroundColor: index % 2 === 0 ? "#f9f9f9" : "transparent",
              }}
            >
              <td className="text-center">
                <p className="m-0">{temp.month}</p>
              </td>
              <td
                className="text-center high-temp"
                style={{ backgroundColor: "#ffcdd2", color: "#b71c1c" }}
              >
                <p className="m-0 fw-bold">{temp.high}</p>
              </td>
              <td
                className="text-center low-temp"
                style={{ backgroundColor: "#bbdefb", color: "#0d47a1" }}
              >
                <p className="m-0 fw-bold">{temp.low}</p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Temperatures;
