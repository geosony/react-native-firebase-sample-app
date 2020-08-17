import React from 'react';
import { StyleSheet, Text } from 'react-native';

const DefaultText = props => {
	const defaultStyle = props.weight && props.weight === 'bold' ? styles.bold : styles.normal;
	return <Text style={{ ...defaultStyle, ...props.style }}>{props.children}</Text>;
};

const styles = StyleSheet.create({
	normal: {
		fontFamily: 'open-sans',
	},
	bold: {
		fontFamily: 'open-sans-bold',
	},
});

export default DefaultText;