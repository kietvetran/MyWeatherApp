import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Color } from 'js/style';

import HomeScreen from 'js/screen/HomeScreen';
import LocationScreen from 'js/screen/LocationScreen';

const Stack = createNativeStackNavigator();

const MyTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: Color.font,
        background: Color.appBackground,
    },
};

const MyStackOption = {
    headerTintColor: Color.font,
    headerTransparent: false,
    headerStyle: {
        backgroundColor: Color.appTheme,
        borderBottomWidth: 0,
        shadowColor: 'transparent',
        elevation: 0,
    },
    cardStyle: {
        backgroundColor: Color.white,
    },
    headerBackTitleVisible: false,
};

export default function Navigation() {
    return (
        <NavigationContainer theme={MyTheme}>
            <Stack.Navigator>
                <Stack.Screen name="HomeScreen" component={HomeScreen} options={{...MyStackOption, title: 'Home'}}/>
                <Stack.Screen name="LocationScreen" component={LocationScreen} options={({ route }) => ({...MyStackOption, ...route.params })} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};