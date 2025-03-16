import { useState } from "react";
import s from "./SearchBar.module.css";
import { IoSearchCircleOutline } from "react-icons/io5";
import toast, { Toaster } from "react-hot-toast";

const SearchBar = ({ onSubmit }) => {
    const [value, setValue] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (value.trim() === "") {
            return toast.error("Please enter a search query.");
        }
        onSubmit(value);
        setValue("");
    };

    return (
        <header className={s.header}>
            <form className={s.form} onSubmit={handleSubmit}>
                <input
                    onChange={(e) => setValue(e.target.value)}
                    value={value}
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                    className={s.searchInput}
                />
                <button className={s.searchBtn} type="submit">
                    {" "}
                    <IoSearchCircleOutline size={24} />
                </button>
                <Toaster position="top-right" />
            </form>
        </header>
    );
};
export default SearchBar;
