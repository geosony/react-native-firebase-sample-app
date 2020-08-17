import firebase from '../../config/firebase/firebase';
import Category from '../../models/categories';


export const SET_CATEGORIES = 'SET_CATEGORIES';

export const fetch = () => {
	const functions = firebase.functions();
	const callable = functions.httpsCallable('getRestaurantCategories');

	return callable()
		.then(cats => {
			const restCats = [];

			cats.data.forEach(cat => {
                let name;
                let id;
                let color;
				for (const key in cat) {
					name = key;
					id = cat[key].id;
					color = cat[key].color;
				}
				restCats.push(new Category(id, name, color));
			});

			return restCats;
		})
		.catch(error => {
			console.log("An error occurred on fetch categories!", error);
			return [];
		});
};

export const setCategories = (categories) => {
	return {
		type: SET_CATEGORIES,
		categories: categories
	};
};