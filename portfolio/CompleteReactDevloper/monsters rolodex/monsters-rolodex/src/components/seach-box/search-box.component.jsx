import React from 'react'

import './search-box.styles.css'

// *this is a functional compnent
    // todo: app.js is a class copmennt
    // todo: unlike class compnent, they don't access to state because they don't have access to the constructor thorugh the class method
        //TODO:  they also don't have access to lifecylcle and internal state
// todo: hence, a functional compennt is just a compnent that gets some props and returns some html 
    // 
export const SeachBox = ({placeholder, handleChange}) =>(
    <input 
        className='search'
        type='search' 
        // * we are making this dynamic
        placeholder={placeholder}
        // *set state is an asyc function, so there will be a delay
        onChange={handleChange}
    />
)