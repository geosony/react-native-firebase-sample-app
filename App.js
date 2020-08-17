import React, { useState } from 'react';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import { createStore, combineReducers } from 'redux';
import { enableScreens } from 'react-native-screens';
import { Provider } from 'react-redux';
import { YellowBox } from "react-native";

import DefaultNavigator from './navigation/DefaultNavigator';
import categoryReducer from './store/reducers/categories';
import restaurantReducer from './store/reducers/restaurants';

enableScreens();

YellowBox.ignoreWarnings(["Setting a timer"]);

const rootReducer = combineReducers({
	categories: categoryReducer,
	restaurants: restaurantReducer,
});

const store = createStore(rootReducer);

const fetchFonts = () => {
	return Font.loadAsync({
		'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
		'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
	});
};

export default function App() {
	const [fontsLoaded, setFontsLoaded] = useState(false);

	if (!fontsLoaded) {
		return <AppLoading startAsync={fetchFonts} onFinish={() => setFontsLoaded(true)} />;
	}
  
	return (
		<Provider store={store}>
			<DefaultNavigator />
		</Provider>
	);
}