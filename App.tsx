import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const App: React.FC = (): JSX.Element => {

    return <View style={styles.root}>
        <Text>Hello world</Text>
    </View>
};

const styles = StyleSheet.create({
    root: {
        marginTop: 90,
        borderWidth: 1,
        borderColor: 'red',
    }
});

export default App;