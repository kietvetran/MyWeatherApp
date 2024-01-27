import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import Card from 'js/component/Card';
import CityCard from 'js/component/CityCard';
import Modal from 'js/component/Modal';
import ScreenContent from 'js/component/ScreenContent';
import TextView, { FONT_SIZE } from 'js/component/TextView';
import { City, CityList } from 'js/domain/CityList';
import { RootStackParamList } from 'js/navigation/RootStackParamList';
import { SPACE } from 'js/style';
import { useState } from 'react';
import { Button, StyleSheet } from 'react-native';

const MyCityList: City[] = CityList.filter((city: City) => city.name === 'London' || city.name === 'Berlin');

interface State {
    currentCityList: City[];
    showModal: boolean;
}

export default function HomeScreen() {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    const [state, setState] = useState<State>({ showModal: false, currentCityList: MyCityList });

    const selectedCity = (selected: City) => {
        const currentCityList = state.currentCityList.map((city: City) => city);
        if (currentCityList.length > 2) {
            currentCityList.shift();
        }

        currentCityList.unshift(selected);
        setState({ currentCityList, showModal: false });
    };

    const viewCityLocation = (selected: City) => {
        navigation.navigate('LocationScreen', { title: selected.name, city: selected });
    };

    return (
        <ScreenContent>
            <TextView semibold size={FONT_SIZE.LARGE} style={styles.paragraph}>
                Home
            </TextView>

            <Button
                style={styles.marginBottom}
                title={state.currentCityList.length > 2 ? 'Change city' : 'Add city'}
                onPress={(): void => {
                    setState({ ...state, showModal: true });
                }}
            />

            <>
                {state.currentCityList.map((city: City) => {
                    return (
                        <CityCard
                            key={`city-card-${city.name}`}
                            city={city}
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
    marginBottom: {
        marginBottom: SPACE.SMALL,
    },
});
