import { useState } from "react"
import {items} from "../assets/data"
import { ItemList } from "./itemList"


export function Tabs() {
    const [tabs, setTabs] = useState("all")
    const filterdItems = 
    tabs === "all" ? items:items.filter((item)=>item.category === tabs)

    return (
    <>
        <div>
            <button onClick={()=>setTabs("all")}>All</button>
            <button onClick={()=>setTabs("outer")}>Outer</button>
            <button onClick={()=>setTabs("top")}>Top</button>
            <button onClick={()=>setTabs("bottom")}>Bottom</button>
        </div>
        <ItemList filterdItems={filterdItems} />
    </>
    )
}