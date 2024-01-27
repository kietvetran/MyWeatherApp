import ScreenContent from 'js/component/ScreenContent';
import useFetchWeather from 'js/hook/useFetchWeather';
import { StyleSheet, View, Text } from 'react-native';

export default function LocationScreen() {
    // eslint-disable-next-line
    const {isLoading, data } = useFetchWeather({lat: 59.91273, lon: 10.74609});

    return (
        <ScreenContent>
            <View style={styles.root}>
                <Text>Location screen</Text>
            </View>
        </ScreenContent>
    );
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
    },
});
