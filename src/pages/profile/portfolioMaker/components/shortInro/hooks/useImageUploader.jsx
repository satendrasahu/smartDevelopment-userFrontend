import { useState } from "react";

const useImageUploader = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleImageError = () => {
    setImageError(true);
  };
  return {
    imageLoaded,
    imageError,
    handleImageLoad,
    handleImageError,
  };
};

export default useImageUploader;
