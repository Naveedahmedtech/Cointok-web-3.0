import React, { useState } from "react";
import OutlinedInput from "../../../components/input/OutlinedInput";
import OutlinedDatePicker from "../../../components/input/OutlinedDatePicker";
import OutlinedDropdown from "../../../components/input/OutlinedDropdown";
import OutlinedTextArea from "../../../components/input/OutlinedTextArea";
import Buttons from "./Buttons";

const FormFields = ({
  handleChange,
  handleButtonClick,
  errors,
  handleSubmit,
  categories,
  platforms,
  presale,
  chains,
  isLoading,
  formData,
}) => {
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
          value={formData.coin_name}
        />
        <OutlinedInput
          id="coin_symbol"
          label="Coin Symbol"
          placeholder="Coin Symbol"
          required
          onChange={handleChange}
          error={errors.coin_symbol}
          value={formData.coin_symbol}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
        <OutlinedDropdown
          id="chain_id"
          label="Network Chain"
          options={chains}
          required={true}
          defaultValue="Please select..."
          onChange={handleChange}
          error={errors.chain_id}
          value={formData.chain_id}
        />
        <OutlinedDatePicker
          id="launch_date"
          label="Launch Date"
          required
          onChange={handleChange}
          error={errors.launch_date}
          value={formData.launch_date}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
        {formData.coin_type === "presale" ? (
          <>
            <OutlinedDropdown
              id="presale_platform_id"
              label="Presale Platform"
              options={platforms}
              required={true}
              defaultValue="Please select..."
              onChange={handleChange}
              error={errors.presale_platform_id}
              value={formData.presale_platform_id}
            />
            <OutlinedInput
              id="presalelisting_link"
              label="Presale Listing Link"
              placeholder="Presale Listing Link"
              required
              onChange={handleChange}
              error={errors.presale_listing_link}
              value={formData.presale_listing_link}
            />
          </>
        ) : (
          <>
            <OutlinedDropdown
              id="listing_platform_id"
              label="Listing Platform"
              options={presale || [{ id: 1, name: "No provided" }]}
              required={true}
              defaultValue="Please select..."
              onChange={handleChange}
              error={errors.listing_platform_id}
              value={formData.listing_platform_id}
            />
            <OutlinedInput
              id="listing_link"
              label="Listing Link"
              placeholder="Listing Link"
              required
              onChange={handleChange}
              error={errors.listing_link}
              value={formData.listing_link}
            />
          </>
        )}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
        <Buttons
          onButtonClick={handleButtonClick}
          error={errors.coin_type}
          value={formData.website_link}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
        <OutlinedInput
          id="contract_address"
          label="Contract Address"
          placeholder="Contact Address"
          required
          onChange={handleChange}
          error={errors.contract_address}
          value={formData.contract_address}
        />
        <OutlinedDropdown
          id="category_id"
          label="Category"
          options={categories}
          required={true}
          defaultValue="Please select..."
          onChange={handleChange}
          error={errors.category_id}
          value={formData.category_id}
        />
      </div>
      <div className="my-10">
        <OutlinedTextArea
          id="coin_description"
          label="Description"
          placeholder="Describe your coin. What makes the coin different from others? What is the goal/purpose of the coin?"
          required
          rows={5}
          onChange={handleChange}
          error={errors.coin_description}
          value={formData.coin_description}
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
          value={formData.website_link}
        />
        <OutlinedInput
          id="twitter_link"
          label="Twitter Link"
          placeholder="Coin Symbol"
          required={false}
          onChange={handleChange}
          error={errors.twitter_link}
          value={formData.twitter_link}
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
          value={formData.telegram_contact}
        />
        <OutlinedInput
          id="discard_link"
          label="Discard Link"
          placeholder="Discard Link"
          required={false}
          onChange={handleChange}
          error={errors.discard_link}
          value={formData.discard_link}
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
          value={formData.telegram_link}
        />
        <OutlinedInput
          id="reddit_link"
          label="Reddit Link"
          placeholder="Reddit Link"
          required={false}
          onChange={handleChange}
          error={errors.reddit_link}
          value={formData.reddit_link}
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
          value={formData.coinmarketcap_link}
        />
        <OutlinedInput
          id="coingecko_link"
          label="CoinGecko Link"
          placeholder="CoinGecko Link"
          required={false}
          onChange={handleChange}
          error={errors.coingecko_link}
          value={formData.coingecko_link}
        />
      </div>
      <div className="text-right">
        <button
          className="text-text-light bg-border-secondary border-2 border-text-primary px-10 py-3 rounded-lg hover:bg-primary"
          onClick={handleSubmit}
          disabled={isLoading}
        >
          {isLoading ? "Saving.." : "Save"}
        </button>
      </div>
    </div>
  );
};

export default FormFields;
