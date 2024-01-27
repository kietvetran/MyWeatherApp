import Card from 'js/component/Card';
import { City } from 'js/domain/CityList';
import { TempUnit } from 'js/domain/TempUnit';
import useFetchWeather from 'js/hook/useFetchWeather';
import convertWeatherTempKelvin from 'js/util/convertWeatherTempKelvin';

interface Props {
    city: City;
    tempUnit: TempUnit;
    onPress: () => void;
}

export default function CityCard({ city, onPress, tempUnit }: Props) {
    const { isLoading, isError, data } = useFetchWeather(city);
    return (
        <Card
            onPress={onPress}
            textList={[city.name, !!data && !isLoading && !isError ? `${convertWeatherTempKelvin(data?.main?.temp, tempUnit)}` : '...']}
        />
    );
}
