import React from 'react';
import {Card} from '../card/card.component'
import './card-list.styles.css'

// * one of the main properties that exists on props is children
    // *children are what you pass in between the broackts of our compnents
    //* ex.<CardList name="Alex">Alex</CardList> **** Alex in this case
    export const CardList = props =>(
        <div className='card-list'>
        {props.monsters.map(monster =>(
        // *cardlist compnent does not determine how this is going to look like
        //  *hence, we need to create a new card componoent
        //  *we pass monster into the card component and the card component will get if rom props in card.compnent.jsx and displays the name
        
          <Card key ={monster.id} monster={monster}/>
        ))}
    </div>
)
    
