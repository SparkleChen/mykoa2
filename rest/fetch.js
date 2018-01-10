export default class fetchs {

    constructor() {
    }

    async fetchAsync(url, method, data, callback) {
        let fetchOptions;
        if (method === "get") {
            fetchOptions = {
                method: 'GET',
                mode: "cors",
            };
        }
        else if (method === "post") {
            fetchOptions = {
                method: 'POST',
                mode: "cors",
                headers:{
                    'Content-Type':'application/json'
                },
                body: JSON.stringify(data),
            };
        }
            try {
            let res = await fetch(url, fetchOptions);
            let resJson = await res.json();
            callback(resJson);
        }
        catch (error) {
            console.error(error);
        }
    }

    post(url, params, callback) {
        this.fetchAsync(url, 'post', params, callback);
    }

    get(url, params, callback) {
        this.fetchAsync(url, 'get', params, callback);
    }
}

/*let url = 'http://localhost:3000/home/getUser';

let data = {
    name: "chenlanlan",
    email: "supermap",
    age: "12"
};
var getFetch = new fetch();

getFetch.get(url, data, (res) => {
    alert(res);
});
getFetch.post(url, data, (res) => {
    alert(res);
});*/

