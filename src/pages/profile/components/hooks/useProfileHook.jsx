import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { uploadCloudnaryImageThunk } from "../../../../redux/thunks/imageUpload/cloudnary.thunk";

const useProfileHook = () => {
  const [uploadedImage, setUploadedImage] = useState(null);
  const [isHovering, setIsHovering] = useState(false);
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { updateUserProfilePicLoader, user } = useSelector(
    (state) => state?.user || {}
  );

  const [alertPopup, setAlertPopup] = useState({
    isOpen: false,
    message: "",
    alertName: "",
    messageType: "success",
  });
  const handleAlertPopupClose = () => {
    setAlertPopup({ isOpen: false });
  };
  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => setIsHovering(false);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const fileExtension = file.name.split(".").pop();
      const allowedExtensions = ["jpg", "jpeg", "png"];
      const maxSize = 2097152;
      if (!allowedExtensions.includes(fileExtension.toLowerCase())) {
        setAlertPopup({
          ...alertPopup,
          isOpen: true,
          messageType: "error",
          message: t("fileAllowedFormat", { files: "PNG, JPEG, JPG" }),
        });
        return;
      }
      if (file.size > maxSize) {
        setAlertPopup({
          ...alertPopup,
          isOpen: true,
          messageType: "error",
          message: t("fileAllowedSize", { fileSize: "2 MB" }),
        });
        return;
      }

      const formData = new FormData();
      const variableName ="file" // profileImage // it can be change -- but in case of cloudnary it will be file
      formData.append(variableName, file);
      // add on in case of cloudnary otherwise you can skip following lines
      formData.append("upload_preset","sahuz_portfolio");
      formData.append("cloud_name","sahu-s-theclassic")
      //  Till here you can skip

      const imageUrl = URL.createObjectURL(file);
      dispatch(uploadCloudnaryImageThunk(formData)).then(({ payload }) => {
        console.log(payload)
        if (payload?.url) {
          setUploadedImage(payload?.url || imageUrl);
        }
      });
    } else {
      console.error("No file selected");
    }
  };

  const handleRemoveImage = () => {
    dispatch(uploadCloudnaryImageThunk({ profileImage: null }));
    setUploadedImage(null);
  };

  useEffect(() => {
    setUploadedImage(user?.profileImage);
  }, [user]);

  return {
    handleAlertPopupClose,
    handleMouseEnter,
    handleMouseLeave,
    handleImageUpload,
    handleRemoveImage,
    t,
    uploadedImage,
    isHovering,
    updateUserProfilePicLoader,
    user,
    alertPopup
  };
};

export default useProfileHook;
