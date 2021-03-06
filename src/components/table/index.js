import React, { Component } from 'react'
import _ from 'lodash'
import DaliCard from '../card/index.js'
import './index.scss'

/*
	Table displays member information as cards
*/
export default class Table extends Component {
	renderMembers() {
		return _.map(this.props.data, (m) => {
			return (
				<DaliCard
					name={m.name}
					message={m.message}
					terms_on={m.terms_on}
					project={m.project}
					url={m.url}
					iconUrl={m.iconUrl}
				/>
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

