import { Image } from "../../App";
import ImageCard from "../ImageCard/ImageCard";
import s from "./ImageGallery.module.css";

interface ImageGalleryProps {
    photos: Image[];
    onClick: (photo: Image) => void;
}

const ImageGallery : React.FC<ImageGalleryProps> = ({ photos, onClick }) => {
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
