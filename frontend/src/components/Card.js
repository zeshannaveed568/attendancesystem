import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({ title, url, img, hover }) => {
    return (
        <div className="col w-50 ">
            <div className={`card h-100 ${hover} px-4 py-4`}>
                <img src={img} className="card-img-top h-75 object-fit-contain" alt="..." />
                <div className="card-body h-25 d-flex justify-content-center">
                    <Link to={url} style={{ textDecoration: 'none' }} className="card-title fw-bold">{title}</Link>
                </div>
            </div>
        </div>
    )
}

export default Card


// "card h-100 admin-login-card px-4 py-4"