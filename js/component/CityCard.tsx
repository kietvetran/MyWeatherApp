import Card from 'js/component/Card';
import { City } from 'js/domain/CityList';
import useFetchWeather from 'js/hook/useFetchWeather';
import convertWeatherTempKelvin from 'js/util/convertWeatherTempKelvin';

interface Props {
    city: City;
    onPress: () => void;
}

export default function CityCard({ city, onPress }: Props) {
    const { isLoading, isError, data }: any = useFetchWeather(city);
    return (
        <Card onPress={onPress} textList={[city.name, !!data && !isLoading && !isError ? `${convertWeatherTempKelvin(data?.main?.temp)}` : '...']} />
    );
}
