import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./styles/DatePickerStyles.css";

const OutlinedDatePicker = ({ id, label, required = false, onChange, error }) => {
  const [startDate, setStartDate] = useState(new Date());

  const handleDateChange = (d) => {
    const date = new Date(d);
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");
    const formattedDate = `${year}-${month}-${day}`;
    setStartDate(formattedDate);
    onChange({
      target: {
        id,
        value: formattedDate,
      },
    });
  };

  return (
    <div className="flex flex-col">
      <div className="relative border-2 border-border-secondary rounded-md p-2 text-text-light">
        <label htmlFor={id} className="absolute -top-3 left-2 px-1 text-sm">
          {label}
          {required && <span className="text-red-500">*</span>}
        </label>
        <DatePicker
          id={id}
          selected={startDate}
          onChange={handleDateChange}
          className="w-full bg-transparent text-sm focus:outline-none text-text-light"
          required={required}
          showYearDropdown
          scrollableYearDropdown
          yearDropdownItemNumber={50}
        />
      </div>
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}{" "}
    </div>
  );
};

export default OutlinedDatePicker;
