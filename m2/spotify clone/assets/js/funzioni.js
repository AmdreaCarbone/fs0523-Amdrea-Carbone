const apiKey = "Bearer BQBZ_PBh32uU46oDtovhPEpjYEkZndSjtIheXkmwdsuv_Mfo4rrUaJzzNK0StQ_dgnrQFDZVxagroD6k2YSF1r9r5HiIl7isS5BGl1_l1hbGzRer_Xg";

class DataObject {
    constructor(url, apiKey, method = "GET", obj = {}) {
        this.url = url;
        this.apiKey = apiKey;
        this.method = method;
        this.obj = obj;
    }

    async fetchData() {
        const params = {
            method: this.method,
            headers: {
                "Content-Type": "application/json",
                "Authorization": this.apiKey,
            },
        }

        if (this.method == "POST" || this.method == "PUT") params.body = JSON.stringify(this.obj);

        const response = await fetch(this.url, params);

        if (this.method == "GET") {
            const data = await response.json()
            return data;
        }
        return;
    }
}

function secondsToMinutes(number) {
    const minutes = Math.floor(number / 60);
    const seconds = (number - (minutes * 60)).toString().padStart(2, "0");
    const string = `${minutes}:${seconds}`;

    return string;
}

function setPoints(number) {
    const stringNumber = number.toString();
    const arr = [];
    let tempArr = [];
    let tempString = "";
    let counter = 0;

    for (let i = (stringNumber.length - 1); i >= 0; i--) {
        tempArr.unshift(stringNumber[i]);
        counter += 1;
        if ((counter % 3 == 0) || i == 0) {
            tempString = tempArr.join("");
            arr.unshift(tempString);
            tempArr = [];
            tempString = "";
        }
    }

    return arr.join(".");
}