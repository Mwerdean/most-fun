import React, { Component } from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
library.add(fab)

export default class Social extends Component {
    render() {
        return(
            <div className='social'>
                <a className='socialmate' href='https://twitter.com/werdean'>
                    <FontAwesomeIcon icon={['fab', 'twitter']} size="2x"/>
                </a>
                <a className='socialmate' href='https://www.linkedin.com/in/matthew-werdean-742334158/'>
                    <FontAwesomeIcon icon={['fab', 'linkedin']} size="2x"/>
                </a>
                <a className='socialmate' href='https://github.com/Mwerdean'>
                    <FontAwesomeIcon icon={['fab', 'github']} size="2x"/>
                </a>
            </div>
        )
    }
}