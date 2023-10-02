import React from 'react'
import Title from '../../components/Title'
import Button from '../../components/Button'
import MetaData from '../../components/MetaData'

const LeaveRequest = () => {
    return (
        <div className="container d-flex flex-column  ">

            <MetaData title={'Leave Request'} />
            <Title title="Request Leave" />

            <div className="container-fluid mt-5 w-50">
                <div className="col">
                    <div className="card p-5" style={{ backgroundColor: '#451952' }}>
                        <form className='d-flex flex-column'>
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label">Subject</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputPassword1" className="form-label">Detailed Reason</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>

                            <Button title={'Submit Request'} />
                        </form>
                    </div>
                </div>
            </div>
            <Title title="Leave Requests" />
            <div className="card-leave-status card w-75 h-25" style={{ color: 'white', backgroundColor: '#451952', alignSelf: 'center' }}>
                {/* leave Status */}
                <div className="card-body">
                    <div className='d-flex justify-content-between'>
                        <h5 className="card-title">Leave Status</h5>
                        <p>for subject</p>
                    </div>

                    <p className="card-text">Approved</p>
                </div>
            </div>
        </div>
    )
}

export default LeaveRequest