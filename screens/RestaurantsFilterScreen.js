import React from 'react';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import HeaderButton from '../components/globals/HeaderButton';
import FilterForm from '../components/restaurant/FilterForm';

const RestaurantsFilterScreen = props => {
	return <FilterForm navigation={props.navigation} />;
};

RestaurantsFilterScreen.navigationOptions = navData => {
	return {
		headerTitle: 'Quick Search',
		headerRight: () => {
			return (
				<HeaderButtons HeaderButtonComponent={HeaderButton}>
					<Item
						title="save"
						iconName="ios-checkmark-circle-outline"
						iconSize={24}
						onPress={navData.navigation.getParam('save')}
					/>
				</HeaderButtons>
			);
		},
	};
};

export default RestaurantsFilterScreen;