import { Circles } from "react-loader-spinner";
import s from "./Loader.module.css";

const Loader = () => {
    return (
        <div className={s.loader}>
            <Circles height="60" width="60" color="#a6f5ed" />
        </div>
    );
};
export default Loader;
