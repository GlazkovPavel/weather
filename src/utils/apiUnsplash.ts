class ApiUnsplash {
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

    search(query: string, page = 1, per_page = 12) {
        return fetch(`${this._baseUrl}/search/photos?query=${query}&page=${page}&per_page=${per_page}&order_by='popular'`, {
            headers: {
                Authorization: `Client-ID ${this._apiKey}`,
            },
        }).then(this._getResponse);
    }

    getRandom(count=12) {
        return fetch(`${this._baseUrl}/photos/random?&count=${count}`, {
            headers: {
                Authorization: `Client-ID ${this._apiKey}`,
            },
        }).then(this._getResponse);
    }

    getPhotoId(id: string){
        return fetch(`${this._baseUrl}/photos/${id}`, {
            headers: {
                Authorization: `Client-ID ${this._apiKey}`,
            }
        }).then(this._getResponse);
    }

}

const api = new ApiUnsplash({
    baseUrl: "https://api.unsplash.com/",
    apiKey: "P2hzfuCuOqvhuqX4A9npRfIU6HLhQKOPLO87eBJKhmI",
});

export default api;
