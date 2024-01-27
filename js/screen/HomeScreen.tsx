import { StyleSheet, View, Text, Button } from 'react-native';

export default function HomeScreen({navigation}) {
    return (
        <View style={styles.root}>
          <Text>Home Screen</Text>
          <Button title="Go to Profile" onPress={() =>navigation.navigate('LocationScreen', { title: 'Custom profile header' })}/>
        </View>
    );
};

const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: '#fff',
    },
});