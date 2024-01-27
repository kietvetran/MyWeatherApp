import { QueryObserverOptions, useQuery } from '@tanstack/react-query';
import * as weatherApi from 'js/api/Weather';
import { WeatherParam } from 'js/domain/Weather';

const useFetchWeather = (param: WeatherParam, options?: QueryObserverOptions) => {
    return useQuery({
        queryKey: ['weather', param],
        queryFn: async () => await weatherApi.fetchWeather(param),
        ...(options ?? {}),
    });
};

export default useFetchWeather;
