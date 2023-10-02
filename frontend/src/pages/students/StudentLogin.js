import React from 'react'
import Title from '../../components/Title'
import Form from '../../components/Form'
import { Link } from 'react-router-dom'
import MetaData from '../../components/MetaData'

const StudentLogin = () => {
    return (
        <div className="container d-flex flex-column  ">
            <MetaData title={'Student Login'} />

            <Title title="Student Login" />

            <div className="container-fluid  w-50 my-5">
                <div className="col">
                    <div className="card p-5" style={{ backgroundColor: '#451952' }}>
                        <Form />

                        {/* register/ forget password */}
                        <div className="d-flex justify-content-between"  >
                            <Link style={{ color: '#f39f5a', textDecoration: 'none' }} to="/student/register">Don't have an Account? Register</Link>
                            <Link style={{ color: '#f39f5a', textDecoration: 'none' }} to="/student/forget-password">Forget Password</Link>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default StudentLogin