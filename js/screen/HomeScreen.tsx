import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import Card from 'js/component/Card';
import CityCard from 'js/component/CityCard';
import Modal from 'js/component/Modal';
import ScreenContent from 'js/component/ScreenContent';
import TextView, { FONT_SIZE } from 'js/component/TextView';
import { City, CityList } from 'js/domain/CityList';
import { TempUnit, TemptType } from 'js/domain/TempUnit';
import { RootStackParamList } from 'js/navigation/RootStackParamList';
import { SPACE } from 'js/style';
import { useState, useEffect } from 'react';
import { Button, StyleSheet } from 'react-native';

const MyCityList: City[] = CityList.filter((city: City) => city.name === 'London' || city.name === 'Berlin');

interface State {
    currentCityList: City[];
    showModal: boolean;
    tempUnit: TempUnit;
}

export default function HomeScreen() {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    const [state, setState] = useState<State>({ showModal: false, currentCityList: MyCityList, tempUnit: TemptType.CELSIUA });

    const storeData = async (key: string, value: string): Promise<void> => {
        try {
            await AsyncStorage.setItem(key, value);
        } catch (error) {}
    };

    const selectedCity = (selected: City) => {
        const currentCityList = state.currentCityList.map((city: City) => city);
        if (currentCityList.length > 2) {
            currentCityList.shift();
        }

        storeData('city', JSON.stringify(selected));
        currentCityList.unshift(selected);
        setState({ ...state, currentCityList, showModal: false });
    };

    const changeTempUnit = () => {
        const tempUnit = state.tempUnit === TemptType.FAHRENHEIT ? TemptType.CELSIUA : TemptType.FAHRENHEIT;
        storeData('tempUnit', tempUnit);
        setState({ ...state, tempUnit });
    };

    const viewCityLocation = (selected: City) => {
        navigation.navigate('LocationScreen', { title: selected.name, city: selected, tempUnit: state.tempUnit });
    };

    useEffect(() => {
        const render = async () => {
            const tempUnit = await AsyncStorage.getItem('tempUnit');
            const cityValue = await AsyncStorage.getItem('city');
            const ownSelectedCity = cityValue ? JSON.parse(cityValue) : null;

            if ((!tempUnit || tempUnit === TemptType.CELSIUA) && !ownSelectedCity) {
                return;
            }

            setState((s: State) => {
                const currentCityList = s.currentCityList.map((city: City) => city);
                if (currentCityList.length < 3) {
                    currentCityList.unshift(ownSelectedCity);
                }
                const unit = tempUnit ? (tempUnit as TempUnit) : TemptType.CELSIUA;
                return {...s, currentCityList, tempUnit: unit};
           });
        };

        render();
    }, [setState]);

    return (
        <ScreenContent>
            <TextView semibold size={FONT_SIZE.LARGE} style={styles.paragraph}>
                Home
            </TextView>

            <Button
                title={state.currentCityList.length > 2 ? 'Change city' : 'Add city'}
                onPress={(): void => {
                    setState({ ...state, showModal: true });
                }}
            />

            <Button
                title={state.tempUnit && state.tempUnit === TemptType.FAHRENHEIT ? 'Use celsius' : 'Use fahrenheit'}
                onPress={(): void => {
                    changeTempUnit();
                }}
            />

            <>
                {state.currentCityList.map((city: City) => {
                    return (
                        <CityCard
                            key={`city-card-${city.name}`}
                            city={city}
                            tempUnit={state.tempUnit}
                            onPress={(): void => {
                                viewCityLocation(city);
                            }}
                        />
                    );
                })}
            </>

            <Modal
                visible={!!state.showModal}
                title="Select one of the cities"
                closeCallback={() => {
                    setState({ ...state, showModal: false });
                }}>
                <ScreenContent>
                    <>
                        {CityList.map((city: City) => {
                            const found = state.currentCityList.find((currentCity: City) => currentCity.name === city.name);
                            return found ? null : (
                                <Card
                                    key={`city-${city.name}`}
                                    textList={[city.name]}
                                    onPress={(): void => {
                                        selectedCity(city);
                                    }}
                                />
                            );
                        })}
                    </>
                </ScreenContent>
            </Modal>
        </ScreenContent>
    );
}

const styles = StyleSheet.create({
    paragraph: {
        paddingBottom: SPACE.MEDIUM,
    },
});
