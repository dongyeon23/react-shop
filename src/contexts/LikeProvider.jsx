import { createContext, useContext, useState } from "react";

const LikeContext = createContext();

export function LikeProvider ({children}) {
    const handleLike = (likedItem) => {
        const likeExist = likeItem.some((prevLikedItem)=>prevLikedItem.id === likedItem.id)
        if(!likeExist) {
        setLikeItem((prevLikedItem)=>[...prevLikedItem, likedItem])
        }else {
            const likeArr = likeItem.filter((prevLikedItem) => prevLikedItem.id !== likedItem.id);
            setLikeItem(likeArr);
        } 
    }
    const [likeItem, setLikeItem] = useState([]);
    return (
        <LikeContext.Provider value={{likeItem, setLikeItem, handleLike}}>
            {children}
        </LikeContext.Provider>
    )
}

export function useLike(){
    return useContext(LikeContext);
}