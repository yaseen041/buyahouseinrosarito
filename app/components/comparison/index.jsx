import React from "react";

const RosaritoComparisonTable = () => {
    const colors = ["#699A5B","#124773"]
  const data = [
    { state: "Hawaii", city: "Honolulu", price: "$765", summerHigh: "88°F / 31°C", winterLow: "65°F / 18°C", winterHigh: "80°F / 27°C", comparison: "Much Cheaper, Milder Summers" },
    { state: "Baja California Norte", city: "Rosarito", price: "$500", summerHigh: "77°F / 25°C", winterLow: "50°F / 10°C", winterHigh: "72°F / 22°C", comparison: "High-end beachfront for 35% less than avg. Honolulu price, with milder temperatures." },
    { state: "California", city: "Los Angeles", price: "$715", summerHigh: "85°F / 29°C", winterLow: "58°F / 9°C", winterHigh: "70°F / 21°C", comparison: "Much Cheaper, Milder Summers" },
    { state: "Baja California Norte", city: "Rosarito", price: "$500", summerHigh: "77°F / 25°C", winterLow: "50°F / 10°C", winterHigh: "72°F / 22°C", comparison: "High-end beachfront for 30% less than avg. Los Angeles price, with milder summers." },
    { state: "Washington", city: "Seattle", price: "$520", summerHigh: "79°F / 26°C", winterLow: "37°F / 3°C", winterHigh: "47°F / 8°C", comparison: "Much Cheaper, Milder Winters" },
    { state: "Baja California Norte", city: "Rosarito", price: "$300", summerHigh: "77°F / 25°C", winterLow: "50°F / 10°C", winterHigh: "72°F / 22°C", comparison: "Ocean view for 40% less than avg. Seattle price, with better winters." },
    { state: "Colorado", city: "Denver", price: "$409", summerHigh: "90°F / 32°C", winterLow: "19°F / -7°C", winterHigh: "45°F / 7°C", comparison: "Much Cheaper, Milder Winters" },
    { state: "Baja California Norte", city: "Rosarito", price: "$300", summerHigh: "77°F / 25°C", winterLow: "50°F / 10°C", winterHigh: "72°F / 22°C", comparison: "Ocean view for 25% less than avg. Denver price, with much better temperatures." },
    { state: "Oregon", city: "Portland", price: "$381", summerHigh: "80°F / 27°C", winterLow: "37°F / 3°C", winterHigh: "47°F / 8°C", comparison: "Much Cheaper, Milder Winters" },
    { state: "Baja California Norte", city: "Rosarito", price: "$300", summerHigh: "77°F / 25°C", winterLow: "50°F / 10°C", winterHigh: "72°F / 22°C", comparison: "Ocean view for 17% less than avg. Portland price, with better temperatures." },
    { state: "Utah", city: "Salt Lake City", price: "$289", summerHigh: "95°F / 35°C", winterLow: "25°F / -4°C", winterHigh: "40°F / 4°C", comparison: "Approximate Same Cost, Milder Winters" },
    { state: "Baja California Norte", city: "Rosarito", price: "$300", summerHigh: "77°F / 25°C", winterLow: "50°F / 10°C", winterHigh: "72°F / 22°C", comparison: "Same cost per square foot, but with ociean view, and much better temperatures." },
    { state: "Arizona", city: "Phoenix", price: "$281", summerHigh: "106°F / 41°C", winterLow: "46°F / 8°C", winterHigh: "67°F / 19°C", comparison: "Much Cheaper, Milder Winters" },
    { state: "Baja California Norte", city: "Rosarito", price: "$110", summerHigh: "77°F / 25°C", winterLow: "50°F / 10°C", winterHigh: "72°F / 22°C", comparison: "No ocean view at this price, but far cooler temperatures compared to Phoenix." },
    { state: "Nevada", city: "Las Vegas", price: "$219", summerHigh: "105°F / 40°C", winterLow: "39°F / 4°C", winterHigh: "58°F / 14°C", comparison: "Cooler Summers, Milder Winters" },
    { state: "Baja California Norte", city: "Rosarito", price: "$110", summerHigh: "77°F / 25°C", winterLow: "50°F / 10°C", winterHigh: "72°F / 22°C", comparison: "No ocean view at this price, but far cooler temperatures compared to Phoenix." },
    { state: "Idaho", city: "Boise", price: "$223", summerHigh: "100°F / 38°C", winterLow: "25°F / -4°C", winterHigh: "40°F / 4°C", comparison: "Much Cheaper, Milder Winters" },
    { state: "Baja California Norte", city: "Rosarito", price: "$110", summerHigh: "77°F / 25°C", winterLow: "50°F / 10°C", winterHigh: "72°F / 22°C", comparison: "No ocean view at this price, but far milder temperatures compared to Phoenix." },
    { state: "New Mexico", city: "Albuquerque", price: "$161", summerHigh: "95°F / 35°C", winterLow: "25°F / -4°C", winterHigh: "50°F / 10°C", comparison: "Much Cheaper, Milder Winters" },
    { state: "Baja California Norte", city: "Rosarito", price: "$110", summerHigh: "77°F / 25°C", winterLow: "50°F / 10°C", winterHigh: "72°F / 22°C", comparison: "No ocean view for this price, but far milder temperatures compared to Albuquerque." },
    { state: "Texas", city: "Houston", price: "$158", summerHigh: "95°F / 35°C", winterLow: "45°F / 7°C", winterHigh: "65°F / 18°C", comparison: "Much Cheaper, Cooler Summers" },
    { state: "Baja California Norte", city: "Rosarito", price: "$110", summerHigh: "77°F / 25°C", winterLow: "50°F / 10°C", winterHigh: "72°F / 22°C", comparison: "No ocean view, but far cooler temperatures compared to Houston." },
  ];

  return (
    <div className=" mt-4">
      <h3 className="text-center fw-bold">Rosarito Price Per Square Foot & Temperature Comparison Chart</h3>
      <div style={{overflow:"auto"}} >
      <table className="table  text-center " style={{minWidth:1200,borderColor:"#FFF",paddingTop:100}} >
        <thead className="" style={{backgroundColor:"#121D36"}} >
          <tr>
            <th style={{borderColor:"#FFF"}}><p style={{fontWeight:"bold",fontSize:12,color:"#FFF"}} className="m-0 text-center align-middle">State</p></th>
            <th style={{borderColor:"#FFF"}}><p style={{fontWeight:"bold",fontSize:12,color:"#FFF"}} className="m-0 text-center align-middle">City</p></th>
            <th style={{borderColor:"#FFF"}}><p style={{fontWeight:"bold",fontSize:12,color:"#FFF"}} className="m-0 text-center align-middle">Avg. Price/Sq. Ft.</p></th>
            <th style={{borderColor:"#FFF"}}><p style={{fontWeight:"bold",fontSize:12,color:"#FFF"}} className="m-0 text-center align-middle">Peak Summer High Temp (°F/°C)</p></th>
            <th style={{borderColor:"#FFF"}}><p style={{fontWeight:"bold",fontSize:12,color:"#FFF"}} className="m-0 text-center align-middle">Peak Winter Low Temp (°F/°C)</p></th>
            <th style={{borderColor:"#FFF"}}><p style={{fontWeight:"bold",fontSize:12,color:"#FFF"}} className="m-0 text-center align-middle">Avg. Winter High Temp (°F/°C)</p></th>
            <th style={{borderColor:"#FFF"}}><p style={{fontWeight:"bold",fontSize:12,color:"#FFF"}} className="m-0 text-center align-middle">Rosarito Comparison</p></th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} style={{ backgroundColor: colors[Math.floor(index / 2) % 2] }}>
              <td style={{borderColor:"#FFF"}} className="align-middle" ><p style={{fontSize:12,color:"#FFF"}} className="m-0 text-center align-middle">{row.state}</p></td>
              <td style={{borderColor:"#FFF"}} className="align-middle" ><p style={{fontSize:12,color:"#FFF"}} className="m-0 text-center align-middle">{row.city}</p></td>
              <td style={{borderColor:"#FFF"}} className="align-middle" ><p style={{fontSize:12,color:"#FFF"}} className="m-0 text-center align-middle">{row.price}</p></td>
              <td style={{borderColor:"#FFF"}} className="align-middle" ><p style={{fontSize:12,color:"#FFF"}} className="m-0 text-center align-middle">{row.summerHigh}</p></td>
              <td style={{borderColor:"#FFF"}} className="align-middle" ><p style={{fontSize:12,color:"#FFF"}} className="m-0 text-center align-middle">{row.winterLow}</p></td>
              <td style={{borderColor:"#FFF"}} className="align-middle" ><p style={{fontSize:12,color:"#FFF"}} className="m-0 text-center align-middle">{row.winterHigh}</p></td>
              <td style={{borderColor:"#FFF"}} className="align-middle"  ><p style={{fontSize:12,color:"#FFF"}} className="m-0 text-center align-middle">{row.comparison}</p></td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default RosaritoComparisonTable;
