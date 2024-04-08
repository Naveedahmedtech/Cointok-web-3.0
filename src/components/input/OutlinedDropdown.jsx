import React from "react";
import { AiOutlineDown } from "react-icons/ai"; // Ensure you have react-icons installed
import "./styles/DropdownStyles.css"; // Path to your CSS file

const OutlinedDropdown = ({
  id,
  label,
  options,
  required = false,
  placeholder = "Select an option", 
  onChange,
  error,
  value, 
}) => {
  return (
    <div className="flex flex-col">
      <div className="outlinedDropdown__container p-1">
        <label htmlFor={id} className="outlinedDropdown__label">
          {label}
          {required && <span className="text-red-500">*</span>}
        </label>
        <select
          id={id}
          className="outlinedDropdown__select text-text-light"
          required={required}
          value={value} // Controlled value
          onChange={onChange}
        >
          <option value="" disabled>
            {placeholder}
          </option>
          {options?.map((option, index) => (
            <option key={index} value={option.id} className="text-text-light">
              {option.name}
            </option>
          ))}
        </select>
        <AiOutlineDown className="outlinedDropdown__arrow text-lg text-text-light" />
      </div>
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
};

export default OutlinedDropdown;
