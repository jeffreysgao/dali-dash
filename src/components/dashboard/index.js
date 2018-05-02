import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchData } from '../../actions/index.js'
import _ from 'lodash'
import Toolbar from '../toolbar/index.js'
import Table from '../table/index.js'
import './index.css'

/*
	Dashboard is the parent component for Dashboard display table and Dashboard toolbar
	It manages the data to be displayed on the dashboard
*/
class Dashboard extends Component {
	constructor(props) {
		super(props)

		this.state = {
			sortBy: 0,
			filterName: '',
			filterProject: ''
		}

		this.getData = this.getData.bind(this)
		this.sort = this.sort.bind(this)
		this.filterName = this.filterName.bind(this)
		this.filterProject = this.filterProject.bind(this)
	}

	getData() {
		let data

		switch(this.state.sortBy) {
			case 0:
				data = _.sortBy(this.props.data, (d) => d.name)
				break
			case 1:
				data = _.sortBy(this.props.data, (d) => d.project[0])
		}

		if (!_.isNil(this.state.filterName) && this.state.filterName !== '') {
			data = _.filter(data, (d) => {
				return d.name.includes(this.state.filterName)
			})
		}

		if (!_.isNil(this.state.filterProject) && this.state.filterProject !== '') {
			data = _.filter(data, (d) => {
				return !_.isEmpty(d.project[0]) && d.project[0].includes(this.state.filterProject)
			})
		}

		return data
	}

	sort(event, index, value) {
		this.setState({
			sortBy: value
		})
	}

	filterName(value) {
		this.setState({ filterName: value })
	}

	filterProject(value) {
		this.setState({ filterProject: value })
	}

	componentDidMount() {
		this.props.fetchData()
	}

	render() {
		let data = this.getData()
		return (
			<div className='dashboard'>
				<Toolbar
					names={
						_.map(this.props.data, (m) => {
							return m.name
						}
					)}
					roles={
						_.uniq(
							_.map(
								_.filter(this.props.data, (m) => {
									return !_.isEmpty(m.project) && m.project[0] !== ""
								}), (m) => {
									return m.project[0]
								}
							)
						)
					}
					sortBy={this.state.sortBy}
					sort={this.sort}
					filterName={this.filterName}
					filterProject={this.filterProject}
				/>
				<Table data={data} />
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		data: state.members
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		fetchData: () => {
			dispatch(fetchData())
		}
	}
}

const ConnectedDashboard = connect(mapStateToProps, mapDispatchToProps)(Dashboard)

export default ConnectedDashboard
