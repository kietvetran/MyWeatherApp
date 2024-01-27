import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from 'js/navigation/RootStackParamList';
import HomeScreen from 'js/screen/HomeScreen';
import LocationScreen from 'js/screen/LocationScreen';
import { COLOR } from 'js/style';

const Stack = createNativeStackNavigator<RootStackParamList>();

const MyStackOption = {
    headerTintColor: COLOR.FONT,
    headerTransparent: false,
    headerStyle: {
        backgroundColor: COLOR.APP_THEME,
        borderBottomWidth: 0,
        shadowColor: 'transparent',
        elevation: 0,
    },
    cardStyle: {
        backgroundColor: COLOR.WHITE,
    },
    headerBackTitleVisible: false,
};

export default function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ ...MyStackOption, title: '' }} />
                <Stack.Screen name="LocationScreen" component={LocationScreen} options={({ route }) => ({ ...MyStackOption, ...route.params })} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
