import { ActionTypes } from '../actions'
import _ from 'lodash'

const initialState = {
	members: []
}

const DataReducer = (state = initialState, action) => {
	switch (action.type) {
		case ActionTypes.FETCH_DATA:
			return Object.assign({}, state, {
				members: action.payload
			})
		default:
			return state
	}
}

export default DataReducer