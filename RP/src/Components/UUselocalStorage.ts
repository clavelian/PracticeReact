

const UUseLocalStorage = (key: string) => {
    const setItem = (value: unknown) => {
        window.localStorage.setItem(key, JSON.stringify(value))
    }
    return { setItem, };
}
 
export default UUseLocalStorage;