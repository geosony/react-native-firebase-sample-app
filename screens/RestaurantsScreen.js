import React from 'react';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import HeaderButton from '../components/globals/HeaderButton';
import RestaurantList from '../components/restaurant/RestaurantList';

const RestaurantsScreen = props => {
	return <RestaurantList navigation={props.navigation} />;
};

RestaurantsScreen.navigationOptions = navData => {
	return {
		headerTitle: 'Restaurants',
		headerLeft: () => {
			return (
				<HeaderButtons HeaderButtonComponent={HeaderButton}>
					<Item
						title="menu"
						iconName="ios-menu"
						onPress={() => {
							navData.navigation.toggleDrawer();
						}}
					/>
				</HeaderButtons>
			);
		},
		headerRight: () => {
			return (
				<HeaderButtons HeaderButtonComponent={HeaderButton}>
					<Item
						title="search"
						iconName="ios-search"
						onPress={() => {
							navData.navigation.navigate({
								routeName: 'RestaurantFilters',
							});
						}}
					/>
				</HeaderButtons>
			);
		},
	};
};

export default RestaurantsScreen;