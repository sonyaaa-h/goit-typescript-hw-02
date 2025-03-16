import { FaHeart, FaCameraRetro } from "react-icons/fa";
import s from "./ImageCard.module.css";

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

interface ImageCardProps {
    photo: Image;
    onClick: (photo: Image) => void;
}

const ImageCard: React.FC<ImageCardProps> = ({ onClick, photo }) => {
    return (
        <div className={s.galleryCard}>
            <div>
                <img src={photo.urls.small} alt={photo.alt_description} onClick={() => onClick(photo)} />
            </div>
            <div className={s.imageInfo}>
                <p><FaCameraRetro/> {photo.user.name}</p>
                <p><FaHeart fill="red"/> {photo.likes}</p>
            </div>
        </div>
    );
};
export default ImageCard;