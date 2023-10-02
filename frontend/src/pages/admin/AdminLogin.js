import React from 'react'
import Title from '../../components/Title'
import Form from '../../components/Form'
import MetaData from '../../components/MetaData'

const AdminLogin = () => {
    return (
        <div className="container d-flex flex-column  ">

            <MetaData title={'Admin Login'} />

            <Title title="Admin Login" />

            <div className="container-fluid  w-50 my-5">
                <div className="col">
                    <div className="card p-5" style={{ backgroundColor: '#451952' }}>
                        <Form />

                    </div>
                </div>
            </div>


        </div>
    )
}

export default AdminLogin