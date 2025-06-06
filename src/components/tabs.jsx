import { useState } from "react"
import {items} from "../assets/data"
import { TabItemList } from "./tabItem"

export function Tabs( { handleCount, setToggleLike } ) {

    const [tabs, setTabs] = useState("all")
    const filterdItems = 
    tabs === "all" ? items:items.filter((item)=>item.category === tabs)

    return (
    <>
        <h1>Item List</h1>
        <div>
            <button onClick={()=>setTabs("all")}>All</button>
            <button onClick={()=>setTabs("outer")}>Outer</button>
            <button onClick={()=>setTabs("top")}>Top</button>
            <button onClick={()=>setTabs("bottom")}>Bottom</button>
        </div>
        <TabItemList filterdItems={filterdItems} handleCount={handleCount} setToggleLike={setToggleLike}/>
        
    </>
    )
}