import { SET_FILTERS, SET_RESTAURANTS, CLEAR_FILTERS } from '../actions/restaurants';

const initialState = {
	filteredRestaurants: [],
	filter: {},
};

const restaurantReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_RESTAURANTS:
			return {
				...state,
				filteredRestaurants: action.restaurants,
			};
		case SET_FILTERS:
			return {
				...state,
				filter: action.filters,
			};
		case CLEAR_FILTERS:
			return {
				...state,
				filter: {},
			};
		default:
			return state;
	}
};

export default restaurantReducer;
