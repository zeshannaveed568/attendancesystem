import React from 'react'
import { Link } from 'react-router-dom'
import Title from '../../components/Title'
import Button from '../../components/Button'
import MetaData from '../../components/MetaData'



const Register = () => {
    return (
        <div className="container d-flex flex-column  ">

            <MetaData title={'Student Register'} />

            <Title title="Student Register" />

            <div className="container-fluid  w-50 ">
                <div className="col">
                    <div className="card p-5" style={{ backgroundColor: '#451952' }}>
                        <form className='d-flex flex-column'>
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label">Email address</label>
                                <input placeholder='Email Address' type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputPassword1" className="form-label">Password</label>
                                <input placeholder='Password' type="password" className="form-control" id="exampleInputPassword1" />
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputPassword1" className="form-label">Confirm Password</label>
                                <input placeholder='Confirm Password' type="cpassword" className="form-control" id="exampleInputPassword1" />
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputPassword1" className="form-label">Roll Number</label>
                                <input placeholder='Roll Number' type="Number" className="form-control" id="exampleInputPassword1" />
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputPassword1" className="form-label">Semester</label>
                                <input placeholder='Semester' type="Number" className="form-control" id="exampleInputPassword1" />
                            </div>

                            <Button title={'Signup'} />
                        </form>

                        <div className="d-flex justify-content-center"  >
                            <Link style={{ color: '#f39f5a', textDecoration: 'none' }} to="/studentlogin">Already have an Account? Login</Link>
                        </div>


                    </div>
                </div>
            </div>


        </div>
    )
}

export default Register