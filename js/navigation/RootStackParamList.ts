import { City } from 'js/domain/CityList';
import { TempUnit } from 'js/domain/TempUnit';

export type RootStackParamList = {
    HomeScreen: undefined;
    LocationScreen: {
        title: string;
        city: City;
        tempUnit: TempUnit;
    };
};
