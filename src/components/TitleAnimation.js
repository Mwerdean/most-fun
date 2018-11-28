import React, { Component } from 'react'
import Social from './Social'
export default class TitleAnimation extends Component {
  render() {
    return (
        <div className='header'>
            <Social />
            
            <div className='reveal-body'>
                <div className={`intro-text ${this.props.left ? 'left' : ''}`}>The Portfolio of</div>
                <h1 className={`reveal-text1 ${this.props.left ? 'left' : ''}`}>MATTHEW WERDEAN</h1>
                <div className={`bottom-line ${this.props.left ? 'left' : ''}`}></div>
                <div className={`reveal-text2 ${this.props.left ? 'left' : ''}`}>Web Developer <div>&#9675;</div> Designer</div>
            </div>
                <div className={`arrow arrow-first ${this.props.left ? 'left' : ''}`}></div>
                <div className={`arrow arrow-second ${this.props.left ? 'left' : ''}`}></div>
        </div>
    )
  }
}
