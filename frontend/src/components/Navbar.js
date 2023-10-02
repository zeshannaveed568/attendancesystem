import React from 'react'
import defaultUserImage from '../assets/img/defaultUser.png'

const Navbar = ({ role }) => {


    return (

        <div className="z-3 position-absolute start-0 bottom-0 w-100 d-flex justify-content-center mb-3">

            <div
                style={{ color: 'white', backgroundColor: '#ae445a' }}
                className='w-75 px-5 py-3 rounded-3 d-flex justify-content-between align-items-center'
            >
                <span
                    className='fw-bold fs-4'
                >
                    Welcome User
                </span>

                <img
                    src={defaultUserImage}
                    alt=""
                    className='img-fluid object-fit-cover'
                    style={{
                        width: '50px',
                        height: '50px',
                        borderStyle: 'solid',
                        borderWidth: '4px',
                        borderColor: 'white',
                        borderRadius: '50%'
                    }}
                />

            </div>

        </div>
    )
}

export default Navbar