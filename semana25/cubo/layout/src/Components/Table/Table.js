import React from "react";
import "./Table.css"

const Table = (props) => {

    return (
        <div className="tableContainer">
            <table className="table">
                <thead>
                    <tr>
                        <th></th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Participation</th>
                    </tr>
                </thead>
                <tbody>
                    {props && props.tableInfo}
                </tbody>
            </table>
        </div>
    )
}

export default Table