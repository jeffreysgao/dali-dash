import React, { Component } from 'react'
import _ from 'lodash'
import ReactCardFlip from 'react-card-flip'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import './index.css'

const IMG_URL = 'http://mappy.dali.dartmouth.edu/'

/*
	Card displays member information
*/
export default class DaliCard extends Component {
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
			<ReactCardFlip isFlipped={this.state.isFlipped}>
				<Card
					className='member-card'
					key="front"
					onClick={this.onClick}
				>
					<CardHeader
						title={this.props.name}
						avatar={`${IMG_URL}${this.props.iconUrl}`}
					/>
					<CardTitle
						subtitle={this.props.message}
						style={{height: '50px', position: 'absolute'}}
					/>
				</Card>

				<Card
					className='member-card'
					key="back"
					onClick={this.onClick}
				>
					<CardHeader title={this.props.name} />
					<CardText>
						{this.props.terms_on}
					</CardText>
				</Card>
			</ReactCardFlip>
		)
	}
}

