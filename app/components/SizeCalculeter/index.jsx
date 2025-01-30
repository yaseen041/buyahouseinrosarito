import React, { useState } from "react";

const HomeSizeCalculator = () => {
    const [sqm, setSqm] = useState("");
    const [budget110, setBudget110] = useState("");
    const [budget300, setBudget300] = useState("");
    const [budget500, setBudget500] = useState("");

    return (
        <div className=" table-container mt-4 h-100">
            {/* Section 1: Conversion from M² to Ft² */}
            <table className="table m-0" style={{ height: "26.6%" }} >
                <thead className="" style={{ backgroundColor: "#699A5B" }} >
                    <tr>
                        <th colSpan="2" className="text-center align-middle ">
                            <p style={{ color: "#FFF" }}  > Estimate Your New Home Size in Square Feet (Using Mexico's Meters Squared)</p>
                        </th>
                    </tr>
                    <tr>
                        <th className="text-center align-middle "><p style={{ color: "#FFF" }}  >Input (M²)</p></th>
                        <th className="text-center align-middle "><p style={{ color: "#FFF" }}  >Square Feet (Ft²)</p></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="text-center align-middle " style={{borderBottom:0,backgroundColor:"#f7f7f7"}} >

                            <input
                                style={{
                                    fontSize: "1.5rem", appearance: "textfield",
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
                        <td className="text-center align-middle " style={{borderBottom:0,backgroundColor:"#f7f7f7"}} > <p> {sqm ? (sqm * 10.764).toFixed(2) : "—"}</p></td>
                    </tr>
                </tbody>
            </table>

            {/* Section 2: Home Size for $110 Per Square Foot */}
            <table className="table m-0" style={{ height: "23.5%" }} >
                <thead className="" style={{ backgroundColor: "#124773" }} >
                    <tr>
                        <th colSpan="3" className="text-center align-middle ">
                            <p style={{ color: "#FFF" }} > Find Your Ideal Home Size for Just $110 Per Square Foot in Mexico (No Ocean View)</p>
                        </th>
                    </tr>
                    <tr>
                        <th className="text-center align-middle "> <p style={{ color: "#FFF" }} >Input (Budget $)</p></th>
                        <th className="text-center align-middle "><p style={{ color: "#FFF" }} >Output (Size in Ft²)</p></th>
                        <th className="text-center align-middle "><p style={{ color: "#FFF" }} >Output (Size in M²)</p></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="text-center align-middle " style={{borderBottom:0,backgroundColor:"#f7f7f7"}}  >
                            <input
                                style={{
                                    fontSize: "1.5rem", appearance: "textfield",
                                    WebkitAppearance: "none",
                                    MozAppearance: "textfield"
                                }}
                                type="number"
                                className="form-control"
                                value={budget110}
                                onChange={(e) => setBudget110(e.target.value)}
                                placeholder="Enter Budget ($)"
                            />
                        </td>
                        <td className="text-center align-middle " style={{borderBottom:0,backgroundColor:"#f7f7f7"}} > <p> {budget110 ? (budget110 / 110).toFixed(2) : "—"}</p></td>
                        <td className="text-center align-middle " style={{borderBottom:0,backgroundColor:"#f7f7f7"}} > <p> {budget110 ? ((budget110 / 110) / 10.764).toFixed(2) : "—"}</p></td>
                    </tr>
                </tbody>
            </table>

            {/* Section 3: Home Size for $300 Per Square Foot */}
            <table className="table m-0" style={{ height: "23.5%" }} >
                <thead className="" style={{ backgroundColor: "#2EC6F3" }} >
                    <tr>
                        <th colSpan="3" className="text-center align-middle ">
                            <p style={{ color: "#FFF" }} >Affordable Elegance: Calculate Your Ocean View Home Size at $300 Per Square Foot</p>
                        </th>
                    </tr>
                    <tr>
                        <th className="text-center align-middle "><p style={{ color: "#FFF" }} >Input (Budget $)</p></th>
                        <th className="text-center align-middle "><p style={{ color: "#FFF" }} >Output (Size in Ft²)</p></th>
                        <th className="text-center align-middle "><p style={{ color: "#FFF" }} >Output (Size in M²)</p></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="text-center align-middle "  style={{borderBottom:0,backgroundColor:"#f7f7f7"}}>
                            <input
                                style={{
                                    fontSize: "1.5rem", appearance: "textfield",
                                    WebkitAppearance: "none",
                                    MozAppearance: "textfield"
                                }}
                                type="number"
                                className="form-control"
                                value={budget300}
                                onChange={(e) => setBudget300(e.target.value)}
                                placeholder="Enter Budget ($)"
                            />
                        </td>
                        <td className="text-center align-middle "  style={{borderBottom:0,backgroundColor:"#f7f7f7"}}><p>{budget300 ? (budget300 / 300).toFixed(2) : "—"}</p></td>
                        <td className="text-center align-middle " style={{borderBottom:0,backgroundColor:"#f7f7f7"}} ><p>{budget300 ? ((budget300 / 300) / 10.764).toFixed(2) : "—"}</p></td>
                    </tr>
                </tbody>
            </table>

            {/* Section 4: Home Size for $500 Per Square Foot */}
            <table className="table m-0" style={{ height: "23.5%" }} >
                <thead className="" style={{ backgroundColor: "#E8233F" }} >
                    <tr>
                        <th colSpan="3" className="text-center align-middle ">
                            <p style={{ color: "#FFF" }} > Luxury Living: Discover Your Beach Front Home Size at $500 Per Square Foot</p>
                        </th>
                    </tr>
                    <tr>
                        <th className="text-center align-middle "><p style={{ color: "#FFF" }} >Input (Budget $)</p></th>
                        <th className="text-center align-middle "><p style={{ color: "#FFF" }} >Output (Size in Ft²)</p></th>
                        <th className="text-center align-middle "><p style={{ color: "#FFF" }} >Output (Size in M²)</p></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="text-center align-middle " style={{backgroundColor:"#f7f7f7"}} >
                            <input
                                style={{
                                    fontSize: "1.5rem", appearance: "textfield",
                                    WebkitAppearance: "none",
                                    MozAppearance: "textfield"
                                }}
                                type="number"
                                className="form-control"
                                value={budget500}
                                onChange={(e) => setBudget500(e.target.value)}
                                placeholder="Enter Budget ($)"
                            />
                        </td>
                        <td className="text-center align-middle " style={{backgroundColor:"#f7f7f7"}}  ><p>{budget500 ? (budget500 / 500).toFixed(2) : "—"}</p></td>
                        <td className="text-center align-middle " style={{backgroundColor:"#f7f7f7"}}  ><p>{budget500 ? ((budget500 / 500) / 10.764).toFixed(2) : "—"}</p></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default HomeSizeCalculator;
