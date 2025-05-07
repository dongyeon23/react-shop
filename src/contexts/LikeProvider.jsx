import { createContext, useContext, useState } from "react";

const LikeContext = createContext();

export function LikeProvider ({children}) {
    const [likeItem, setLikeItem] = useState([]);
    return (
        <LikeContext.Provider value={{likeItem, setLikeItem}}>
            {children}
        </LikeContext.Provider>
    )
}

export function useLike(){
    return useContext(LikeContext);
}