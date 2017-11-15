import React, { Component } from 'react'
import Country from './countries/Country'
import countryInfo from './countries/countryInfo'
import './world.css'

export default class World extends Component {
constructor(props) {
    super(props)

    this.state = {
        countries: countryInfo,
        hovered: ""
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleHover = this.handleHover.bind(this)
}

handleClick(index) {
    let countries = [...this.state.countries]

    countries[index].selected = !countries[index].selected
    this.setState({countries})
}

handleHover(val) {
    this.setState({hovered: val})
}



render() {
    
    const { countries, hovered } = this.state
    
    const countryPaths = countries.map( (country,i) => {

        return (
            <Country 
                key={country.id}
                id={country.id} 
                name={country.name}
                path={country.d}
                selected={country.selected}
                style={country.style} 
                handleClick={() => this.handleClick(i)}
                handleHover={this.handleHover}
            />
        )
    } )

    return (
        <div>
            <div className="hovered-country">
                {hovered}
            </div>
            <svg
            viewBox="0 0 2000 1001"
            id="world"
            >
            {countryPaths}
            </svg>
        </div>
        )
}
}