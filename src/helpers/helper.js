const ucfirst = (str) => {
    if (!str) return str;
    return str.charAt(0).toUpperCase() + str.slice(1);
}

const setPrice = (price) => {
    return "€" + price.toFixed(2);
}

export { ucfirst, setPrice };
