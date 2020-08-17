import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Ionicons } from '@expo/vector-icons';

import CategoriesScreen from '../screens/CategoriesScreen';
import RestaurantDetailScreen from '../screens/RestaurantDetailScreen';
import RestaurantsScreen from '../screens/RestaurantsScreen';
import FiltersScreen from '../screens/FiltersScreen';
import CategoryRestaurantScreen from '../screens/CategoryRestaurantScreen';
import RestaurantsFilterScreen from '../screens/RestaurantsFilterScreen';
import Colors from '../constants/Colors';


const defaultNavOptions = {
	headerStyle: {
		backgroundColor: Colors.primary
	},
	headerTintColor: '#ffffff',
};


const RestaurantNavigator = createStackNavigator(
	{
		Restaurants: RestaurantsScreen,
		RestaurantDetail: RestaurantDetailScreen,
		RestaurantFilters: RestaurantsFilterScreen,
	},
	{
		defaultNavigationOptions: defaultNavOptions,
	}
);


const homeStackNavigator = createStackNavigator(
	{
		Categories: CategoriesScreen,
		Restaurants: CategoryRestaurantScreen,
		RestaurantDetail: RestaurantDetailScreen,
	},
	{
		defaultNavigationOptions: defaultNavOptions,
	}
); 


const FilterNavigator = createStackNavigator(
	{
		Filters: FiltersScreen,
	},
	{
		defaultNavigationOptions: defaultNavOptions,
	}
);



const RestaurantTabsNavigator = createBottomTabNavigator(
	{
		Home: {
			screen: homeStackNavigator,
			navigationOptions: {
				tabBarIcon: tabInfo => {
					return <Ionicons name="ios-home" size={24} color={tabInfo.tintColor} />;
				},
			},
		},
		Restaurants: {
			screen: RestaurantNavigator,
			navigationOptions: {
				tabBarIcon: tabInfo => {
					return <Ionicons name="ios-restaurant" size={24} color={tabInfo.tintColor} />;
				},
			},
		},
	},
	{
		tabBarOptions: {
			activeTintColor: Colors.primaryDark
		},
	}
);


const MainNavigator = createDrawerNavigator(
	{
		Restaurants: {
			screen: RestaurantTabsNavigator,
			navigationOptions: {
				drawerLabel: 'Home',
			},
		},
		Filters: FilterNavigator,
	},
	{
		contentOptions: {
			activeTintColor: Colors.primaryDark
		}
	}
);


export default createAppContainer(MainNavigator);