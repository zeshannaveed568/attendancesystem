import React from 'react'
import Button from './Button'

const Form = () => {
    return (
        <form className='d-flex flex-column'>
            <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>
            <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" />
            </div>

            <Button title={'Login'} />
        </form>
    )
}

export default Form