import { useState } from "react";
import { useTranslation } from "react-i18next";

const useShortInfoHook = () => {
  const { t } = useTranslation();
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleImageError = () => {
    setImageError(true);
  };

  return {
    t,
    imageLoaded,
    imageError,
    handleImageLoad,
    handleImageError,
  };
};

export default useShortInfoHook;
