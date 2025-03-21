import Modal from "react-modal";
import { Image } from "../../App";

const customStyles = {
    overlay: {
        backgroundColor: "rgba(0, 0, 0, 0.75)",
    },
    content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
    },
};

Modal.setAppElement("#root");

interface ImageModalProps {
    modalImage: Image;
    onClose: () => void;
    isOpen: boolean;
}

const ImageModal: React.FC<ImageModalProps> = ({
    modalImage,
    onClose,
    isOpen,
}) => {

    return (
        <div>
            <Modal
                isOpen={isOpen}
                onRequestClose={onClose}
                style={customStyles}
                contentLabel="Image Modal"
                shouldCloseOnOverlayClick={true}
                shouldCloseOnEsc={true}
            >
                <img
                    src={modalImage.urls.regular}
                    alt={modalImage.alt_description}
                    style={{
                        height: "729px",
                    }}
                />
            </Modal>
        </div>
    );
};
export default ImageModal;
