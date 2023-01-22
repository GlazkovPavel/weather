import * as moment_ from 'moment';

const moment: any = moment_;
class ApiWeather {
    private _baseUrl: string;
    private _apiKey: string;
    constructor(data: { baseUrl: string; apiKey: string; }) {
        this._baseUrl = data.baseUrl;
        this._apiKey = data.apiKey;
    }

    _getResponse(res: any) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    }

    getLocation(queryCity: string) {
        return fetch(`${this._baseUrl}geo/1.0/direct?q=${queryCity}&limit=1&appid=${this._apiKey}`)
            .then(this._getResponse)
    }

    getWeatherByLocation(lat: number, lon: number) {
        return fetch(`${this._baseUrl}data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${this._apiKey}&cnt=3`)
            .then(this._getResponse)
    }

    getWeather(queryCity: string, date: string) {
        let selection: string = '';
        const dateNow: string = moment().format('YYYY-MM-DD');

        if (date > dateNow) {
            selection = 'future';
        }

        else if (date < dateNow) {
            selection = 'history';
        } else {
            selection = 'current'
        }

        return fetch(`${this._baseUrl}/${selection}.json?key=${this._apiKey}&q=${queryCity}&dt=${date}`)
            .then(this._getResponse)
    }

}

const apiWeather = new ApiWeather({
    baseUrl: "http://api.openweathermap.org/",
    apiKey: "c039aff802e5ee8f19656a431e6d9bca",
});

export default apiWeather;
