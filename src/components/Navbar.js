import React, { Component } from 'react'
import { CSSTransition } from 'react-transition-group'

export default class Navbar extends Component {
    state = {
        show: false
    }
    componentDidMount() {
        this.setState({show: true})
    }
    componentWillUnmount() {
        this.setState({show: false})
    }
    handleNavChange = (field) => {
        if(this.props.titleRef.current) {
            if(field === 'home') {
                window.scrollTo({top:this.props.titleRef.current.offsetTop, left: 0, behavior:'smooth'})
            } else if(field === 'about') {
                window.scrollTo({top:this.props.aboutRef.current.offsetTop, left: 0, behavior:'smooth'})
            } else if(field === 'works') {
                window.scrollTo({top:this.props.worksRef.current.offsetTop, left: 0, behavior:'smooth'})
            } else if(field === 'contact') {
                window.scrollTo({top:this.props.contactRef.current.offsetTop, left: 0, behavior:'smooth'})
            }
        }
    }
  render() {
    return (
        <div>
            <CSSTransition
                in={this.state.show}
                timeout={10}
                classNames="show-nav"
                >
                <div className={`navbar ${this.props.hamburger ? 'open-nav' : ''}`}>
                    <div className='hamburger-helper'>
                        <button className={`hamburger hamburger--collapse ${this.props.hamburger ? 'is-active': ''}`}  onClick={this.props.handleHamburger}type="button">
                            <span className="hamburger-box">
                                <span className="hamburger-inner"></span>
                            </span>
                        </button>
                    </div>
                    <div className='nav-body'>
                        <div className={`vertical-text ${this.props.hamburger ? 'vertical-r' : ''}`}>- Menu</div>
                        <div className={`display-none ${this.props.hamburger ? 'menu-options' : ''}`} >
                            <div>
                                <div className='front-text'>Home</div>
                                <a className='lead-text' onClick={() => this.handleNavChange('home')}>Intro</a>
                            </div>
                            <div>
                                <div className='front-text'>Find Out</div>
                                <a className='lead-text' onClick={() => this.handleNavChange('about')}>About</a>
                            </div>
                            <div>
                                <div className='front-text'>Selection</div>
                                <a className='lead-text' onClick={() => this.handleNavChange('works')}>Projects</a>
                            </div>
                            <div>
                                <div className='front-text'>Lets Chat</div>
                                <a className='lead-text' onClick={() => this.handleNavChange('contact')}>Contact</a>
                            </div>
                        </div>
                    </div>
                </div>
            </CSSTransition>
        </div>
    )
  }
}
