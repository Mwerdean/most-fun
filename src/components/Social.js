import React, { Component } from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
library.add(fab)

export default class Social extends Component {
    render() {
        return(
            <div className='social'>
                <div className='socialmate'>
                    <FontAwesomeIcon icon={['fab', 'twitter']} size="2x"/>
                </div>
                <div className='socialmate'>
                    <FontAwesomeIcon icon={['fab', 'linkedin']} size="2x"/>
                </div>
                <div className='socialmate'>
                    <FontAwesomeIcon icon={['fab', 'github']} size="2x"/>
                </div>
            </div>
        )
    }
}