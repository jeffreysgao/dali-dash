import React, { Component } from 'react'
import _ from 'lodash'
import './index.css'

/*
	Table displays member information as cards
*/
export default class Table extends Component {
	renderMembers() {
		return _.map(this.props.data, (m) => {
			return (
				<div>
					{`${m.name}, \n${m.message}, \n${m.terms_on}`}
				</div>
			)
		})
	}

	render() {
		return (
			<div class='member-table'>
				{this.renderMembers()}
			</div>
		)
	}
}

