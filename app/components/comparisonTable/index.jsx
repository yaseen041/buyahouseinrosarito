import React from 'react'

const ComparisonTable = () => {

    const ScrollToTable = (e) => {
        if (window.innerWidth <= 768) { 
            const element = document.getElementById("table");
            if (element) {
                const offset = 80; 
                const elementPosition = element.getBoundingClientRect().top + window.scrollY; 
                const scrollToPosition = elementPosition - offset;
    
                window.scrollTo({
                    top: scrollToPosition,
                    behavior: "smooth"
                });
            }
        }
    };

    return (
        <div  >


            <div className="widget-tabs style-3 wow fadeInUp pe-0 pe-md-5" style={{ backgroundColor: "rgb(249, 249, 249)", border: "1px solid #121D36" }} >
                <div className='row g-0' >
                    <div className='col-12 col-md-2' >
                        <ul className="widget-menu-tab wow fadeInUp h-100 " style={{ flexDirection: "column", borderRadius: 0, backgroundColor: "#121D36" }} >
                            <li className="item-title w-100 text-start active " style={{ borderRadius: 5, padding: "6px 30px" }} onClick={ScrollToTable} >
                                <span className="inner">Hawaii</span>
                            </li>
                            <li className="item-title w-100 text-start " style={{ borderRadius: 5, padding: "6px 30px" }} onClick={ScrollToTable} >
                                <span className="inner">California</span>
                            </li>
                            <li className="item-title w-100 text-start" style={{ borderRadius: 5, padding: "6px 30px" }} onClick={ScrollToTable} >
                                <span className="inner">Wahsington</span>
                            </li>
                            <li className="item-title w-100 text-start" style={{ borderRadius: 5, padding: "6px 30px" }} onClick={ScrollToTable} >
                                <span className="inner">Colorado</span>
                            </li>
                            <li className="item-title w-100 text-start" style={{ borderRadius: 5, padding: "6px 30px" }} onClick={ScrollToTable} >
                                <span className="inner">Oregon</span>
                            </li>
                            <li className="item-title w-100 text-start" style={{ borderRadius: 5, padding: "6px 30px" }} onClick={ScrollToTable} >
                                <span className="inner">Utah</span>
                            </li>
                            <li className="item-title w-100 text-start" style={{ borderRadius: 5, padding: "6px 30px" }} onClick={ScrollToTable} >
                                <span className="inner">Arizona</span>
                            </li>
                            <li className="item-title w-100 text-start" style={{ borderRadius: 5, padding: "6px 30px" }} onClick={ScrollToTable} >
                                <span className="inner">Nevada</span>
                            </li>
                            <li className="item-title w-100 text-start" style={{ borderRadius: 5, padding: "6px 30px" }} onClick={ScrollToTable} >
                                <span className="inner">Idaho</span>
                            </li>
                            <li className="item-title w-100 text-start" style={{ borderRadius: 5, padding: "6px 30px" }} onClick={ScrollToTable} >
                                <span className="inner">New Mexico</span>
                            </li>
                            <li className="item-title w-100 text-start" style={{ borderRadius: 5, padding: "6px 30px" }} onClick={ScrollToTable} >
                                <span className="inner">Texas</span>
                            </li>
                        </ul>
                    </div>
                    <div className='col-12 col-md-10 pt-3 d-flex align-items-center ' id="table" >
                        <div className="widget-content-tab" style={{ overflow: "auto" }} >
                            <div className="widget-content-inner  active table-responsive " style={{ minWidth: 660 }} >
                                <table className=' table table-striped   '   >
                                    <thead className='table-dark' >
                                        <tr>
                                            <th className='py-4' style={{ color: "#FFF", fontSize: 16, width: "240px" }} >Features</th>
                                            <th className='py-4' style={{ color: "#FFF", fontSize: 16 }} >Baja California Norte</th>
                                            <th className='py-4' style={{ color: "#FFF", fontSize: 16 }} >Hawaii</th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className='py-4' style={{ color: "rgb(18, 71, 115)", fontSize: 15, fontWeight: "bold", width: "20px" }} >City</td>
                                            <td className='py-4' style={{ fontSize: 15 }} >Rosarito</td>
                                            <td className='py-4' style={{ fontSize: 15 }} >Honolulu</td>
                                        </tr>
                                        <tr>
                                            <td className='py-4' style={{ color: "rgb(18, 71, 115)", fontSize: 15, fontWeight: "bold", width: "20px" }}>Avg. Price/Sq. Ft.</td>
                                            <td className='py-4' style={{ fontSize: 15 }} >$500 </td>
                                            <td className='py-4' style={{ fontSize: 15 }} >$765</td>

                                        </tr>
                                        <tr>
                                            <td className='py-4' style={{ color: "rgb(18, 71, 115)", fontSize: 15, fontWeight: "bold", width: "20px" }}>Peak Summer High Temp (°F/°C)</td>
                                            <td className='py-4' style={{ fontSize: 15 }} >77°F / 25°C</td>
                                            <td className='py-4' style={{ fontSize: 15 }} >88°F / 31°C</td>

                                        </tr>
                                        <tr>
                                            <td className='py-4' style={{ color: "rgb(18, 71, 115)", fontSize: 15, fontWeight: "bold", width: "20px" }}>Peak Winter Low Temp (°F/°C)</td>
                                            <td className='py-4' style={{ fontSize: 15 }}  >50°F / 10°C</td>
                                            <td className='py-4' style={{ fontSize: 15 }} >65°F / 18°C</td>

                                        </tr>
                                        <tr>
                                            <td className='py-4' style={{ color: "rgb(18, 71, 115)", fontSize: 15, fontWeight: "bold", width: "20px" }}>Avg. Winter High Temp (°F/°C)</td>
                                            <td className='py-4' style={{ fontSize: 15 }}>80°F / 27°C</td>
                                            <td className='py-4' style={{ fontSize: 15 }}>72°F / 22°C</td>

                                        </tr>
                                        <tr>
                                            <td className='py-4' style={{ color: "rgb(18, 71, 115)", fontSize: 15, fontWeight: "bold", width: "20px" }}>Rosarito Comparison</td>
                                            <td className='py-4' style={{ fontSize: 15 }}>High-end beachfront for 35% less than avg. Honolulu price, with milder temperatures.</td>
                                            <td className='py-4' style={{ fontSize: 15 }}>
                                                Much Cheaper
                                                Milder Summers
                                            </td>


                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="widget-content-inner" style={{ minWidth: 660 }}>
                                <table className=' table table-striped  w-100  ' >
                                    <thead className='table-dark' >
                                        <tr>
                                            <th className='py-4' style={{ color: "#FFF", fontSize: 16, width: "240px" }} >Features</th>
                                            <th className='py-4' style={{ color: "#FFF", fontSize: 16 }} >Baja California Norte</th>
                                            <th className='py-4' style={{ color: "#FFF", fontSize: 16 }} >California</th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className='py-4' style={{ color: "rgb(18, 71, 115)", fontSize: 15, fontWeight: "bold", width: "20px" }} >City</td>
                                            <td className='py-4' style={{ fontSize: 15 }} >Rosarito</td>
                                            <td className='py-4' style={{ fontSize: 15 }} >Los Angeles</td>
                                        </tr>
                                        <tr>
                                            <td className='py-4' style={{ color: "rgb(18, 71, 115)", fontSize: 15, fontWeight: "bold", width: "20px" }}>Avg. Price/Sq. Ft.</td>
                                            <td className='py-4' style={{ fontSize: 15 }} >$500 </td>
                                            <td className='py-4' style={{ fontSize: 15 }} >$715</td>

                                        </tr>
                                        <tr>
                                            <td className='py-4' style={{ color: "rgb(18, 71, 115)", fontSize: 15, fontWeight: "bold", width: "20px" }}>Peak Summer High Temp (°F/°C)</td>
                                            <td className='py-4' style={{ fontSize: 15 }} >77°F / 25°C</td>
                                            <td className='py-4' style={{ fontSize: 15 }} >85°F / 29°C</td>

                                        </tr>
                                        <tr>
                                            <td className='py-4' style={{ color: "rgb(18, 71, 115)", fontSize: 15, fontWeight: "bold", width: "20px" }}>Peak Winter Low Temp (°F/°C)</td>
                                            <td className='py-4' style={{ fontSize: 15 }}  >50°F / 10°C</td>
                                            <td className='py-4' style={{ fontSize: 15 }} >48°F / 9°C</td>

                                        </tr>
                                        <tr>
                                            <td className='py-4' style={{ color: "rgb(18, 71, 115)", fontSize: 15, fontWeight: "bold", width: "20px" }}>Avg. Winter High Temp (°F/°C)</td>
                                            <td className='py-4' style={{ fontSize: 15 }}>68°F / 20°C</td>
                                            <td className='py-4' style={{ fontSize: 15 }}>72°F / 22°C</td>

                                        </tr>
                                        <tr>
                                            <td className='py-4' style={{ color: "rgb(18, 71, 115)", fontSize: 15, fontWeight: "bold", width: "20px" }}>Rosarito Comparison</td>
                                            <td className='py-4' style={{ fontSize: 15 }}>High-end beachfront for 30% less than avg. Los Angeles price, with milder summers.</td>
                                            <td className='py-4' style={{ fontSize: 15 }}>
                                                Much Cheaper
                                                Milder Summers
                                            </td>


                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="widget-content-inner" style={{ minWidth: 660 }} >
                                <table className=' table table-striped  w-100  ' >
                                    <thead className='table-dark' >
                                        <tr>
                                            <th className='py-4' style={{ color: "#FFF", fontSize: 16, width: "240px" }} >Features</th>
                                            <th className='py-4' style={{ color: "#FFF", fontSize: 16 }} >Baja California Norte</th>
                                            <th className='py-4' style={{ color: "#FFF", fontSize: 16 }} >Washington</th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className='py-4' style={{ color: "rgb(18, 71, 115)", fontSize: 15, fontWeight: "bold", width: "20px" }} >City</td>
                                            <td className='py-4' style={{ fontSize: 15 }} >Rosarito</td>
                                            <td className='py-4' style={{ fontSize: 15 }} >Seattle</td>
                                        </tr>
                                        <tr>
                                            <td className='py-4' style={{ color: "rgb(18, 71, 115)", fontSize: 15, fontWeight: "bold", width: "20px" }}>Avg. Price/Sq. Ft.</td>
                                            <td className='py-4' style={{ fontSize: 15 }} >$300</td>
                                            <td className='py-4' style={{ fontSize: 15 }} >$520</td>

                                        </tr>
                                        <tr>
                                            <td className='py-4' style={{ color: "rgb(18, 71, 115)", fontSize: 15, fontWeight: "bold", width: "20px" }}>Peak Summer High Temp (°F/°C)</td>
                                            <td className='py-4' style={{ fontSize: 15 }} >77°F / 25°C</td>
                                            <td className='py-4' style={{ fontSize: 15 }} >79°F / 26°C</td>

                                        </tr>
                                        <tr>
                                            <td className='py-4' style={{ color: "rgb(18, 71, 115)", fontSize: 15, fontWeight: "bold", width: "20px" }}>Peak Winter Low Temp (°F/°C)</td>
                                            <td className='py-4' style={{ fontSize: 15 }}  >50°F / 10°C</td>
                                            <td className='py-4' style={{ fontSize: 15 }} >36°F / 2°C</td>

                                        </tr>
                                        <tr>
                                            <td className='py-4' style={{ color: "rgb(18, 71, 115)", fontSize: 15, fontWeight: "bold", width: "20px" }}>Avg. Winter High Temp (°F/°C)</td>
                                            <td className='py-4' style={{ fontSize: 15 }}>47°F / 8°C</td>
                                            <td className='py-4' style={{ fontSize: 15 }}>72°F / 22°C</td>

                                        </tr>
                                        <tr>
                                            <td className='py-4' style={{ color: "rgb(18, 71, 115)", fontSize: 15, fontWeight: "bold", width: "20px" }}>Rosarito Comparison</td>
                                            <td className='py-4' style={{ fontSize: 15 }}>Ocean view for 40% less than avg. Seattle price, with better winters.</td>
                                            <td className='py-4' style={{ fontSize: 15 }}>
                                                Much Cheaper
                                                Milder Winters
                                            </td>


                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="widget-content-inner" style={{ minWidth: 660 }} >
                                <table className=' table table-striped  w-100  ' >
                                    <thead className='table-dark' >
                                        <tr>
                                            <th className='py-4' style={{ color: "#FFF", fontSize: 16, width: "240px" }} >Features</th>
                                            <th className='py-4' style={{ color: "#FFF", fontSize: 16 }} >Baja California Norte</th>
                                            <th className='py-4' style={{ color: "#FFF", fontSize: 16 }} >Colorado</th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className='py-4' style={{ color: "rgb(18, 71, 115)", fontSize: 15, fontWeight: "bold", width: "20px" }} >City</td>
                                            <td className='py-4' style={{ fontSize: 15 }} >Rosarito</td>
                                            <td className='py-4' style={{ fontSize: 15 }} >Denver</td>
                                        </tr>
                                        <tr>
                                            <td className='py-4' style={{ color: "rgb(18, 71, 115)", fontSize: 15, fontWeight: "bold", width: "20px" }}>Avg. Price/Sq. Ft.</td>
                                            <td className='py-4' style={{ fontSize: 15 }} >$300</td>
                                            <td className='py-4' style={{ fontSize: 15 }} >$409</td>

                                        </tr>
                                        <tr>
                                            <td className='py-4' style={{ color: "rgb(18, 71, 115)", fontSize: 15, fontWeight: "bold", width: "20px" }}>Peak Summer High Temp (°F/°C)</td>
                                            <td className='py-4' style={{ fontSize: 15 }} >77°F / 25°C</td>
                                            <td className='py-4' style={{ fontSize: 15 }} >90°F / 32°C</td>

                                        </tr>
                                        <tr>
                                            <td className='py-4' style={{ color: "rgb(18, 71, 115)", fontSize: 15, fontWeight: "bold", width: "20px" }}>Peak Winter Low Temp (°F/°C)</td>
                                            <td className='py-4' style={{ fontSize: 15 }}  >50°F / 10°C</td>
                                            <td className='py-4' style={{ fontSize: 15 }} >19°F / -7°C</td>

                                        </tr>
                                        <tr>
                                            <td className='py-4' style={{ color: "rgb(18, 71, 115)", fontSize: 15, fontWeight: "bold", width: "20px" }}>Avg. Winter High Temp (°F/°C)</td>
                                            <td className='py-4' style={{ fontSize: 15 }}>47°F / 8°C</td>
                                            <td className='py-4' style={{ fontSize: 15 }}>45°F / 7°C</td>

                                        </tr>
                                        <tr>
                                            <td className='py-4' style={{ color: "rgb(18, 71, 115)", fontSize: 15, fontWeight: "bold", width: "20px" }}>Rosarito Comparison</td>
                                            <td className='py-4' style={{ fontSize: 15 }}>Ocean view for 25% less than avg. Denver price, with much better temperatures.</td>
                                            <td className='py-4' style={{ fontSize: 15 }}>
                                                Much Cheaper
                                                Milder Winters
                                            </td>


                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="widget-content-inner" style={{ minWidth: 660 }} >
                                <table className=' table table-striped  w-100  ' >
                                    <thead className='table-dark' >
                                        <tr>
                                            <th className='py-4' style={{ color: "#FFF", fontSize: 16, width: "240px" }} >Features</th>
                                            <th className='py-4' style={{ color: "#FFF", fontSize: 16 }} >Baja California Norte</th>
                                            <th className='py-4' style={{ color: "#FFF", fontSize: 16 }} >Oregon</th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className='py-4' style={{ color: "rgb(18, 71, 115)", fontSize: 15, fontWeight: "bold", width: "20px" }} >City</td>
                                            <td className='py-4' style={{ fontSize: 15 }} >Rosarito</td>
                                            <td className='py-4' style={{ fontSize: 15 }} >Portland</td>
                                        </tr>
                                        <tr>
                                            <td className='py-4' style={{ color: "rgb(18, 71, 115)", fontSize: 15, fontWeight: "bold", width: "20px" }}>Avg. Price/Sq. Ft.</td>
                                            <td className='py-4' style={{ fontSize: 15 }} >$300</td>
                                            <td className='py-4' style={{ fontSize: 15 }} >$361</td>

                                        </tr>
                                        <tr>
                                            <td className='py-4' style={{ color: "rgb(18, 71, 115)", fontSize: 15, fontWeight: "bold", width: "20px" }}>Peak Summer High Temp (°F/°C)</td>
                                            <td className='py-4' style={{ fontSize: 15 }} >77°F / 25°C</td>
                                            <td className='py-4' style={{ fontSize: 15 }} >80°F / 27°C</td>

                                        </tr>
                                        <tr>
                                            <td className='py-4' style={{ color: "rgb(18, 71, 115)", fontSize: 15, fontWeight: "bold", width: "20px" }}>Peak Winter Low Temp (°F/°C)</td>
                                            <td className='py-4' style={{ fontSize: 15 }}  >50°F / 10°C</td>
                                            <td className='py-4' style={{ fontSize: 15 }} >36°F / 2°C</td>

                                        </tr>
                                        <tr>
                                            <td className='py-4' style={{ color: "rgb(18, 71, 115)", fontSize: 15, fontWeight: "bold", width: "20px" }}>Avg. Winter High Temp (°F/°C)</td>
                                            <td className='py-4' style={{ fontSize: 15 }}>72°F / 22°C</td>
                                            <td className='py-4' style={{ fontSize: 15 }}>47°F / 8°C</td>

                                        </tr>
                                        <tr>
                                            <td className='py-4' style={{ color: "rgb(18, 71, 115)", fontSize: 15, fontWeight: "bold", width: "20px" }}>Rosarito Comparison</td>
                                            <td className='py-4' style={{ fontSize: 15 }}>Ocean view for 17% less than avg. Portland price, with better temperatures.</td>
                                            <td className='py-4' style={{ fontSize: 15 }}>
                                                Much Cheaper
                                                Milder Winters
                                            </td>


                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="widget-content-inner" style={{ minWidth: 660 }} >
                                <table className=' table table-striped  w-100  ' >
                                    <thead className='table-dark' >
                                        <tr>
                                            <th className='py-4' style={{ color: "#FFF", fontSize: 16, width: "240px" }} >Features</th>
                                            <th className='py-4' style={{ color: "#FFF", fontSize: 16 }} >Baja California Norte</th>
                                            <th className='py-4' style={{ color: "#FFF", fontSize: 16 }} >Utah</th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className='py-4' style={{ color: "rgb(18, 71, 115)", fontSize: 15, fontWeight: "bold", width: "20px" }} >City</td>
                                            <td className='py-4' style={{ fontSize: 15 }} >Rosarito</td>
                                            <td className='py-4' style={{ fontSize: 15 }} >Salt Lake City</td>
                                        </tr>
                                        <tr>
                                            <td className='py-4' style={{ color: "rgb(18, 71, 115)", fontSize: 15, fontWeight: "bold", width: "20px" }}>Avg. Price/Sq. Ft.</td>
                                            <td className='py-4' style={{ fontSize: 15 }} >$300</td>
                                            <td className='py-4' style={{ fontSize: 15 }} >$289</td>

                                        </tr>
                                        <tr>
                                            <td className='py-4' style={{ color: "rgb(18, 71, 115)", fontSize: 15, fontWeight: "bold", width: "20px" }}>Peak Summer High Temp (°F/°C)</td>
                                            <td className='py-4' style={{ fontSize: 15 }} >77°F / 25°C</td>
                                            <td className='py-4' style={{ fontSize: 15 }} >95°F / 35°C</td>

                                        </tr>
                                        <tr>
                                            <td className='py-4' style={{ color: "rgb(18, 71, 115)", fontSize: 15, fontWeight: "bold", width: "20px" }}>Peak Winter Low Temp (°F/°C)</td>
                                            <td className='py-4' style={{ fontSize: 15 }}  >50°F / 10°C</td>
                                            <td className='py-4' style={{ fontSize: 15 }} >25°F / -4°C</td>

                                        </tr>
                                        <tr>
                                            <td className='py-4' style={{ color: "rgb(18, 71, 115)", fontSize: 15, fontWeight: "bold", width: "20px" }}>Avg. Winter High Temp (°F/°C)</td>
                                            <td className='py-4' style={{ fontSize: 15 }}>72°F / 22°C</td>
                                            <td className='py-4' style={{ fontSize: 15 }}>40°F / 4°C</td>

                                        </tr>
                                        <tr>
                                            <td className='py-4' style={{ color: "rgb(18, 71, 115)", fontSize: 15, fontWeight: "bold", width: "20px" }}>Rosarito Comparison</td>
                                            <td className='py-4' style={{ fontSize: 15 }}>Same cost per square foot, but with ociean view, and much better temperatures.</td>
                                            <td className='py-4' style={{ fontSize: 15 }}>
                                                Approximate Same Cost
                                                Milder Winters
                                            </td>


                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="widget-content-inner" style={{ minWidth: 660 }} >
                                <table className=' table table-striped  w-100  ' >
                                    <thead className='table-dark' >
                                        <tr>
                                            <th className='py-4' style={{ color: "#FFF", fontSize: 16, width: "240px" }} >Features</th>
                                            <th className='py-4' style={{ color: "#FFF", fontSize: 16 }} >Baja California Norte</th>
                                            <th className='py-4' style={{ color: "#FFF", fontSize: 16 }} >Arizona</th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className='py-4' style={{ color: "rgb(18, 71, 115)", fontSize: 15, fontWeight: "bold", width: "20px" }} >City</td>
                                            <td className='py-4' style={{ fontSize: 15 }} >Rosarito</td>
                                            <td className='py-4' style={{ fontSize: 15 }} >Phoenix</td>
                                        </tr>
                                        <tr>
                                            <td className='py-4' style={{ color: "rgb(18, 71, 115)", fontSize: 15, fontWeight: "bold", width: "20px" }}>Avg. Price/Sq. Ft.</td>
                                            <td className='py-4' style={{ fontSize: 15 }} >$110</td>
                                            <td className='py-4' style={{ fontSize: 15 }} >$281</td>

                                        </tr>
                                        <tr>
                                            <td className='py-4' style={{ color: "rgb(18, 71, 115)", fontSize: 15, fontWeight: "bold", width: "20px" }}>Peak Summer High Temp (°F/°C)</td>
                                            <td className='py-4' style={{ fontSize: 15 }} >77°F / 25°C</td>
                                            <td className='py-4' style={{ fontSize: 15 }} >106°F / 41°C</td>

                                        </tr>
                                        <tr>
                                            <td className='py-4' style={{ color: "rgb(18, 71, 115)", fontSize: 15, fontWeight: "bold", width: "20px" }}>Peak Winter Low Temp (°F/°C)</td>
                                            <td className='py-4' style={{ fontSize: 15 }}  >50°F / 10°C</td>
                                            <td className='py-4' style={{ fontSize: 15 }} >45°F / 7°C</td>

                                        </tr>
                                        <tr>
                                            <td className='py-4' style={{ color: "rgb(18, 71, 115)", fontSize: 15, fontWeight: "bold", width: "20px" }}>Avg. Winter High Temp (°F/°C)</td>
                                            <td className='py-4' style={{ fontSize: 15 }}>72°F / 22°C</td>
                                            <td className='py-4' style={{ fontSize: 15 }}>66°F / 19°C</td>

                                        </tr>
                                        <tr>
                                            <td className='py-4' style={{ color: "rgb(18, 71, 115)", fontSize: 15, fontWeight: "bold", width: "20px" }}>Rosarito Comparison</td>
                                            <td className='py-4' style={{ fontSize: 15 }}>No ocean view at this price, but far cooler temperatures compared to Phoenix.</td>
                                            <td className='py-4' style={{ fontSize: 15 }}>
                                                Much Cheaper
                                                Milder Summers
                                            </td>


                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="widget-content-inner" style={{ minWidth: 660 }} >
                                <table className=' table table-striped  w-100  ' >
                                    <thead className='table-dark' >
                                        <tr>
                                            <th className='py-4' style={{ color: "#FFF", fontSize: 16, width: "240px" }} >Features</th>
                                            <th className='py-4' style={{ color: "#FFF", fontSize: 16 }} >Baja California Norte</th>
                                            <th className='py-4' style={{ color: "#FFF", fontSize: 16 }} >Nevada</th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className='py-4' style={{ color: "rgb(18, 71, 115)", fontSize: 15, fontWeight: "bold", width: "20px" }} >City</td>
                                            <td className='py-4' style={{ fontSize: 15 }} >Rosarito</td>
                                            <td className='py-4' style={{ fontSize: 15 }} >Las Vegas</td>
                                        </tr>
                                        <tr>
                                            <td className='py-4' style={{ color: "rgb(18, 71, 115)", fontSize: 15, fontWeight: "bold", width: "20px" }}>Avg. Price/Sq. Ft.</td>
                                            <td className='py-4' style={{ fontSize: 15 }} >$110</td>
                                            <td className='py-4' style={{ fontSize: 15 }} >$259</td>

                                        </tr>
                                        <tr>
                                            <td className='py-4' style={{ color: "rgb(18, 71, 115)", fontSize: 15, fontWeight: "bold", width: "20px" }}>Peak Summer High Temp (°F/°C)</td>
                                            <td className='py-4' style={{ fontSize: 15 }} >77°F / 25°C</td>
                                            <td className='py-4' style={{ fontSize: 15 }} >105°F / 40°C</td>

                                        </tr>
                                        <tr>
                                            <td className='py-4' style={{ color: "rgb(18, 71, 115)", fontSize: 15, fontWeight: "bold", width: "20px" }}>Peak Winter Low Temp (°F/°C)</td>
                                            <td className='py-4' style={{ fontSize: 15 }}  >50°F / 10°C</td>
                                            <td className='py-4' style={{ fontSize: 15 }} >40°F / 4°C</td>

                                        </tr>
                                        <tr>
                                            <td className='py-4' style={{ color: "rgb(18, 71, 115)", fontSize: 15, fontWeight: "bold", width: "20px" }}>Avg. Winter High Temp (°F/°C)</td>
                                            <td className='py-4' style={{ fontSize: 15 }}>72°F / 22°C</td>
                                            <td className='py-4' style={{ fontSize: 15 }}>60°F / 16°C</td>

                                        </tr>
                                        <tr>
                                            <td className='py-4' style={{ color: "rgb(18, 71, 115)", fontSize: 15, fontWeight: "bold", width: "20px" }}>Rosarito Comparison</td>
                                            <td className='py-4' style={{ fontSize: 15 }}>No ocean view at this price, but far cooler temperatures compared to Phoenix.</td>
                                            <td className='py-4' style={{ fontSize: 15 }}>
                                                Much Cheaper
                                                Cooler Summers
                                            </td>


                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="widget-content-inner" style={{ minWidth: 660 }} >
                                <table className=' table table-striped  w-100  ' >
                                    <thead className='table-dark' >
                                        <tr>
                                            <th className='py-4' style={{ color: "#FFF", fontSize: 16, width: "240px" }} >Features</th>
                                            <th className='py-4' style={{ color: "#FFF", fontSize: 16 }} >Baja California Norte</th>
                                            <th className='py-4' style={{ color: "#FFF", fontSize: 16 }} >Idaho</th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className='py-4' style={{ color: "rgb(18, 71, 115)", fontSize: 15, fontWeight: "bold", width: "20px" }} >City</td>
                                            <td className='py-4' style={{ fontSize: 15 }} >Rosarito</td>
                                            <td className='py-4' style={{ fontSize: 15 }} >Boise</td>
                                        </tr>
                                        <tr>
                                            <td className='py-4' style={{ color: "rgb(18, 71, 115)", fontSize: 15, fontWeight: "bold", width: "20px" }}>Avg. Price/Sq. Ft.</td>
                                            <td className='py-4' style={{ fontSize: 15 }} >$110</td>
                                            <td className='py-4' style={{ fontSize: 15 }} >$223</td>

                                        </tr>
                                        <tr>
                                            <td className='py-4' style={{ color: "rgb(18, 71, 115)", fontSize: 15, fontWeight: "bold", width: "20px" }}>Peak Summer High Temp (°F/°C)</td>
                                            <td className='py-4' style={{ fontSize: 15 }} >77°F / 25°C</td>
                                            <td className='py-4' style={{ fontSize: 15 }} >100°F / 38°C</td>

                                        </tr>
                                        <tr>
                                            <td className='py-4' style={{ color: "rgb(18, 71, 115)", fontSize: 15, fontWeight: "bold", width: "20px" }}>Peak Winter Low Temp (°F/°C)</td>
                                            <td className='py-4' style={{ fontSize: 15 }}  >50°F / 10°C</td>
                                            <td className='py-4' style={{ fontSize: 15 }} >25°F / -4°C</td>

                                        </tr>
                                        <tr>
                                            <td className='py-4' style={{ color: "rgb(18, 71, 115)", fontSize: 15, fontWeight: "bold", width: "20px" }}>Avg. Winter High Temp (°F/°C)</td>
                                            <td className='py-4' style={{ fontSize: 15 }}>72°F / 22°C</td>
                                            <td className='py-4' style={{ fontSize: 15 }}>40°F / 4°C</td>

                                        </tr>
                                        <tr>
                                            <td className='py-4' style={{ color: "rgb(18, 71, 115)", fontSize: 15, fontWeight: "bold", width: "20px" }}>Rosarito Comparison</td>
                                            <td className='py-4' style={{ fontSize: 15 }}>No ocean view at this price, but far milder temperatures compared to Phoenix.</td>
                                            <td className='py-4' style={{ fontSize: 15 }}>
                                                Much Cheaper
                                                Milder Winters
                                            </td>


                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="widget-content-inner" style={{ minWidth: 660 }} >
                                <table className=' table table-striped  w-100  ' >
                                    <thead className='table-dark' >
                                        <tr>
                                            <th className='py-4' style={{ color: "#FFF", fontSize: 16, width: "240px" }} >Features</th>
                                            <th className='py-4' style={{ color: "#FFF", fontSize: 16 }} >Baja California Norte</th>
                                            <th className='py-4' style={{ color: "#FFF", fontSize: 16 }} >New Mexico</th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className='py-4' style={{ color: "rgb(18, 71, 115)", fontSize: 15, fontWeight: "bold", width: "20px" }} >City</td>
                                            <td className='py-4' style={{ fontSize: 15 }} >Rosarito</td>
                                            <td className='py-4' style={{ fontSize: 15 }} >Albuquerque</td>
                                        </tr>
                                        <tr>
                                            <td className='py-4' style={{ color: "rgb(18, 71, 115)", fontSize: 15, fontWeight: "bold", width: "20px" }}>Avg. Price/Sq. Ft.</td>
                                            <td className='py-4' style={{ fontSize: 15 }} >$110</td>
                                            <td className='py-4' style={{ fontSize: 15 }} >$161</td>

                                        </tr>
                                        <tr>
                                            <td className='py-4' style={{ color: "rgb(18, 71, 115)", fontSize: 15, fontWeight: "bold", width: "20px" }}>Peak Summer High Temp (°F/°C)</td>
                                            <td className='py-4' style={{ fontSize: 15 }} >77°F / 25°C</td>
                                            <td className='py-4' style={{ fontSize: 15 }} >95°F / 35°C</td>

                                        </tr>
                                        <tr>
                                            <td className='py-4' style={{ color: "rgb(18, 71, 115)", fontSize: 15, fontWeight: "bold", width: "20px" }}>Peak Winter Low Temp (°F/°C)</td>
                                            <td className='py-4' style={{ fontSize: 15 }}  >50°F / 10°C</td>
                                            <td className='py-4' style={{ fontSize: 15 }} >25°F / -4°C</td>

                                        </tr>
                                        <tr>
                                            <td className='py-4' style={{ color: "rgb(18, 71, 115)", fontSize: 15, fontWeight: "bold", width: "20px" }}>Avg. Winter High Temp (°F/°C)</td>
                                            <td className='py-4' style={{ fontSize: 15 }}>72°F / 22°C</td>
                                            <td className='py-4' style={{ fontSize: 15 }}>50°F / 10°C</td>

                                        </tr>
                                        <tr>
                                            <td className='py-4' style={{ color: "rgb(18, 71, 115)", fontSize: 15, fontWeight: "bold", width: "20px" }}>Rosarito Comparison</td>
                                            <td className='py-4' style={{ fontSize: 15 }}>No ocean view for this price, but far milder temperatures compared to Albuquerque.</td>
                                            <td className='py-4' style={{ fontSize: 15 }}>
                                                Much Cheaper
                                                Milder Winters
                                            </td>


                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="widget-content-inner" style={{ minWidth: 660 }} >
                                <table className=' table table-striped  w-100  ' >
                                    <thead className='table-dark' >
                                        <tr>
                                            <th className='py-4' style={{ color: "#FFF", fontSize: 16, width: "240px" }} >Features</th>
                                            <th className='py-4' style={{ color: "#FFF", fontSize: 16 }} >Baja California Norte</th>
                                            <th className='py-4' style={{ color: "#FFF", fontSize: 16 }} >Texas</th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className='py-4' style={{ color: "rgb(18, 71, 115)", fontSize: 15, fontWeight: "bold", width: "20px" }} >City</td>
                                            <td className='py-4' style={{ fontSize: 15 }} >Rosarito</td>
                                            <td className='py-4' style={{ fontSize: 15 }} >Houston</td>
                                        </tr>
                                        <tr>
                                            <td className='py-4' style={{ color: "rgb(18, 71, 115)", fontSize: 15, fontWeight: "bold", width: "20px" }}>Avg. Price/Sq. Ft.</td>
                                            <td className='py-4' style={{ fontSize: 15 }} >$110</td>
                                            <td className='py-4' style={{ fontSize: 15 }} >$158</td>

                                        </tr>
                                        <tr>
                                            <td className='py-4' style={{ color: "rgb(18, 71, 115)", fontSize: 15, fontWeight: "bold", width: "20px" }}>Peak Summer High Temp (°F/°C)</td>
                                            <td className='py-4' style={{ fontSize: 15 }} >77°F / 25°C</td>
                                            <td className='py-4' style={{ fontSize: 15 }} >95°F / 35°C</td>

                                        </tr>
                                        <tr>
                                            <td className='py-4' style={{ color: "rgb(18, 71, 115)", fontSize: 15, fontWeight: "bold", width: "20px" }}>Peak Winter Low Temp (°F/°C)</td>
                                            <td className='py-4' style={{ fontSize: 15 }}  >50°F / 10°C</td>
                                            <td className='py-4' style={{ fontSize: 15 }} >45°F / 7°C</td>

                                        </tr>
                                        <tr>
                                            <td className='py-4' style={{ color: "rgb(18, 71, 115)", fontSize: 15, fontWeight: "bold", width: "20px" }}>Avg. Winter High Temp (°F/°C)</td>
                                            <td className='py-4' style={{ fontSize: 15 }}>72°F / 22°C</td>
                                            <td className='py-4' style={{ fontSize: 15 }}>65°F / 18°C</td>

                                        </tr>
                                        <tr>
                                            <td className='py-4' style={{ color: "rgb(18, 71, 115)", fontSize: 15, fontWeight: "bold", width: "20px" }}>Rosarito Comparison</td>
                                            <td className='py-4' style={{ fontSize: 15 }}>No ocean view, but far cooler temperatures compared to Houston.</td>
                                            <td className='py-4' style={{ fontSize: 15 }}>
                                                Much Cheaper
                                                Cooler Summers
                                            </td>


                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    )
}

export default ComparisonTable