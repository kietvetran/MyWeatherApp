import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { City } from 'js/domain/CityList';
import { TempUnit } from 'js/domain/TempUnit';

export type RootStackParamList = {
    HomeScreen: undefined;
    LocationScreen: {
        city: City;
        tempUnit: TempUnit;
        title?: string;
    };
};

export type RootStackScreenProps<H extends keyof RootStackParamList> = NativeStackScreenProps<RootStackParamList, H>;
