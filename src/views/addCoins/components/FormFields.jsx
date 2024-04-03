import React from "react";
import OutlinedInput from "../../../components/input/OutlinedInput";
import OutlinedDatePicker from "../../../components/input/OutlinedDatePicker";
import OutlinedDropdown from "../../../components/input/OutlinedDropdown";
import OutlinedTextArea from "../../../components/input/OutlinedTextArea";
import Buttons from "./Buttons";

const dropdownOptions = [
  { label: "Option 1", value: "option1" },
  { label: "Option 2", value: "option2" },
  // Add more options as needed
];

const FormFields = () => {
  return (
    <div className="bg-secondary p-5 rounded-lg flex-grow">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
        <OutlinedInput
          id="coin-name"
          label="Coin Name"
          placeholder="Coin Name"
          required
        />
        <OutlinedInput
          id="coin-symbol"
          label="Coin Symbol"
          placeholder="Coin Symbol"
          required
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
        <OutlinedInput
          id="network-chain"
          label="Network/Chain"
          placeholder="Network Chain"
          required
        />
        <OutlinedDatePicker id="launch-date" label="Launch Date" required />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
        <OutlinedDropdown
          id="listing-platform"
          label="Listing Platform"
          options={dropdownOptions}
          required={true}
          defaultValue="Please select..."
        />
        <OutlinedInput
          id="listing-link"
          label="Listing Link"
          placeholder="Listing Link"
          required
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
        <Buttons />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
        <OutlinedInput
          id="contact-address"
          label="Contact Address"
          placeholder="Contact Address"
          required
        />
        <OutlinedDropdown
          id="category"
          label="Category"
          options={dropdownOptions}
          required={true}
          defaultValue="Please select..."
        />
      </div>
      <div className="my-10">
        <OutlinedTextArea
          id="description"
          label="Description"
          placeholder="Describe your coin. What makes the coin different from others? What is the goal/purpose of the coin?"
          required
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
        <OutlinedInput
          id="website-link"
          label="Website Link"
          placeholder="Website Link"
          required
        />
        <OutlinedInput
          id="twitter-link"
          label="Twitter Link"
          placeholder="Coin Symbol"
          required={false}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
        <OutlinedInput
          id="telegram-contact"
          label="Telegram Contact"
          placeholder="Telegram Contact"
          required
        />
        <OutlinedInput
          id="discard-link"
          label="Discard Link"
          placeholder="Discard Link"
          required={false}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
        <OutlinedInput
          id="telegram-link"
          label="Telegram Link"
          placeholder="Telegram Link"
          required={false}
        />
        <OutlinedInput
          id="reddit-link"
          label="Reddit Link"
          placeholder="Reddit Link"
          required={false}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
        <OutlinedInput
          id="coinmarketcap-link"
          label="CoinMarketCap Link"
          placeholder="CoinMarketCap Link"
          required={false}
        />
        <OutlinedInput
          id="coingecko-link"
          label="CoinGecko Link"
          placeholder="CoinGecko Link"
          required={false}
        />
      </div>
      <div className="text-right">
        <button className="text-text-light bg-border-secondary border-2 border-text-primary px-10 py-3 rounded-lg hover:bg-primary">
          Save
        </button>
      </div>
    </div>
  );
};

export default FormFields;
