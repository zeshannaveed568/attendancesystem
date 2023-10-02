import React from 'react'
import Title from '../../components/Title'
import MetaData from '../../components/MetaData'

const ViewAttendance = () => {
    return (
        <div className="container d-flex flex-column position-relative " >

            <MetaData title={'View Attendance'} />

            <Title title="Attendance Record" />

            <div className="container-fluid  w-75 my-5">

                {/* add bootstrap table */}
                <table className="table table-striped table-dark text-center">
                    <thead>
                        <tr>
                            <th scope="col">Date</th>
                            <th scope="col">Present</th>
                            <th scope="col">Absent</th>
                            <th scope="col">Leave</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Date</td>
                            <td>&#10004;</td>
                            <td>&#8212;</td>
                            <td>&#8212;</td>
                        </tr>
                        <tr>
                            <td>Date</td>
                            <td>&#10004;</td>
                            <td>&#8212;</td>
                            <td>&#8212;</td>
                        </tr>
                        <tr>
                            <td>Date</td>
                            <td>&#10004;</td>
                            <td>&#8212;</td>
                            <td>&#8212;</td>
                        </tr>

                    </tbody>
                </table>


            </div>

        </div >
    )
}

export default ViewAttendance