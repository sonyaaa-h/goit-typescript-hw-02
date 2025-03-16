import { useEffect, useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import { fetchImages } from "./services/api";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";

function App() {
  const [photos, setPhotos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState(null);

  const openModal = (image) => {
    setModalImage(image);
    setIsModalOpen(true);    
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalImage({});
  };

  // console.log(photos);

  useEffect(() => {
    if (!query) return;
    const getPhotos = async () => {
      try {
        setIsError(false);
        setIsLoading(true);
        const { results, total_pages } = await fetchImages(query, page);
        setPhotos((prev) => [...prev, ...results]);
        setTotalPages(total_pages);
      } catch {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    getPhotos();
  }, [query, page]);

  const handleSearch = (newQuery) => {
    if (newQuery.trim() === "") return;
    setQuery(newQuery);
    setPage(1);
    setPhotos([]);
  };
  

  return (
    <>
      <SearchBar onSubmit={handleSearch} />
      {photos.length > 0 && <ImageGallery photos={photos} onClick={openModal} setModalImage={setModalImage} />}
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      {photos.length > 0 && page < totalPages && !isLoading && (
        <LoadMoreBtn onClick={() => setPage(page + 1)} />
      )}
      {isModalOpen && modalImage && <ImageModal isOpen={isModalOpen} onClose={closeModal} modalImage={modalImage} />}
    </>
  );
}

export default App;
