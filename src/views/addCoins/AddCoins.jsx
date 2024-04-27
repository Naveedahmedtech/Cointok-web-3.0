import React, { useState } from "react";
import UploadImage from "./components/UploadImage";
import FormFields from "./components/FormFields";
import {
  useAddCoinMutation,
  useGetCategoriesQuery,
  useGetChainsQuery,
  useGetPlatformsQuery,
  useGetPresaleListingQuery,
} from "../../app/features/api";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ConfirmationModal from "../../components/modals/ConfirmationModal";

const AddCoins = () => {
  const { data: categoriesData, isLoading: categoryLoading } =
    useGetCategoriesQuery();
  const { data: platformData, isLoading: platformLoading } =
    useGetPlatformsQuery();
  const { data: presaleData } = useGetPresaleListingQuery();
  console.log(presaleData)
  const { data: chains } = useGetChainsQuery();

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const [resetUploadKey, setResetUploadKey] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  const [addCoin, { isLoading, isError, error }] = useAddCoinMutation();

  const [formData, setFormData] = useState({
    coin_name: "",
    coin_symbol: "",
    launch_date: "",
    listing_platform_id: "",
    listing_link: "",
    contract_address: "",
    category_id: "",
    coin_description: "",
    website_link: "",
    twitter_link: "",
    telegram_contact: "",
    discard_link: "",
    telegram_link: "",
    reddit_link: "",
    coinmarketcap_link: "",
    coingecko_link: "",
    coin_type: "",
    chain_id: "",
    presale_listing_link: "",
    listing_presale_id: "",
  });

  const isValidUrl = (url) => {
    try {
      new URL(url);
      return true;
    } catch (e) {
      return false;
    }
  };

  const validateForm = () => {
    let newErrors = {};
    let isValid = true;

    // Common required fields
    let requiredFields = [
      "coin_name",
      "coin_symbol",
      "contract_address",
      "coin_description",
      "coin_type",
      "launch_date",
      "category_id",
      "website_link",
      "telegram_contact",
      "chain_id",
      "coin_picture",
    ];

    // Common URL fields
    let urlFields = [
      "website_link",
      "twitter_link",
      "telegram_link",
      "reddit_link",
      "coinmarketcap_link",
      "coingecko_link",
    ];

    // Adjust fields based on the coin_type
    if (formData.coin_type === "presale") {
      requiredFields = [
        ...requiredFields,
        "presale_platform_id",
        "presale_listing_link",
      ];
      urlFields = [...urlFields, "presale_listing_link"];
    } else {
      requiredFields = [
        ...requiredFields,
        "listing_platform_id",
        "listing_link",
      ];
      urlFields = [...urlFields, "listing_link"];
    }

    requiredFields.forEach((field) => {
      if (field === "coin_picture" && !formData[field]) {
        newErrors[field] = "Coin image is required";
        console.log(`${field} ERROR: ${newErrors[field]}`);
        isValid = false;
      } else if (
        typeof formData[field] === "string" &&
        (!formData[field] || !formData[field].trim())
      ) {
        newErrors[field] = "This field is required";
        console.log(`${field} ERROR: ${newErrors[field]}`);
        isValid = false;
      }
    });

    urlFields.forEach((field) => {
      if (
        formData[field] &&
        typeof formData[field] === "string" &&
        !isValidUrl(formData[field])
      ) {
        newErrors[field] = "Invalid URL";
        console.log(`${field} ERROR: ${newErrors[field]}`);
        isValid = false;
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
      setResetUploadKey((prevKey) => prevKey + 1);
      toggleModal();
      setFormData({
        coin_name: "",
        coin_symbol: "",
        launch_date: "",
        listing_platform_id: "",
        listing_link: "",
        contract_address: "",
        category_id: "",
        coin_description: "",
        website_link: "",
        twitter_link: "",
        telegram_contact: "",
        discard_link: "",
        telegram_link: "",
        reddit_link: "",
        coinmarketcap_link: "",
        coingecko_link: "",
        coin_type: "",
        chains: "",
      });
    } catch (error) {
      console.error("Failed to add coin", error);
      const err = error.data.message
        ? error.data.message
        : "Failed to add coin";
      toast.error(err, {
        position: "top-center",
      });
    }
  };

  return (
    <div className="px-5">
      <div className="flex justify-between flex-wrap gap-5 items-start my-10">
        <UploadImage
          onImageUpload={handleImageUpload}
          error={errors.coin_picture}
          key={resetUploadKey}
        />
        <FormFields
          handleChange={handleChange}
          handleButtonClick={handleButtonClick}
          errors={errors}
          handleSubmit={handleSubmit}
          categories={categoriesData?.categories}
          platforms={platformData?.listing_platforms}
          presale={presaleData?.listing_platforms}
          chains={chains?.chains}
          isLoading={isLoading}
          formData={formData}
        />
      </div>
      <ConfirmationModal
        isOpen={isModalOpen}
        onClose={toggleModal}
        securityPin={"0000"}
      />
    </div>
  );
};

export default AddCoins;
