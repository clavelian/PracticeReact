

const UUseLocalStorage = (key: string) => {
    const setItem = (value: unknown) => {
        try{
        window.localStorage.setItem(key, JSON.stringify(value))
        }
        catch(error) // converted to string
    }
    return { setItem, };
}
 
export default UUseLocalStorage;