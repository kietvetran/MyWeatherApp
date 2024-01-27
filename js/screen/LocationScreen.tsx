import { StyleSheet, View, Text, Button } from 'react-native';

export default function LocationScreen({navigation}) {
    return (
        <View style={styles.root}>
            <Text>Location screen</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    root: {
        flex: 1,
    },
});