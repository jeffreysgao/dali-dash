import React, { Component } from 'react'
import _ from 'lodash'
import ReactCardFlip from 'react-card-flip'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton'
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
		this.infoClick = this.infoClick.bind(this)
	}

	onClick(e) {
		e.preventDefault()
		this.setState({ isFlipped: !this.state.isFlipped })
	}

	infoClick(e) {
		window.open(this.props.url.substring(0, 2) === '//' ? this.props.url : `${IMG_URL}${this.props.url}`)
		e.stopPropagation()
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
						subtitle={ _.isEmpty(this.props.project) || this.props.project[0] === '' ? '' : this.props.project[0] }
						avatar={`${IMG_URL}${this.props.iconUrl}`}
					/>
					<CardTitle
						subtitle={`"${this.props.message}"`}
						style={{height: '50px', width: '238px', position: 'absolute', textAlign: 'center'}}
					/>
				</Card>

				<Card
					className='member-card'
					key="back"
					onClick={this.onClick}
				>
					<CardTitle
						title={this.props.name}
						subtitle={`Terms On: ${this.props.terms_on.toString()}`}
						style={{height: '50px', width: '238px', textAlign: 'center'}}
					/>
					<CardActions style={{textAlign: 'center'}}>
			      <FlatButton
			      	label="About Me"
			      	onClick={this.infoClick}
		      	/>
			    </CardActions>
				</Card>
			</ReactCardFlip>
		)
	}
}

