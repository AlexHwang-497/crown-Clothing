
import React from 'react'
import './collection-preview.styles.scss'


// * we are going to pass in the the title we need from our props
    // * we also need to always have the title be uppercase
// *we then want to map over an items array that 
    // * we will map with the item
// *we will also need to use filter() to limit up to 4 entries at a time
// todo: keep in mind in regards to react, wheveer this compnent gets renders, this function call, this chain modifications to our array
    // todo: gets called every time as long as this componnet has to render
    // todo: this will be a performnce concern if this array ever gets really large or on slower computers


const CollectionPreview = ({title,items}) => (
    <div className='collection-preview'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'>
            {items
            .filter((item,idx)=>idx<4)
            .map((item)=> (
                    <div key={item.id}>{item.name}</div>
                ))}
        </div>
    </div>
)
export default CollectionPreview