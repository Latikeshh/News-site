import React from 'react'

function Table() {
    return (
        <div>
            <table border={'1'}>
                <thead>
                    <tr>
                        <td>Srno</td>
                        <td>Name</td>
                        <td>Address</td>
                        <td>contact</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td> 1</td>
                        <td> Latikesh Marathe</td>
                        <td> Dhule</td>
                        <td> 787534551</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td> Yash Jadhav</td>
                        <td> Dhule</td>
                        <td> 90909090</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Table
