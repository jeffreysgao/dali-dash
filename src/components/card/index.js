import React, { Component } from 'react'
import _ from 'lodash'
import ReactCardFlip from 'react-card-flip'
import './index.css'


/*
	Card displays member information
*/
export default class Card extends Component {
	constructor(props) {
		super(props)

		this.state = {
			isFlipped: false
		}

		this.onClick = this.onClick.bind(this)
	}

	onClick(e) {
		e.preventDefault()
		this.setState({ isFlipped: !this.state.isFlipped })
	}

	render() {
		return (
			<ReactCardFlip isFlipped={this.state.isFlipped} style={{width: '200px'}}>
        <div key="front" class="card-front" onClick={this.onClick}>
          {`${this.props.name}, \n${this.props.message}, \n${this.props.terms_on}`}
        </div>

        <div key="back" class="card-back" onClick={this.onClick}>
          This is the back of the card.
        </div>
      </ReactCardFlip>
		)
	}
}

