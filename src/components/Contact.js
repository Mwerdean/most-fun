import React, { Component } from 'react'
import portrait from '../assets/portrait.jpg'

export default class Contact extends Component {
    render() {
        return(
            <div className = 'contact' >
                <title>
                    <div>Contact</div>
                    <div>About Me</div>
                </title>
                <div className='contact-info'>
                    <img src={portrait} />
                    <div>
                        <div>
                        Hello! I’m Matthew, a web designer residing in the beautiful city of Tempe. I’ve been designing for about 2 years, working on all sorts of projects; from simple clean websites through to branding and packaging design. I'm always keen to hear about new collaborations and interesting projects so feel free to shoot me a message.
                        </div>
                        <div>
                            <button><span>Contact</span></button>
                            <button><span>Resume</span></button>
                        </div>
                    </div>
                    
                </div>
                
            </div>
        )
    }
}