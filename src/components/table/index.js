import React, { Component } from 'react'
import _ from 'lodash'
import Card from '../card/index.js'
import './index.scss'

/*
	Table displays member information as cards
*/
export default class Table extends Component {
	renderMembers() {
		return _.map(this.props.data, (m) => {
			return (
				<Card name={m.name} message={m.message} terms_on={m.terms_on} />
			)
		})
	}

	render() {
		return (
			<div className='member-table'>
				{this.renderMembers()}
			</div>
		)
	}
}

