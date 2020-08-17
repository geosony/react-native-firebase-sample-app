import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
	FlatList,
	View,
	StyleSheet,
	ActivityIndicator,
	TouchableOpacity,
	Platform,
	TouchableNativeFeedback,
} from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import HeaderButton from '../components/globals/HeaderButton';
import DefaultText from '../components/globals/DefaultText';

import * as categoryActions from '../store/actions/categories';

const CategoryGrid = props => {
	let TouchableComp = TouchableOpacity;

	if (Platform.OS === 'android' && Platform.Version >= 21) {
		TouchableComp = TouchableNativeFeedback;
	}

	return (
		<View style={styles.gridItem}>
			<TouchableComp style={{ flex: 1 }} onPress={props.onSelect}>
				<View style={{ ...styles.gridTile, ...{ backgroundColor: props.color } }}>
					<DefaultText weight="bold" style={styles.text}>
						{props.title}
					</DefaultText>
				</View>
			</TouchableComp>
		</View>
	);
};

const CategoriesScreen = props => {
	const [isLoading, setIsLoading] = useState(false);
	const categories = useSelector(state => state.categories.categories);

	const dispatch = useDispatch();

	useEffect(() => {
		let componentMounted = true;

		setIsLoading(true);

		categoryActions.fetch().then(cats => {

			if (componentMounted) {
				setIsLoading(false);
				dispatch(categoryActions.setCategories(cats));
			}

		});

		return () => componentMounted = false;

	}, [dispatch]);

	if (isLoading) {
		return (
			<View style={styles.loader}>
				<ActivityIndicator size="large" />
			</View>
		);
	}

	return (
		<FlatList
			data={categories}
			renderItem={itemData => (
				<CategoryGrid
					title={itemData.item.name}
					color={itemData.item.color}
					onSelect={() => {
						props.navigation.navigate({
							routeName: 'Restaurants',
							params: { category: itemData.item.name },
						});
					}}
				/>
			)}
			numColumns={2}
		/>
	);
};

CategoriesScreen.navigationOptions = navData => {
	return {
		headerTitle: 'Browse Restaurants',
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
	};
};

const styles = StyleSheet.create({
	loader: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	gridItem: {
		flex: 1,
		height: 150,
		margin: 8,
	},

	gridTile: {
		flex: 1,
		alignItems: 'flex-end',
		justifyContent: 'flex-end',
		padding: 15,
		borderRadius: 10,
		shadowColor: '#000000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.35,
		elevation: 3,
	},
	text: {
		fontSize: 16,
	},
});

export default CategoriesScreen;