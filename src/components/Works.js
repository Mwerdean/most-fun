import React, { Component } from 'react'
import HoverPicture from './HoverPicture'
import ScentricStore from '../assets/scentric-store-crop.png'
import DesertLymphaticStore from '../assets/desertlymphatic.png'
import BasisStore from '../assets/basis-store.png'
import Musk from '../assets/elon-musk2.png'

const options = {
    max: 0,
    perspective: 1000,
    scale: 1.1,
    translateX: true,
    translateXY: 40
  }

export default class Works extends Component {
    constructor(props) {
        super(props)
        this.state = {
            animate: false,
            animate2: false
        }
        this.ref1 = React.createRef()
        this.ref2 = React.createRef()
        this.ref3 = React.createRef()
    }
    componentWillMount() {
        window.addEventListener('scroll', (event) => {
            let scrollTop = event.srcElement.scrollingElement.scrollTop
            if(scrollTop > this.ref1.current.offsetTop - 450) {
                console.log(this.ref1.current.scrollHeight)
                console.log('scrollTop', scrollTop)
                this.setState({ animate: true })
            }
            if(scrollTop > this.ref2.current.offsetTop - 450) {
                console.log('animate2:' ,this.state.animate2)
                this.setState({ animate2: true })
            }          
            if(scrollTop > this.ref3.current.offsetTop - 450) {
                console.log('animate2:' ,this.state.animate2)
                this.setState({ animate3: true })
            }          
        })
    }
    componentWillUnmount() {
        window.removeEventListener('scroll')
    }
    render() {
        return(
            <div className='body' ref={this.props.worksRef}>
                <title>
                    <div>Selected works</div>
                    <div>2017 - 2018</div>
                </title>
                <div className='projects' ref={this.ref1}>
                    <div className='project-description'>
                        Scentric is a full-stack MERN (MongoDB, Express, React, Node) application with the exeption of using a Postgres database over MongoDB. The website is a complete ecommerce platform, including accounts, admin, statistics, and live chat. Despite being created only to show of our skills, the website could be turned into a fully functional product. Many technologies were used when making this project including but not limited to: <br /> React | Redux | JavaScript(ES6) | CSS | Sass | NodeJS | ExpressJS | Massive | PostgreSQL | Sockets | Auth0 | ChartJS
                    </div>
                    <div className='title-card'>
                        <div>- 0 1</div>
                        <div className={this.state.animate ? `reveal-text1`: `title-hidden`}>Scentric</div>
                    </div>
                    <HoverPicture 
                        options={{}}
                        animate={this.state.animate}
                        style={{
                            background: `url(${ScentricStore}) no-repeat  center center`,
                            backgroundSize: '780px 440px',
                            height: 410,
                            width: 640,
                        }}
                        >
                        <HoverPicture
                            options={options}
                            >
                                <img src={Musk} className='hover-focus' alt=''/>

                        </HoverPicture>
                    </HoverPicture>
                </div>


                <div className='projects works-top-margin' ref={this.ref2}>
                    <HoverPicture 
                        options={{}}
                        animate={this.state.animate2}
                        style={{
                            background: `url(${DesertLymphaticStore}) no-repeat  center center`,
                            backgroundSize: 'contain',
                            height: 410,
                            width: 630,
                        }}
                    />
                    <div className='title-card-right'>
                        <div>- 0 2</div>
                            <div className={this.state.animate2 ? `reveal-text3`: `title-hidden`}>Desert Lymphatic</div>
                        </div>
                    <div className='project-description2'>
                        The Desert Lymphatic Massage (DLM) website was created using React. My goal with this website was to provide a very simple experience for a home startup that was satifying to look at but not to overwhelming. Because of the simplicity, this allows the customer to easily navigate the website to make reservations and find the business location with ease. 
                    </div>
                </div>


                <div className='projects works-top-margin' ref={this.ref3}>
                    <div className='project-description'>
                        My time at BASIS started off as a part time employee learning the systems of the company and to absorb as much information as possible. After two months of employment I was hired full time to take on the responsibilities of managing the companies primary eCommerce system for thousands of customers. This includes cooperating with CIO's and Head of Operations of multiple schools to ensure their vision is delivered. 
                    </div>
                    <div className='title-card'>
                        <div>- 0 3</div>
                        <div className={this.state.animate3 ? `reveal-text1`: `title-hidden`}>BASIS.ed</div>
                    </div>
                    <HoverPicture 
                        options={{}}
                        animate={this.state.animate3}
                        style={{
                            background: `url(${BasisStore}) no-repeat  center center`,
                            backgroundSize: 'contain',
                            height: 440,
                            width: 750,
                        }}
                    />
                </div>
            </div>
        )
    }
}