import React from 'react'
import './NewsLetter.css'

const NewsLetter = () => {


    return (
        <div className='newsletter'>
            <h1>Get Exclusive Offers Through Emails</h1>
            <p>Subscribe to Stay Updated</p>
            <div>
                <input type="email" placeholder="Enter Email Address..."/>
                <button>Subscribe</button>
            </div>
        </div>

    )
}

export default NewsLetter