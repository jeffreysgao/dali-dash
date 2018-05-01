import $ from 'jquery'
import _ from 'lodash'

export const ROOT_URL = 'http://mappy.dali.dartmouth.edu/'

export const ActionTypes = {
	FETCH_DATA: 'FETCH_DATA'
}

export function fetchData() {
	return (dispatch) => {
		$.ajax({
			type: 'GET',
			url: `${ROOT_URL}/members.json`,
			dataType: 'json',
			success: (data) => {
				dispatch({ type: ActionTypes.FETCH_DATA, payload: data })
			}
		})
	}
}