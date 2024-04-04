import React from "react";
import UploadImage from "./components/UploadImage";
import FormFields from "./components/FormFields";

const AddCoins = () => {
  return (
    <div className="px-5">
      <div className="flex justify-between flex-wrap gap-5 items-start my-10">
        <UploadImage />
        <FormFields />
      </div>
    </div>
  );
};

export default AddCoins;
