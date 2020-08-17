export const SET_FILTERS = 'SET_FILTERS';
export const CLEAR_FILTERS = 'CLEAR_FILTERS';
export const SET_RESTAURANTS = 'SET_RESTAURANTS';
import firebase from '../../config/firebase/firebase';
import Restaurant from '../../models/restaurants';

export const fetch = filter => {
	const functions = firebase.functions();
	let callable;
	let promise;

	if (filter) {
		callable = functions.httpsCallable('getFilteredRestaurants');
		promise = callable(filter);
	} else {
		callable = functions.httpsCallable('getAllRestaurants');
		promise = callable();
	}

	return promise
		.then(restObj => {
			const restaurants = [];
			restObj.data.forEach(restaurant => {
				let id;
				let name;
				let category;
				let imageUrl;
				let description;
				let city;
				let address1;
				let address2;
				for (const key in restaurant) {
					id = key;
					name = restaurant[key].name;
					category = restaurant[key].category;
					imageUrl = restaurant[key].imageUrl;
					description = restaurant[key].description;
					city = restaurant[key].city;
					address1 = restaurant[key].address1;
					address2 = restaurant[key].address2;
				}
				restaurants.push(new Restaurant(id, name, category, imageUrl, description, city, address1, address2));
			});

			return restaurants;
		})
		.catch(error => {
			console.log("An error occurred on fetch restaurants!", error);
			return [];
		});
};

export const setRestaurants = (restaurants, filter) => {
	return {
		type: SET_RESTAURANTS,
		restaurants: restaurants,
		filter: filter,
	};
};

export const setFilters = (appliedFilters) => {
	return {
		type: SET_FILTERS,
		filters: appliedFilters,
	};
};


export const clearFilters = () => {
	return {
		type: CLEAR_FILTERS,
	};
};