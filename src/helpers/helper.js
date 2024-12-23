const ucfirst = (str) => {
    if (!str) return str;
    return str.charAt(0).toUpperCase() + str.slice(1);
}

const setPrice = (price) => {
    return "€" + price.toFixed(2);
}

const GUID = () => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (char) {
        const random = Math.random() * 16 | 0;
        const value = char === 'x' ? random : (random & 0x3 | 0x8);
        return value.toString(16);
    });
}

const setCookie = (name, value, days) => {
    let expires = "";
    if (days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + encodeURIComponent(value) + expires + "; path=/";
}

const getCookie = (name) => {
    const cookies = document.cookie.split("; ");
    for (const cookie of cookies) {
        const [key, value] = cookie.split("=");
        if (key === name) {
            return decodeURIComponent(value);
        }
    }
    return null;
}

const isEmpty = (variable) => {
    if (variable === undefined || variable === null) {
        return true;
    }
    if (typeof variable === 'string' && variable.trim() === '') {
        return true;
    }
    if (Array.isArray(variable) && variable.length === 0) {
        return true;
    }
    if (typeof variable === 'object' && !Array.isArray(variable) && Object.keys(variable).length === 0) {
        return true;
    }
    if (typeof variable === 'number' && variable === 0) {
        return false;
    }
    return !variable;
}

export { ucfirst, setPrice, GUID, setCookie, getCookie, isEmpty };
