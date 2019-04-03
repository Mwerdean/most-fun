import React, { Component } from 'react'
import Navbar from './Navbar'
import TitleAnimation from './TitleAnimation'
import Works from './Works'
import About from './About'
import Contact from './Contact'


export default class MainWrapper extends Component {
    constructor(props) {
        super(props)
        this.state = {
            hamburger: false
        }
        this.titleRef = React.createRef()
        this.aboutRef = React.createRef()
        this.worksRef = React.createRef()
        this.contactRef = React.createRef()
    }

    handleHamburger = () => {
        this.setState({ hamburger: !this.state.hamburger })
    }

    render() {
        return(
            <div className='br'>
                <Navbar 
                    handleHamburger={this.handleHamburger}
                    hamburger={this.state.hamburger}
                    titleRef={this.titleRef}
                    aboutRef={this.aboutRef}
                    worksRef={this.worksRef}
                    contactRef={this.contactRef}
                    />
                <TitleAnimation 
                    left={this.state.hamburger} 
                    titleRef={this.titleRef}
                    />
                <About aboutRef={this.aboutRef}/>
                <Works worksRef={this.worksRef}/>
                <Contact contactRef={this.contactRef}/>
            </div>
        )
    }
}