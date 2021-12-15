import React from 'react'
import { Article } from '../../components'
import './blog.css'
import { article1, article2 } from './imports'

const Blog = () => {
    return (
        <div className="blog" id="blog">
            <h1 className="blog-title text-gradient">A lot is happening, We are blogging about it.</h1>
            <div className="blog-container">
            <div className="blog-container_left">
                <Article imgUrl={article1} date="Sep 26, 2021" title="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
            </div>
            <div className="blog-container_right">
            <Article imgUrl={article2} date="Sep 26, 2021" title="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
            <Article imgUrl={article2} date="Sep 26, 2021" title="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
            <Article imgUrl={article2} date="Sep 26, 2021" title="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
            <Article imgUrl={article2} date="Sep 26, 2021" title="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
            </div>
            </div>
        </div>
    )
}

export default Blog