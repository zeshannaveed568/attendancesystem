import React from 'react'
import ProfessorImage from '../assets/img/Professor.svg'
import AdminImg from '../assets/img/Admin.svg'
import Title from '../components/Title'
import Card from '../components/Card'
import MetaData from '../components/MetaData'


const Home = () => {
    return (
        <div className="container d-flex flex-column ">
            <MetaData title={'Home'} />
            <Title title={'Student Attendance Management System'} />
            <div className='container-fluid d-flex flex-column w-75 position-relative'>
                <div className='container'>
                    <img src={ProfessorImage} className="img-fluid w-100 d-flex justify-content-center" alt="..."></img>
                </div>

                <div className="container w-75 d-flex justify-content-end position-absolute top-50 end-0  my-4 py-2 ">
                    <div className="row row-cols-1 row-cols-md-2 g-4  w-75 mx-2  ">

                        <Card title={'Admin Login'} url={'/admin/login'} img={AdminImg} hover={'admin-login-card'} />
                        <Card title={'Student Login'} url={'/student/login'} img={ProfessorImage} hover={'student-login-card'} />
                    </div>

                </div>


            </div>
        </div>
    )
}

export default Home