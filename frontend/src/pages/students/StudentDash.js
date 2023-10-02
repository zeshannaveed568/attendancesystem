import React from 'react'
import Title from '../../components/Title'
import StudentDashImage from '../../assets/img/StudentDash.svg'
import Button from '../../components/Button'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MetaData from '../../components/MetaData'

const StudentDash = () => {
    const navigate = useNavigate()

    const handleMarkAttendance = () => {
        const notify = () => toast('Attendance Marked', {
            position: "top-left",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            icon: '✔'
        });
        notify()

    }

    const handleLeaveRequest = () => {
        navigate('/student/leaverequest')
    }

    const handleViewAttendance = () => {
        navigate('/student/viewattendance')
    }

    return (
        <div className="container d-flex flex-column  ">

            {/* <Navbar /> */}

            <MetaData title={'Student Dashboard'} />

            <Title title="Student Login" />

            <div className="container-fluid my-5">

                <div className="row my-5">
                    <div className="col-6 my-auto d-flex flex-column justify-content-center">
                        <div onClick={handleMarkAttendance} className='d-flex justify-content-center flex'>
                            <Button className='py-5' title={'Mark Attendance'} />
                            <ToastContainer
                                position="top-left"
                                autoClose={5000}
                                hideProgressBar
                                newestOnTop={false}
                                closeOnClick
                                rtl={false}
                                pauseOnFocusLoss
                                draggable
                                pauseOnHover
                                theme="dark"
                            />
                        </div>

                        <div onClick={handleLeaveRequest} className='d-flex justify-content-center '>
                            <Button title={'Request Leave'} />
                        </div>
                        <div onClick={handleViewAttendance} className='d-flex justify-content-center '>
                            <Button title={'View Attendance'} />
                        </div>
                    </div>
                    <div className="col-6 d-flex justify-content-end">
                        <img src={StudentDashImage} alt="" className='img-fluid w-75 object-fit-cover' />
                    </div>
                </div>

            </div>
        </div>)
}

export default StudentDash

