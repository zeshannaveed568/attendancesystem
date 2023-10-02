import React from 'react'
import Title from './Title'
import MetaData from './MetaData'
import { Link } from 'react-router-dom'

const LeaveRequestLayout = () => {
    return (
        <>
            <MetaData title={'Leave Requests'} />
            <div className=' d-flex flex-column '>
                <Title title="Leave Requests" />

                <div className="container-fluid w-50 d-flex flex-column   ">

                    <div className="d-flex flex-column mb-5 ">
                        <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">
                            <div className="col ">
                                <div style={{ backgroundColor: '#451952' }} className="card text-white mb-3">
                                    <div className="card-header">Total Leave Requests</div>
                                    <div className="card-body">
                                        <h5 className="card-title">10</h5>
                                    </div>
                                </div>
                            </div>


                        </div>
                        <div className="dropdown">
                            <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Semester
                            </button>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" href="#">1</Link></li>
                                <li><Link className="dropdown-item" href="#">2 </Link></li>
                                <li><Link className="dropdown-item" href="#">3</Link></li>
                                <li><Link className="dropdown-item" href="#">4</Link></li>
                                <li><Link className="dropdown-item" href="#">5</Link></li>
                                <li><Link className="dropdown-item" href="#">6</Link></li>
                                <li><Link className="dropdown-item" href="#">7</Link></li>
                                <li><Link className="dropdown-item" href="#">8</Link></li>
                            </ul>
                        </div>
                    </div>



                    {/* table to display all students */}

                    <table className="table table-striped table-dark text-center ">
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Date</th>
                                <th scope="col">Reason</th>
                                <th scope="col">Status</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Mark</td>
                                <td>01-5-2023</td>
                                <td>
                                    <a href="mailto:" className="text-decoration-none"> Family Vecation</a>
                                </td>
                                <td>Pending</td>
                                <td>
                                    <Link to={`/admin/student/123`} className="btn btn-primary  px-3">
                                        <i className="fas fa-eye" />
                                        Approve
                                    </Link>
                                    <Link to={`/admin/student/123/edit`} className="btn btn-warning  px-3 mx-2">
                                        <i className="fas fa-edit" />Reject
                                    </Link>

                                </td>
                            </tr>

                        </tbody>

                    </table>


                </div>


            </div>
        </>
    )
}

export default LeaveRequestLayout