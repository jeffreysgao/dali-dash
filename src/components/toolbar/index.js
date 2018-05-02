import React, { Component } from 'react'
import _ from 'lodash'
import AutoComplete from 'material-ui/AutoComplete'
import DropDownMenu from 'material-ui/DropDownMenu'
import MenuItem from 'material-ui/MenuItem'
import Paper from 'material-ui/Paper'

import './index.css'

export default class Toolbar extends Component {
	render() {
		return (
			<div className='toolbar-container'>
				<Paper zDepth={1} className='member-toolbar'>
					<div className='toolbar-container'>
						<div className='filter-toolbar'>
							<AutoComplete
								floatingLabelText="Filter by Name"
								filter={AutoComplete.fuzzyFilter}
								dataSource={this.props.names}
								onUpdateInput={this.props.filterName}
							/>
						</div>
						<div className='filter-toolbar'>
							<AutoComplete
								floatingLabelText="Filter by Project"
								filter={AutoComplete.fuzzyFilter}
								dataSource={this.props.roles}
								onUpdateInput={this.props.filterProject}
							/>
						</div>
						<div className='filter-toolbar'>
							<DropDownMenu
								style={{marginTop: '15px'}}
								value={this.props.sortBy}
								onChange={this.props.sort}
							>
								<MenuItem value={0} primaryText='Sort By Name' />
								<MenuItem value={1} primaryText='Sort By Project' />
							</DropDownMenu>
						</div>
					</div>
				</Paper>
			</div>
		)
	}
}