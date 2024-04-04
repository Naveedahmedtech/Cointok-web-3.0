import React, { useState } from "react";
import Text from "../../../components/text/Text";
import fileIcon from "../../../assets/file-icon.png";
import PromoteCoinButton from "../../../components/button/PromoteCoinButton";

const UploadImage = () => {
  const [image, setImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState("");

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type.substr(0, 5) === "image") {
      setImage(file);
      setPreviewUrl(URL.createObjectURL(file));
    } else {
      setImage(null);
      setPreviewUrl("");
    }
  };

  return (
    <div>
      <div className="bg-secondary border-2 border-border-secondary px-4 sm:px-10 py-5 rounded-lg flex-grow-0 md:flex-grow lg:flex-grow-0 min-w-[280px]">
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
            className="bg-secondary border-2 border-border-secondary rounded-full p-3 sm:p-5 flex justify-center items-center cursor-pointer"
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
      </div>
      <PromoteCoinButton />
    </div>
  );
};

export default UploadImage;
