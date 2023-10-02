import React from 'react'

const Title = ({ title }) => {
    return (
        <div className="container-fluid d-flex justify-content-center text-center text-light my-5">
            <h1 className="fw-bolder">{title}</h1>
        </div>
    )
}

export default Title