import React, { useState } from "react";
import OutlinedInput from "../../../components/input/OutlinedInput";
import OutlinedDatePicker from "../../../components/input/OutlinedDatePicker";
import OutlinedDropdown from "../../../components/input/OutlinedDropdown";
import OutlinedTextArea from "../../../components/input/OutlinedTextArea";
import Buttons from "./Buttons";

const FormFields = ({ handleChange,handleButtonClick, errors, handleSubmit,  categories, platforms }) => {
  return (
    <div className="bg-secondary p-5 rounded-lg flex-grow">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
        <OutlinedInput
          id="coin_name"
          label="Coin Name"
          placeholder="Coin Name"
          required
          onChange={handleChange}
          error={errors.coin_name}
        />
        <OutlinedInput
          id="coin_symbol"
          label="Coin Symbol"
          placeholder="Coin Symbol"
          required
          onChange={handleChange}
          error={errors.coin_symbol}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
        <OutlinedInput
          id="network"
          label="Network/Chain"
          placeholder="Network Chain"
          required
          onChange={handleChange}
          error={errors.network}
        />
        <OutlinedDatePicker
          id="launch_date"
          label="Launch Date"
          required
          onChange={handleChange}
          error={errors.launch_date}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
        <OutlinedDropdown
          id="listing_platform_id"
          label="Listing Platform"
          options={platforms}
          required={true}
          defaultValue="Please select..."
          onChange={handleChange}
          error={errors.listing_platform_id}
        />
        <OutlinedInput
          id="listing_link"
          label="Listing Link"
          placeholder="Listing Link"
          required
          onChange={handleChange}
          error={errors.listing_link}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
        <Buttons onButtonClick={handleButtonClick} error={errors.coin_type} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
        <OutlinedInput
          id="contact_address"
          label="Contact Address"
          placeholder="Contact Address"
          required
          onChange={handleChange}
          error={errors.contact_address}
        />
        <OutlinedDropdown
          id="category_id"
          label="Category"
          options={categories}
          required={true}
          defaultValue="Please select..."
          onChange={handleChange}
          error={errors.category_id}
        />
      </div>
      <div className="my-10">
        <OutlinedTextArea
          id="description"
          label="Description"
          placeholder="Describe your coin. What makes the coin different from others? What is the goal/purpose of the coin?"
          required
          rows={5}
          onChange={handleChange}
          error={errors.description}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
        <OutlinedInput
          id="website_link"
          label="Website Link"
          placeholder="Website Link"
          required
          onChange={handleChange}
          error={errors.website_link}
        />
        <OutlinedInput
          id="twitter_link"
          label="Twitter Link"
          placeholder="Coin Symbol"
          required={false}
          onChange={handleChange}
          error={errors.twitter_link}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
        <OutlinedInput
          id="telegram_contact"
          label="Telegram Contact"
          placeholder="Telegram Contact"
          required
          onChange={handleChange}
          error={errors.telegram_contact}
        />
        <OutlinedInput
          id="discard_link"
          label="Discard Link"
          placeholder="Discard Link"
          required={false}
          onChange={handleChange}
          error={errors.discard_link}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
        <OutlinedInput
          id="telegram_link"
          label="Telegram Link"
          placeholder="Telegram Link"
          required={false}
          onChange={handleChange}
          error={errors.telegram_link}
        />
        <OutlinedInput
          id="reddit_link"
          label="Reddit Link"
          placeholder="Reddit Link"
          required={false}
          onChange={handleChange}
          error={errors.reddit_link}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
        <OutlinedInput
          id="coinmarketcap_link"
          label="CoinMarketCap Link"
          placeholder="CoinMarketCap Link"
          required={false}
          onChange={handleChange}
          error={errors.coinmarketcap_link}
        />
        <OutlinedInput
          id="coingecko_link"
          label="CoinGecko Link"
          placeholder="CoinGecko Link"
          required={false}
          onChange={handleChange}
          error={errors.coingecko_link}
        />
      </div>
      <div className="text-right">
        <button
          className="text-text-light bg-border-secondary border-2 border-text-primary px-10 py-3 rounded-lg hover:bg-primary"
          onClick={handleSubmit}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default FormFields;
