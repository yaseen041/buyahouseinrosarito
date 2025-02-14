import React, { useState } from "react";

const HomeSizeCalculator = () => {
    const [sqm, setSqm] = useState("");
    const [budget, setBudget] = useState("");
    

    return (
        <div className="calc-table-container h-100 " >
        <div className=" table-container mt-4 h-100">
            {/* Section 1: Conversion from M² to Ft² */}
            <table className="table m-0 custom-table"  >
                <thead data-color="blue" className=""  >
                    <tr>
                        <th colSpan="2" className="text-center align-middle ">
                            <p   > Estimate Your New Home Size in Square Feet (Using Mexico's Meters Squared)</p>
                        </th>
                    </tr>
                    <tr>
                        <th className="text-center align-middle " style={{borderRightWidth:0,borderTopWidth:0}} ><p   >Input (M²)</p></th>
                        <th className="text-center align-middle " style={{borderTopWidth:0}} ><p   >Square Feet (Ft²)</p></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="text-center align-middle " style={{borderRightWidth:0,borderTopWidth:0,backgroundColor:"#f7f7f7"}} >

                            <input
                                style={{
                                    fontSize: "0.8rem", appearance: "textfield",
                                    WebkitAppearance: "none",
                                    MozAppearance: "textfield"
                                }}
                                type="number"
                                className="form-control no-spinner"
                                value={sqm}
                                onChange={(e) => setSqm(e.target.value)}
                                placeholder="Enter M²"
                            />

                        </td>
                        <td className="text-center align-middle " style={{borderRightWidth:1,borderTopWidth:0,backgroundColor:"#f7f7f7"}} > <p> {sqm ? (sqm * 10.764).toFixed(2) : "—"}</p></td>
                    </tr>
                </tbody>
            </table>
            <table className="table m-0 custom-table" style={{ height: "10%" }} >
                <thead data-color="blue" className=""  >
                   
                    <tr>
                        <th className="text-center align-middle " style={{borderRightWidth:0,borderTopWidth:0}}  ><p   >Input (Budget $)</p></th>
                        <th className="text-center align-middle " style={{borderRightWidth:1,borderTopWidth:0}} >
                        <input
                                style={{
                                    fontSize: "0.8rem", appearance: "textfield",
                                    WebkitAppearance: "none",
                                    MozAppearance: "textfield"
                                }}
                                type="number"
                                className="form-control no-spinner"
                                value={budget}
                                onChange={(e) => setBudget(e.target.value)}
                                placeholder="Enter Budget ($)"
                            />
                            
                            </th>
                    </tr>
                </thead>
               
            </table>
            <table className="table m-0 custom-table"  >
                <thead data-color="blue" className=""  >
                    <tr>
                        <th colSpan="2" className="text-center align-middle " style={{borderRightWidth:1,borderTopWidth:0}}>
                        <p  > Find Your Ideal Home Size for Just $110 Per Square Foot in Mexico (No Ocean View)</p>
                        </th>
                    </tr>
                    <tr>
                    <th className="text-center align-middle " style={{borderRightWidth:0,borderTopWidth:0}} ><p  >Output (Size in Ft²)</p></th>
                    <th className="text-center align-middle " style={{borderRightWidth:1,borderTopWidth:0}} ><p  >Output (Size in M²)</p></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td className="text-center align-middle " style={{borderRightWidth:0,borderTopWidth:0,backgroundColor:"#f7f7f7"}} > <p> {budget ? (budget / 110).toFixed(2) : "—"}</p></td>
                    <td className="text-center align-middle " style={{borderRightWidth:1,borderTopWidth:0,backgroundColor:"#f7f7f7"}} > <p> {budget ? ((budget / 110) / 10.764).toFixed(2) : "—"}</p></td>
                    </tr>
                </tbody>
            </table>
            <table className="table m-0 custom-table"  >
                <thead data-color="blue" className=""  >
                    <tr>
                        <th colSpan="2" className="text-center align-middle " style={{borderRightWidth:1,borderTopWidth:0}} >
                        <p  >Affordable Elegance: Calculate Your Ocean View Home Size at $300 Per Square Foot</p>
                        </th>
                    </tr>
                    <tr>
                    <th className="text-center align-middle " style={{borderRightWidth:0,borderTopWidth:0}} ><p  >Output (Size in Ft²)</p></th>
                    <th className="text-center align-middle " style={{borderRightWidth:1,borderTopWidth:0}} ><p  >Output (Size in M²)</p></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td className="text-center align-middle " style={{borderRightWidth:0,borderTopWidth:0,backgroundColor:"#f7f7f7"}} > <p> {budget ? (budget / 300).toFixed(2) : "—"}</p></td>
                    <td className="text-center align-middle " style={{borderRightWidth:1,borderTopWidth:0,backgroundColor:"#f7f7f7"}} > <p> {budget ? ((budget / 300) / 10.764).toFixed(2) : "—"}</p></td>
                    </tr>
                </tbody>
            </table>  
            <table className="table m-0 custom-table"  >
                <thead data-color="blue" className=""  >
                    <tr>
                        <th colSpan="2" className="text-center align-middle " style={{borderRightWidth:1,borderTopWidth:0}} >
                        <p  > Luxury Living: Discover Your Beach Front Home Size at $500 Per Square Foot</p>
                        </th>
                    </tr>
                    <tr>
                    <th className="text-center align-middle " style={{borderRightWidth:0,borderTopWidth:0}} ><p  >Output (Size in Ft²)</p></th>
                    <th className="text-center align-middle " style={{borderRightWidth:1,borderTopWidth:0}} ><p  >Output (Size in M²)</p></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td className="text-center align-middle " style={{borderRightWidth:0,borderTopWidth:0,borderBottomWidth:1,backgroundColor:"#f7f7f7"}} > <p> {budget ? (budget / 500).toFixed(2) : "—"}</p></td>
                    <td className="text-center align-middle " style={{borderRightWidth:1,borderTopWidth:0,borderBottomWidth:1,backgroundColor:"#f7f7f7"}} > <p> {budget ? ((budget / 500) / 10.764).toFixed(2) : "—"}</p></td>
                    </tr>
                </tbody>
            </table>                   
          
           

            {/* Section 4: Home Size for $500 Per Square Foot */}
           
        </div>
        </div>
    );
};

export default HomeSizeCalculator;
