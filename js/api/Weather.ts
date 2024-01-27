import { API_KEY, WeatherParam, WeatherResponseData } from 'js/domain/Weather';

export const fetchWeather = async (param: WeatherParam): Promise<WeatherResponseData> => {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${param.lat}&lon=${param.lon}&appid=${API_KEY}`;
    const response = await fetch(url);
    let data: WeatherResponseData | undefined = undefined;
    try {
        data = await response.json();
    } catch (error) {}

    return data as WeatherResponseData;
};
