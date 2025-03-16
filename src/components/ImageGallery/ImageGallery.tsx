import ImageCard from "../ImageCard/ImageCard";
import s from "./ImageGallery.module.css";

interface Image {
    id: string;
    urls: {
        small: string;
    };
    alt_description: string;
    user: {
        name: string;
    };
    likes: number;
}

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
