const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp();
const db = admin.firestore();

exports.getRestaurantCategories = functions.https.onRequest((request, response) => {
	const payload = [];

	const docs = db
		.collection('categories')
		.orderBy('order')
		.get();

	docs.then(snap => {
		snap.forEach(doc => {
			const docId = doc.id;
			const { category, color } = doc.data();
			payload.push({ [category]: { id: docId, color: color } });
		});
		return response.status(200).json({
			error: false,
			data: payload,
		});
	}).catch(error => {
		return response.status(422).json({
			error: true,
			data: {
				message: error,
			},
		});
	});
});

exports.getAllRestaurants = functions.https.onRequest((request, response) => {
	const docs = db
		.collection('restaurants')
		.orderBy('name')
		.get();
	const payload = [];
	docs.then(snap => {
		snap.forEach(doc => {
			const docId = doc.id;
			const docData = doc.data();
			payload.push({ [docId]: docData });
		});
		return response.status(200).json({
			error: false,
			data: payload,
		});
	}).catch(error => {
		return response.status(422).json({
			error: true,
			data: {
				message: error,
			},
		});
	});
});

/*
 *  filter : {
 *      cat: [],    // array of restaurant categories
 *      name: '',   // restaurant name
 *      city: '',   // restaurant city
 *      desc: '',   // restaurant description
 *  }
 */
exports.getFilteredRestaurants = functions.https.onRequest((request, response) => {
	const filter = request.body.data;
	const payload = [];

	const docs = db.collection('restaurants');

	const catFilter = filter.cat && filter.cat.length > 0 ? docs.where('category', 'in', filter.cat) : docs;
	const nameFilter = filter.name
		? catFilter.where('name', '>=', filter.name.charAt(0).toUpperCase() + filter.name.slice(1))
		: catFilter;

	nameFilter
		.orderBy('name')
		.get()
		.then(snap => {
			snap.forEach(doc => {
				const docId = doc.id;
				const docData = doc.data();

				if (filter.name) {
					const restName = docData.name.toLowerCase();
					if (!restName.match(filter.name.toLowerCase())) {
						return;
					}
				}

				if (filter.city) {
					const restCity = docData.city.toLowerCase();
					if (!restCity.match(filter.city.toLowerCase())) {
						return;
					}
				}

				if (filter.desc) {
					const restDesc = docData.description.toLowerCase();
					if (!restDesc.match(filter.desc.toLowerCase())) {
						return;
					}
				}

				payload.push({ [docId]: docData });
			});
			return response.status(200).json({
				error: false,
				data: payload,
			});
		})
		.catch(error => {
			return response.status(422).json({
				error: true,
				data: {
					message: error,
				},
			});
		});
});
