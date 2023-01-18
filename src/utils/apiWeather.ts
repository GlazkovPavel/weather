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
    baseUrl: "http://api.weatherapi.com/v1",
    apiKey: "8c2d2742644f49bdadb175856231801",
});

export default apiWeather;
