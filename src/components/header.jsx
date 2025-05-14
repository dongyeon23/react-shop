import { useState } from "react";
import { Link } from "react-router-dom";
import { items } from "../assets/data";

export function Header() {
const [clicked, setClicked] = useState(false);
const [search, setSearch] = useState("");

const handleInputToggle = () => {
    setClicked((prev) => !prev);
    setSearch("");
};

return (
    <>
        <div className="header">
            <div className="header-inner">
            <div className="left">
                <p>Menu</p>
                <div className="search-wrap">
                <p onClick={handleInputToggle}>Search</p>
                <input
                    className={`input${clicked ? "on" : "off"}`}
                    type="text"
                />
                </div>
            </div>
            <div className="center">
                <Link to="/tabs">Logo</Link>
            </div>
            <div className="right">
                <Link to="/">Mypage</Link>
                <Link to="/cart">Cart</Link>
                <Link to="/like">Like</Link>
            </div>
            </div>
        </div>
    </>
);
}
