import React from 'react'
import './menu-item.styles.scss'
// *this is a higher order component
import { withRouter } from 'react-router-dom'

// * four our menu item we are goin to use a functional componet because we don't really need our compnoent 
    // * to hold any state
// *div style, this allows us to post the images from directory in the background, size
// ! discuss with carlos in regard to what 'history' does
// ! discuss with carlos in regard to what 'match' does
const MenuItem = ({title, imageUrl, size, history, linkUrl, match}) => (
    // *this allows us to now click on the buttons and take us to our specific pages
        // *this helps with our basic navigation setup
    <div className={`${size} menu-item`} onClick = {()=> history.push(`${match.url}${linkUrl}`)}>
        <div 
            className='background-image' 
            style={{
                backgroundImage: `url(${imageUrl})`
            }}
        />
        <div className='content'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <span className='subtitle'>SHOP NOW</span>
        </div>
    </div>
)

export default withRouter(MenuItem)