import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	main: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
});

export default () => (
	<View style={styles.main}>
		<Text>Settings Here</Text>
	</View>
);
