import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
	View,
	StyleSheet,
	ImageBackground,
	FlatList,
	TouchableOpacity,
	TouchableNativeFeedback,
	Platform,
	ActivityIndicator,
} from 'react-native';

import DefaultText from '../globals/DefaultText';
import { Ionicons } from '@expo/vector-icons';

import * as restaurantActions from '../../store/actions/restaurants';
import Colors from '../../constants/Colors';

const RestaurantItem = props => {
	let TouchableComp = TouchableOpacity;

	if (Platform.OS === 'android' && Platform.Version >= 21) {
		TouchableComp = TouchableNativeFeedback;
	}
	return (
		<View style={styles.itemContainer}>
			<TouchableComp onPress={props.onSelect}>
				<View>
					<View style={styles.imageContainer}>
						<ImageBackground source={{ uri: props.imageUrl }} style={styles.bgImage}>
							<DefaultText weight="bold" style={styles.textOnImage}>
								{props.name}
							</DefaultText>
						</ImageBackground>
					</View>
					<View style={styles.itemDetail}>
						<DefaultText style={styles.detailText}>
							<Ionicons name="ios-pin" /> {props.city}
						</DefaultText>
						<DefaultText style={styles.detailText}>{props.category}</DefaultText>
					</View>
				</View>
			</TouchableComp>
		</View>
	);
};

const RestaurantList = props => {
	const [isLoading, setIsLoading] = useState(false);
	const restaurants = useSelector(state => state.restaurants.filteredRestaurants);
	let filter = useSelector(state => state.restaurants.filter);

	const category = props.navigation.getParam('category');

	const dispatch = useDispatch();

	useEffect(() => {
		let componentMounted = true;
		setIsLoading(true);

		if (category) {
			filter = { ...filter, cat: [category] };
		}

		restaurantActions.fetch(filter).then(restaurants => {
			if (componentMounted) {
				setIsLoading(false);
				dispatch(restaurantActions.setRestaurants(restaurants, filter));
			}
		});

		return () => (componentMounted = false);
	}, [dispatch, filter]);

	if (isLoading) {
		return (
			<View style={styles.loader}>
				<ActivityIndicator size="large" />
			</View>
		);
	}

	return (
		<View style={styles.screen}>
			<FlatList
				data={restaurants}
				renderItem={itemData => (
					<RestaurantItem
						name={itemData.item.name}
						imageUrl={itemData.item.imageUrl}
						city={itemData.item.city}
						category={itemData.item.category}
						onSelect={() => {
							props.navigation.navigate({
								routeName: 'RestaurantDetail',
								params: {
									restaurantId: itemData.item.id,
									restTitle: itemData.item.name,
								},
							});
						}}
					/>
				)}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	screen: {
		marginRight: 10,
		marginLeft: 10,
	},
	loader: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	itemContainer: {
		marginVertical: 10,
		backgroundColor: '#ffffff',
		height: 250,
		borderRadius: 10,
		shadowColor: '#000000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.35,
		elevation: 3,
	},
	imageContainer: {
		width: '100%',
		height: '85%',
		overflow: 'hidden',
		borderTopRightRadius: 10,
		borderTopLeftRadius: 10,
	},
	bgImage: {
		width: '100%',
		height: '100%',
		justifyContent: 'flex-end',
	},
	textOnImage: {
		color: '#ffffff',
		textAlign: 'center',
		fontSize: 18,
		padding: 10,
		backgroundColor: 'rgba(0,0,0,0.5)',
	},
	itemDetail: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		padding: 10,
		height: '15%',
	},
	detailText: {
		color: Colors.secondaryDark,
	},
});

export default RestaurantList;
