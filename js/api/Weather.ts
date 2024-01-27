import { City } from 'js/domain/CityList';
import { API_KEY, WeatherResponseData } from 'js/domain/Weather';

export const fetchWeather = async (param: City): Promise<WeatherResponseData> => {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${param.lat}&lon=${param.lon}&appid=${API_KEY}`;
    const response = await fetch(url);
    const data = await response.json();
    return data as WeatherResponseData;
};
