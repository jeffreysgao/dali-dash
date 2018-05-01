import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchData } from '../../actions/index.js'
import Table from '../table/index.js'
import './index.css'

/*
	Dashboard is the parent component for Dashboard display table and Dashboard toolbar
	It manages the data to be displayed on the dashboard
*/
class Dashboard extends Component {
	componentDidMount() {
		this.props.fetchData()
	}

	render() {
		return (
			<div>
				<Table data={this.props.data} />
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
