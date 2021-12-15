import React from 'react'
import './feature.css'

const Feature = ({ title, desc }) => {
    return (
        <div className="feature">
            <div className="feature-heading">
                <div className="gradient-bar"></div>
                <h3>{title}</h3>
            </div>
            <div className="feature-desc">
            <p>{desc}</p>
            </div>
        </div>
    )
}

export default Feature