import { useEffect, useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import { fetchImages } from "./services/api";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";

export interface Image {
  id: string;
  urls: {
    small: string;
    regular?: string;
  };
  alt_description: string;
  user: {
    name: string;
  };
  likes: number;
}

function App() {
  const [photos, setPhotos] = useState<Image[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [query, setQuery] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(0);

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [modalImage, setModalImage] = useState<Image | null>(null);

  const openModal = (image: Image) => {
    setModalImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalImage(null);
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

  const handleSearch = (newQuery: string) => {
    if (newQuery.trim() === "") return;
    setQuery(newQuery);
    setPage(1);
    setPhotos([]);
  };

  return (
    <>
      <SearchBar onSubmit={handleSearch} />
      {photos.length > 0 && (
        <ImageGallery
          photos={photos}
          onClick={openModal}
        />
      )}
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      {photos.length > 0 && page < totalPages && !isLoading && (
        <LoadMoreBtn onClick={() => setPage(page + 1)} />
      )}
      {isModalOpen && modalImage && (
        <ImageModal
          isOpen={isModalOpen}
          onClose={closeModal}
          modalImage={modalImage}
        />
      )}
    </>
  );
}

export default App;
