import React from 'react'
import './article.css'

const Article = ({imgUrl, date, title}) => {
    return (
        <div className="article">
            <div className="article-image">
                <img src={imgUrl} alt="" />
            </div>
            <div className="article-content">
                <div className="article-heading">
                    <span>{date}</span>
                    <h4>{title}</h4>
                </div>
                <p><a href="#">Read Full Article</a></p>
            </div>
        </div>
    )
}

export default Article
