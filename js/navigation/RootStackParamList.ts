import { City } from 'js/domain/CityList';

export type RootStackParamList = {
    HomeScreen: undefined;
    LocationScreen: {
        title?: string;
        city?: City;
    };
};
