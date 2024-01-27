import { QueryObserverOptions, useQuery } from '@tanstack/react-query';
import * as weatherApi from 'js/api/Weather';
import { City } from 'js/domain/CityList';
import { WeatherResponseData } from 'js/domain/Weather';

const useFetchWeather = (param: City, options?: QueryObserverOptions) => {
    return useQuery<WeatherResponseData>({
        queryKey: ['weather', param],
        queryFn: async () => await weatherApi.fetchWeather(param),
        ...(options ?? {}),
    });
};

export default useFetchWeather;
