import React, { useState, useEffect, useContext } from "react";
import { URL } from "../BASE-URL/BASE-URL"
import axios from "axios"
import Header from "../Components/Header/Header";
import Table from "../Components/Table/Table";
import GlobalStateContext from "../Global/GlobalStateContext";
import "./FrontPage.css"
import Donut from "../Components/Donut/Donut";

const FrontPage = () => {

    const [investors, setInvestors] = useState()
    const { render } = useContext(GlobalStateContext)

    useEffect(() => {
        getInvestors()
    }, [render])
    console.log(render)
    const getInvestors = () => {
        axios.get(`${URL}/investors/all`)
            .then((response) => {
                setInvestors(response.data)
            }).catch((error) => {
                alert(error.message)
            })
    }

    const table = investors && investors.map((investor, index) => {
        return <tr key={investor.id}>
            <td className="centeredColumn">{index + 1}</td>
            <td>{investor.first_name}</td>
            <td>{investor.last_name}</td>
            <td className="centeredColumn">{investor.participation}%</td>
        </tr>
    })
    return (
        <div className="frontPageLayout">
            <Header />
            <div className="intro">
                <h1>INVESTIDORES</h1>
                <p>Relaçao de investidores e participação</p>
            </div>
            <Table className="tableComponent" tableInfo={table} />
            <Donut className="grafico" graphInfo={investors} />

        </div>
    )
}

export default FrontPage