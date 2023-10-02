import React from 'react'
import defaultUserImage from '../assets/img/defaultUser.png'
import Button from './Button'
import { useNavigate } from 'react-router-dom'

const AdminMenu = ({ role }) => {

    const navigate = useNavigate();

    const handleClickStudents = () => {
        navigate(`/admin/allstudents`);
    }
    const handleClickAttendance = () => {
        navigate(`/admin/viewattendance`);
    }
    const handleClickReport = () => {
        navigate(`/admin/attendancereport`);
    }
    const handleClickLeaves = () => {
        navigate(`/admin/leaverequest`);
    }
    const handleClickGrading = () => {
        navigate(`/admin/grading`);
    }
    return (
        <div className="z-3  position-absolute top-50 start-0 translate-middle-y h-75 w-25 mx-3">

            <div
                style={{ color: 'white', backgroundColor: '#ae445a' }}
                className='w-75 h-100 flex-column  rounded-3 d-flex justify-content-center py-5 '
            >

                <div className="d-flex flex-column">

                    <img
                        src={defaultUserImage}
                        alt=""
                        className='img-fluid object-fit-cover align-self-center '
                        style={{
                            width: '150px',
                            height: '150px',
                            borderStyle: 'solid',
                            borderWidth: '4px',
                            borderColor: 'white',
                            borderRadius: '50%'
                        }}
                    />
                </div>


                <div className="d-flex flex-column my-4">

                    <div onClick={handleClickStudents} className='admin-menu d-flex  justify-content-center align-items-center my-1'>
                        <label htmlFor=""> Logged In Students</label>
                    </div>

                    <div onClick={handleClickAttendance} className='admin-menu d-flex justify-content-center align-items-center my-1'>
                        <label htmlFor=""> View Attendance</label>
                    </div>

                    <div onClick={handleClickReport} className='admin-menu d-flex justify-content-center align-items-center my-1'>
                        <label htmlFor="">Create Attendace Report</label>
                    </div>

                    <div onClick={handleClickLeaves} className='admin-menu d-flex justify-content-center align-items-center my-1'>
                        <label htmlFor=""> Leaves Request</label>
                    </div>

                    <div onClick={handleClickGrading} className='admin-menu d-flex justify-content-center align-items-center my-1'>
                        <label htmlFor=""> Grading System</label>
                    </div>

                    <div className=' d-flex justify-content-center align-items-center my-1'>
                        <Button title='Logout' />
                    </div>

                </div>
            </div>

        </div>
    )
}

export default AdminMenu