import React from 'react'
import MetaData from '../../components/MetaData'
import Title from '../../components/Title'
import { Link } from 'react-router-dom'

const AllStudents = () => {
    return (
        <>
            <MetaData title={'All Students'} />

            <div className=' d-flex flex-column '>
                <Title title={'All Students'} />

                <div className="container-fluid w-50 d-flex flex-column   ">

                    <div className="d-flex flex-column mb-5 ">
                        <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">
                            <div className="col ">
                                <div style={{ backgroundColor: '#451952' }} className="card text-white mb-3">
                                    <div className="card-header">Total Students</div>
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
                                <th scope="col">Roll No</th>
                                <th scope="col">Name</th>
                                <th scope="col">Semester</th>
                                <th scope="col">Email</th>
                                <th scope="col">Phone No</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">#123</th>
                                <td>Mark</td>
                                <td>1</td>
                                <td>
                                    <a href="mailto:" className="text-decoration-none">mark@gmail.com</a>
                                </td>
                                <td>1234567890</td>
                                <td>
                                    <Link to={`/admin/student/123`} className="btn btn-primary  px-3">
                                        <i className="fas fa-eye" />
                                        View

                                    </Link>
                                    <Link to={`/admin/student/123/edit`} className="btn btn-warning  px-3 mx-2">
                                        <i className="fas fa-edit" />Edit
                                    </Link>
                                    <button className="btn btn-danger  px-3 ">
                                        <i className="fas fa-trash-alt" />Delete
                                    </button>
                                </td>
                            </tr>

                        </tbody>

                    </table>


                </div>

            </div>
        </>
    )
}

export default AllStudents