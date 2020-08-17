import React from 'react';

import RestaurantList from '../components/restaurant/RestaurantList';

const CategoryRestaurantScreen = props => {
	return <RestaurantList navigation={props.navigation} />;
};

CategoryRestaurantScreen.navigationOptions = navData => {
	return {
		headerTitle: navData.navigation.getParam('category') + ' Restaurants',
	};
};

export default CategoryRestaurantScreen;