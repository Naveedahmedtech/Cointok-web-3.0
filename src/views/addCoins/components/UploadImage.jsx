import React, { useState } from "react";
import Text from "../../../components/text/Text";
import fileIcon from "../../../assets/file-icon.png";
import PromoteCoinButton from "../../../components/button/PromoteCoinButton";

const UploadImage = ({ onImageUpload, error, resetKey }) => {
  const [previewUrl, setPreviewUrl] = useState("");
  const [imageError, setImageError] = useState("");

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      if (file.type.startsWith("image/")) {
        if (file.size <= 2 * 1024 * 1024) {
          setPreviewUrl(URL.createObjectURL(file));
          onImageUpload(file);
          setImageError("");
        } else {
          setPreviewUrl("");
          onImageUpload(null);
          setImageError("Image size cannot exceed 2MB");
        }
      } else {
        setPreviewUrl("");
        onImageUpload(null);
        setImageError("Please upload an image file");
      }
    }
  };

  return (
    <div className="flex flex-col flex-grow lg:max-w-[350px]">
      <div
        className={`bg-secondary border-2 border-border-secondary px-4 sm:px-10 py-5 rounded-lg flex-grow-0 md:flex-grow lg:flex-grow-0 md:min-w-[280px] mb-5 ${
          imageError || error ? "border-rose-700" : "border-border-secondary"
        }`}
      >
        <div className="text-center">
          <div className="my-5">
            <Text className="text-text-primary text-lg sm:text-xl font-bold">
              Add Your Coin
            </Text>
            <Text className="text-text-secondary text-xs sm:text-sm">
              Listing Request
            </Text>
          </div>
          <div
            className={`bg-secondary border-2 border-border-secondary rounded-full p-3 sm:p-5 flex justify-center items-center cursor-pointer ${
              imageError || error
                ? "border-rose-700"
                : "border-border-secondary"
            }`}
            style={{ width: "150px", height: "150px", margin: "0 auto" }}
            onClick={() => document.getElementById("imageUpload").click()}
          >
            {previewUrl ? (
              <img
                src={previewUrl}
                alt="Preview"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                className="rounded-full"
              />
            ) : (
              <div className="flex flex-col items-center justify-center">
                <img
                  src={fileIcon}
                  alt="Upload Icon"
                  className="w-12 h-12 sm:w-12 sm:h-12"
                />
                <Text className="text-text-light text-xs sm:text-xs">
                  Click to Upload image
                </Text>
                <Text className="text-text-light text-xs sm:text-xs">
                  (400x400)
                </Text>
              </div>
            )}
            <input
              type="file"
              id="imageUpload"
              accept="image/*"
              onChange={handleFileChange}
              style={{ display: "none" }}
            />
          </div>
        </div>
        {imageError && (
          <p className="text-red-500 text-xs mt-1">{imageError}</p>
        )}
        {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
      </div>
      <div className="self-center">
      <PromoteCoinButton />
      </div>
    </div>
  );
};

export default UploadImage;

