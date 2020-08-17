import React from 'react';
import { View, ScrollView, Image, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';

import Colors from '../constants/Colors';
import DefaultText from '../components/globals/DefaultText';

const RestaurantDetailScreen = props => {
	const restaurantId = props.navigation.getParam('restaurantId');
	const restaurants = useSelector(state => state.restaurants.filteredRestaurants);
	const selectedRestaurant = restaurants.find(restaurant => restaurant.id === restaurantId);

	return (
		<ScrollView>
			<Image source={{ uri: selectedRestaurant.imageUrl }} style={styles.image} />
			<View style={styles.tag}>
				<DefaultText>
					<Ionicons name="ios-pin" /> {selectedRestaurant.city}
				</DefaultText>
				<DefaultText>{selectedRestaurant.category}</DefaultText>
			</View>
			<View style={styles.detail}>
				<DefaultText style={styles.address}>
					<Ionicons name="ios-pin" size={16} /> {selectedRestaurant.address1}, {selectedRestaurant.address2}
				</DefaultText>
			</View>
			<View style={styles.detail}>
				<DefaultText>{selectedRestaurant.description}</DefaultText>
			</View>
		</ScrollView>
	);
};

RestaurantDetailScreen.navigationOptions = navigationData => {
	const restTitle = navigationData.navigation.getParam('restTitle');
	return {
		headerTitle: restTitle,
	};
};

const styles = StyleSheet.create({
	image: {
		width: '100%',
		height: 200,
	},
	tag: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		padding: 10,
		backgroundColor: Colors.secondaryLight,
	},
	address: {
		color: Colors.primaryDark,
	},
	detail: {
		margin: 10,
	},
});

export default RestaurantDetailScreen;
