import React from 'react'
import Directory from '../../components/directory/directory.component'

import { HomePageContainer } from './homepage.styles'


const HomePage = () => (
    // *this is the container for the menu
    <HomePageContainer>
        <Directory/>
    </HomePageContainer>
)

export default HomePage