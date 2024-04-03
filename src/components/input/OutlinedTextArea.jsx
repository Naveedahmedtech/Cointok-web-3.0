import React from "react";

const OutlinedTextArea = ({
  id,
  label,
  placeholder,
  required = false,
  rows = 3, // Default number of rows
  defaultValue = "",
}) => {
  return (
    <div className="relative border-2 border-border-secondary rounded-md p-2 mt-4">
      <label
        htmlFor={id}
        className="absolute -top-3 left-2 px-1 text-sm text-text-light"
      >
        {label}
        {required && <span className="text-red-500">*</span>}
      </label>
      <textarea
        id={id}
        rows={rows}
        className="w-full bg-transparent p-1 text-sm focus:outline-none appearance-none resize-none text-text-light"
        required={required}
        defaultValue={defaultValue}
        placeholder={placeholder}
      ></textarea>
    </div>
  );
};

export default OutlinedTextArea;
