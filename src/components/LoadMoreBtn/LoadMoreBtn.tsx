import s from "./LoadMoreBtn.module.css";

interface LoadMoreBtnProps {
    onClick: () => void;
}

const LoadMoreBtn : React.FC<LoadMoreBtnProps> = ({ onClick }) => {
    return (
        <div>
            <button className={s.loadMoreBtn} onClick={onClick}>Load more</button>
        </div>
    );
};
export default LoadMoreBtn;
