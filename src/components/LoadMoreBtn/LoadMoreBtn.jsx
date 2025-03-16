import s from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ onClick }) => {
    return (
        <div>
            <button className={s.loadMoreBtn} onClick={onClick}>Load more</button>
        </div>
    );
};
export default LoadMoreBtn;
