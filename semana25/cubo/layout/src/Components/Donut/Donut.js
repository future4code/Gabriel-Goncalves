import React from "react"
import { Doughnut } from "react-chartjs-2"



const Donut = (props) => {

    const fName = props &&
        props.graphInfo &&
        props.graphInfo.map((investor) => {
            const fName = investor.first_name

            return fName
        })

    const participation = props &&
        props.graphInfo &&
        props.graphInfo.map((investor) => {
            const participation = investor.participation

            return participation
        })

    const data = {
        labels: fName,
        datasets: [{
            data: participation,
            backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
                'rgba(153, 102, 255, 0.5)',
                'rgba(255, 159, 64, 0.5)'
            ]
        }]
    }

    return (
        <div>
            <Doughnut data={data} />
        </div>
    )
}

export default Donut