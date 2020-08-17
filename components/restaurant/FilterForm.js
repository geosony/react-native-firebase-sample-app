import React, { useState, useEffect, useCallback } from 'react';
import {
	View,
	ScrollView,
	TextInput,
	Switch,
	StyleSheet,
	TouchableOpacity,
	KeyboardAvoidingView,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import DefaultText from '../globals/DefaultText';
import Colors from '../../constants/Colors';
import { setFilters, clearFilters } from '../../store/actions/restaurants';

const FilterSwitch = props => {
	return (
		<View style={styles.filterSwitchRow}>
			<DefaultText>{props.label}</DefaultText>
			<Switch
				trackColor={{ true: Colors.secondaryLight }}
				thumbColor={Colors.secondary}
				value={props.state}
				onValueChange={props.onChange}
			/>
		</View>
	);
};

const FilterForm = props => {
	const { navigation } = props;
	const categories = useSelector(state => state.categories.categories);

	const [restName, setRestName] = useState('');
	const [restCity, setRestCity] = useState('');
	const [restDesc, setRestDesc] = useState('');
	const [category, setCategory] = useState({});

	const onChangeSwitchHandler = (cat, status) => {
		const newCategoryFilter = { ...category, [cat]: status };
		setCategory(newCategoryFilter);
	};

	const dispatch = useDispatch();

	const clearFilterHandler = () => {
		setRestName('');
		setRestCity('');
		setRestDesc('');
		setCategory({});
		dispatch(clearFilters());
	};

	const saveFilters = useCallback(() => {
		const catFilter = [];

		Object.keys(category).forEach((key, i) => {
			if (category[key]) {
				catFilter.push(key);
			}
		});

		const applyFilters = {
			name: restName,
			city: restCity,
			desc: restDesc,
			cat: catFilter,
		};

		dispatch(setFilters(applyFilters));

		if (navigation.state.routeName === 'RestaurantFilters') {
			navigation.goBack();
		} else {
			navigation.navigate({ routeName: 'Restaurants' });
		}
	}, [restName, restCity, restDesc, category, dispatch]);

	useEffect(() => {
		navigation.setParams({ save: saveFilters });
	}, [saveFilters]);

	return (
		<KeyboardAvoidingView behavior="padding" keyboardVerticalOffset="10" style={{ flex: 1 }}>
			<ScrollView style={styles.screen}>
				<View style={styles.formContainer}>
					<View style={styles.formControl}>
						<DefaultText style={styles.formLabel}>Restaurant Name</DefaultText>
						<TextInput
							style={styles.formInput}
							value={restName}
							placeholder="search by name"
							onChangeText={text => setRestName(text)}
						/>
					</View>
					<View style={styles.formControl}>
						<DefaultText style={styles.formLabel}>City</DefaultText>
						<TextInput
							style={styles.formInput}
							value={restCity}
							placeholder="search by city"
							onChangeText={text => setRestCity(text)}
						/>
					</View>
					<View style={styles.formControl}>
						<DefaultText style={styles.formLabel}>Description</DefaultText>
						<TextInput
							style={styles.formInput}
							value={restDesc}
							placeholder="search by description"
							onChangeText={text => setRestDesc(text)}
						/>
					</View>
					<View style={styles.formControl}>
						<DefaultText weight="bold" style={styles.formLabel}>
							Restaurant Categories
						</DefaultText>
						{categories.map(cat => {
							return (
								<FilterSwitch
									id={cat.id}
									key={cat.id}
									state={category[cat.name]}
									onChange={onChangeSwitchHandler.bind(this, cat.name)}
									label={cat.name}
								/>
							);
						})}
					</View>
					<View style={styles.buttonContainer}>
						<TouchableOpacity style={styles.clearButton} onPress={clearFilterHandler}>
							<DefaultText weight="bold" style={styles.buttonText}>CLEAR</DefaultText>
						</TouchableOpacity>
					</View>
				</View>
			</ScrollView>
		</KeyboardAvoidingView>
	);
};

const styles = StyleSheet.create({
	screen: {
		margin: 10,
	},
	formContainer: {
		padding: 10,
	},
	formControl: {
		flex: 1,
		marginVertical: 5,
	},
	formLabel: {
		paddingBottom: 5,
	},
	formInput: {
		height: 22,
		borderBottomColor: Colors.secondaryLight,
		borderBottomWidth: 1,
	},
	filterSwitchRow: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginVertical: 10,
	},
	buttonContainer: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		paddingHorizontal: 10,
		width: '100%'
	},
	clearButton: {
		width: '50%',
		alignItems: 'center',
		backgroundColor: Colors.primary,
		padding: 20,
	},
	buttonText: {
		color: '#ffffff'
	}
});

export default FilterForm;
