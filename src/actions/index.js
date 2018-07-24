import axios from 'axios'; // Simimlar ro jQuery AJAX method

const OPEN_WEATHER_API_KEY = 'ed79de6529dc0d1ff0348aa59d8473ff';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${OPEN_WEATHER_API_KEY}`;
export const FETCH_WEATHER= 'FETCH_WEATHER';

export function fetchWeather(city){

    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);

    console.log('Request:', request);
    return {
        type: FETCH_WEATHER,
        payload: request
    };
}