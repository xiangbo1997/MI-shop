function getItem(key) {
    const newkey = window.localStorage.getItem(key);
    return JSON.parse(newkey)
}
function setItem(key,value) {
    window.localStorage.setItem(key,JSON.stringify(value))
}
function removeItem(key) {
    window.localStorage.removeItem(key)
}
export {
    getItem,
    setItem,
    removeItem
}