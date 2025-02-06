import React from "react";
import { Cloudinary } from "@cloudinary/url-gen";
import { auto } from "@cloudinary/url-gen/actions/resize";
import { autoGravity } from "@cloudinary/url-gen/qualifiers/gravity";
import { AdvancedImage } from "@cloudinary/react";

const useCloudnaryHooks = () => {
  const cloudId = new Cloudinary({ cloud: { cloudName: "sahu-s-theclassic" } });
  return {cloudId}
};

export default useCloudnaryHooks;
