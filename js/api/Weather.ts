import { QueryFunctionContext } from '@tanstack/react-query';
import { City } from 'js/domain/CityList';
import { API_KEY, WeatherResponseData } from 'js/domain/Weather';

export const fetchWeather = async ({ queryKey }: QueryFunctionContext<[string, City]>): Promise<WeatherResponseData> => {
    const [_key, city] = queryKey;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${city.lat}&lon=${city.lon}&appid=${API_KEY}`;
    const response = await fetch(url);
    const data = await response.json();
    return data as WeatherResponseData;
};
