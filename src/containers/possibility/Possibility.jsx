import React from 'react'
import './possibility.css'
import possibilityImage from '../../assets/images/Feature Image.png'

const Possibility = () => {
    return (
        <div className="possibility" id="possibility">
            <div className="possibility-image">
                <img src={possibilityImage} alt="" />
            </div>
            <div className="possibility-content">
                <h4>Request Early Access to Get Started</h4>
                <h2 className="text-gradient">The possibilities are beyond your imagination</h2>
                <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
                <h4>Request Early Access to Get Started</h4>
            </div>
        </div>
    )
}

export default Possibility