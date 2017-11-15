import React, { Component } from 'react'
import './country.css'

export default class Country extends Component {
    constructor(props) {
        super(props)
        this.state = {
            style: {}
        }
        this.handleMouseEnter = this.handleMouseEnter.bind(this)
        this.handleMouseLeave = this.handleMouseLeave.bind(this)
    }

    handleMouseEnter() {
        this.props.handleHover(this.props.name)
        this.setState({style: {fill: 'rgb(255,0,0)', stroke: "rgb(255,0,0)", transform: 'scale(2)', position: 'fixed', right: '50vw', top: '50vh', zIndex: 1000}})
    }

    handleMouseLeave() {
        this.props.handleHover("")
        this.setState({style: {}})
    }

    render() {

        let { id, name, path, selected, handleClick } = this.props

        if (selected) {
            selected = {fill: 'rgb(0,0,255)'}
        } else {
            selected = {}
        }

        const finalStyle = Object.assign({}, this.state.style, selected)

        return (
            <path
                className="country-svg"
                id={id}
                data-name={name}
                data-id={id}
                d={path}
                style={finalStyle} 
                onMouseEnter={this.handleMouseEnter}
                onMouseLeave={this.handleMouseLeave}
                onClick={handleClick}
            />
        )
    }
}
