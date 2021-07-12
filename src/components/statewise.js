import React, { useEffect, useState } from 'react'
import "./statewise.css"

/**
* @author
* @function StateWise
**/

const StateWise = (props) => {
    const [sdata, setSdata] = useState([]);
    const getCovidData = async () => {
        const res = await fetch("https://api.covid19india.org/data.json")
        const data=await res.json()
        console.log(data.statewise);
        setSdata(data.statewise);
    }
    useEffect(() => {
        getCovidData();
    }, [])
    return (
        <div>
            <div class="table-container">
                <h1 class="heading">Statewise Covid Cases</h1>
                <table class="table">
                    <thead>
                        <tr>
                            <th>State</th>
                            <th>Active Cases</th>
                            <th>Recovered</th>
                            <th>Confirmed</th>
                            <th>Deaths</th>
                            <th>Updated At</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            sdata.map((info, index) => {
                                return (
                                    <tr key={index}>
                                        <td data-label="State">{info.state}</td>
                                        <td data-label="Active Cases">{info.active}</td>
                                        <td data-label="Recovered">{info.recovered}</td>
                                        <td data-label="Confirmed">{info.confirmed}</td>
                                        <td data-label="Deaths">{info.deaths}</td>
                                        <td data-label="Updated At">{info.lastupdatedtime}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>

    )

}

export default StateWise