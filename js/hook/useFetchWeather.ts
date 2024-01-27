import { useQuery } from '@tanstack/react-query';
import { fetchWeather } from 'js/api/Weather';
import { City } from 'js/domain/CityList';
import { WeatherResponseData } from 'js/domain/Weather';

const useFetchWeather = (param: City) => {
    return useQuery({
        queryKey: ['weather', param],
        queryFn: fetchWeather,
    });
};

export default useFetchWeather;
