import React from 'react';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import HeaderButton from '../components/globals/HeaderButton';
import FilterForm from '../components/restaurant/FilterForm';

const FiltersScreen = props => {
	return <FilterForm navigation={props.navigation} />;
};

FiltersScreen.navigationOptions = navData => {
	return {
		headerTitle: 'Apply Filter',
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

export default FiltersScreen;