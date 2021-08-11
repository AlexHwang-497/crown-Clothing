import React from 'react'
import MenuItem from '../menu-item/menu-item.components'
import './directory.styles.scss'


// * we willl make this a class bomponent because we do neet to store the state value of those menu items taht we want ot pass and create our menu items with

class Directory extends React.Component{
    constructor(){
        // todo: we call in super(), so that we pull in all the things we need from our React component
        super()
        this.state={
            // *this will represnt each of our menu items
            // * the data proivded contains a title and image url
            sections: [
                {
                  title: 'hats',
                  imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                  id: 1,
                  linkUrl: 'hats'
                },
                {
                  title: 'jackets',
                  imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                  id: 2,
                  linkUrl: ''
                },
                {
                  title: 'sneakers',
                  imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                  id: 3,
                  linkUrl: ''
                },
                {
                  title: 'womens',
                  imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                  size: 'large',
                  id: 4,
                  linkUrl: ''
                },
                {
                  title: 'mens',
                  imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                  size: 'large',
                  id: 5,
                  linkUrl: ''
                }
              ]
            
        }
    }
    // * inside of our render, we want to return what we had in our home page
    // * we will run a map function and we want to apss these section objects into our menu, so that we can create menu items
        // * we are also destructing the object to get what we specifically need
    // todo: {id, ...otherSectionProps} - otherSectionprops = the rest of our keys.  we spread them all in 
      // todo:othersection prop =title={title} imageUrl={imageUrl} size={size}
        
    render(){
        return (
            <div className='directory-menu'>
            {this.state.sections.map(({id, ...otherSectionProps})=>(
                    <MenuItem key={id} {...otherSectionProps} />
                ))}
            </div>
        )
    }
}

export default Directory