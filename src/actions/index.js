import axios from 'axios';
const API_KEY = '4f0a0c9b4ac0abf0c421de8982d3a6c3';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);
  console.log('Request', request);
  return {
    type: FETCH_WEATHER,
    payload: request
  }
}
