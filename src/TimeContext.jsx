import {createContext,useState} from 'react';

export const TimeContext = createContext({});

export const TimeContextProvider = ({children}) => {
    const [time,setTime] = useState(0);

    return (
        <TimeContext.Provider value={{time,setTime}}>
            {children}
        </TimeContext.Provider>
    )
}