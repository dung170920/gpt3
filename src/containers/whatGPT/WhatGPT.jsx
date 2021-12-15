import React from 'react'
import { Feature } from '../../components'
import './whatGPT.css'

const WhatGPT = () => {
    return (
        <div className="whatGPT" id="wgpt">
            <div className="whatGPT-feature">
                <Feature title="What is GPT-3" desc="We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by."/>
            </div>
            <div className="whatGPT-heading">
                <h2 className="text-gradient">The possibilities are beyond your imagination</h2>
                <p>Explore The Library</p>
            </div>
            <div className="whatGPT-container">
            <Feature title="Chatbots" desc="We so opinion friends me message as delight. Whole front do of plate heard oh ought."/>
            <Feature title="Knowledgebase" desc="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments"/>
            <Feature title="Education" desc="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments"/>
            </div>
        </div>
    )
}

export default WhatGPT
