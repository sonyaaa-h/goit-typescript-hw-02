import ImageCard from "../ImageCard/ImageCard";
import s from "./ImageGallery.module.css";

const ImageGallery = ({ photos, onClick }) => {
    return (
        <ul className={s.galleryList}>
            {photos.map((photo) => (
                <li key={photo.id}>
                    <ImageCard
                        photo={photo}
                        onClick={onClick}
                    />
                </li>
            ))}
        </ul>
    );
};
export default ImageGallery;
