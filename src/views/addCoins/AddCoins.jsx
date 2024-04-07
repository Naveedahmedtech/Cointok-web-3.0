import React, { useState } from "react";
import UploadImage from "./components/UploadImage";
import FormFields from "./components/FormFields";
import {
  useAddCoinMutation,
  useGetCategoriesQuery,
  useGetPlatformsQuery,
} from "../../app/features/api";

const AddCoins = () => {
  const { data: categoriesData, isLoading: categoryLoading } =
    useGetCategoriesQuery();
  const { data: platformData, isLoading: platformLoading } =
    useGetPlatformsQuery();

  const [errors, setErrors] = useState({});

  const [addCoin] = useAddCoinMutation();

  const [formData, setFormData] = useState({
    coin_name: "",
    coin_symbol: "",
    network: "",
    launch_date: "",
    listing_platform_id: "",
    listing_link: "",
    contact_address: "",
    category_id: "",
    description: "",
    website_link: "",
    twitter_link: "",
    telegram_contact: "",
    discard_link: "",
    telegram_link: "",
    reddit_link: "",
    coinmarketcap_link: "",
    coingecko_link: "",
    coin_type: "",
  });

  const validateForm = () => {
    let newErrors = {};
    let isValid = true;

    const requiredFields = [
      "coin_name",
      "coin_symbol",
      "network",
      "listing_platform_id",
      "contact_address",
      "description",
      "coin_type",
      "launch_date",
      "coin_picture",
      "category_id",
      "website_link",
      "telegram_contact",
      "listing_link",
    ];

    requiredFields.forEach((field) => {
      if (field === "coin_picture") {
        if (!formData[field]) {
          isValid = false;
          newErrors[field] = "Coin image is required";
          console.log("Coin image is required and missing.");
        }
      } else if (!formData[field] || !formData[field].trim()) {
        isValid = false;
        newErrors[field] = "This field is required";
        console.log(`${field} is required and missing.`);
      }
    });

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleButtonClick = (buttonValue) => {
    setFormData((prevState) => ({
      ...prevState,
      coin_type: buttonValue,
    }));
  };

  const handleImageUpload = (imageFile) => {
    setFormData((prevState) => ({
      ...prevState,
      coin_picture: imageFile,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      console.log("Validation failed");
      return;
    }

    try {
      const result = await addCoin(formData).unwrap();
      console.log("Coin added successfully", result);
    } catch (error) {
      console.error("Failed to add coin", error);
    }
  };

  return (
    <div className="px-5">
      <div className="flex justify-between flex-wrap gap-5 items-start my-10">
        <UploadImage
          onImageUpload={handleImageUpload}
          error={errors.coin_picture}
        />
        <FormFields
          handleChange={handleChange}
          handleButtonClick={handleButtonClick}
          errors={errors}
          handleSubmit={handleSubmit}
          categories={categoriesData?.categories}
          platforms={platformData?.listing_platforms}
        />
      </div>
    </div>
  );
};

export default AddCoins;
