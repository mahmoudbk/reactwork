import { useState } from "react";

export function UseLocalStorage(key, initialValue){

        const [value, setValue] = useState(()=> {
            const item = localStorage.getItem(key);
            return item ? JSON.parse(item):initialValue;
        });

        const setLocalStorageValue = newValue => {
            setValue(newValue);
            localStorage.setItem(key,JSON.stringify(newValue));
        }

        return [value,setLocalStorageValue]

}