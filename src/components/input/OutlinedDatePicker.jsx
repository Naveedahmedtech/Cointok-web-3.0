import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./styles/DatePickerStyles.css";

const OutlinedDatePicker = ({ id, label, required = false }) => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div className="relative border-2 border-border-secondary rounded-md p-2 text-text-light">
      <label htmlFor={id} className="absolute -top-3 left-2 px-1 text-sm">
        {label}
        {required && <span className="text-red-500">*</span>}
      </label>
      <DatePicker
        id={id}
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        className="w-full bg-transparent p-1 text-sm focus:outline-none text-text-light"
        required={required}
        showYearDropdown
        scrollableYearDropdown
        yearDropdownItemNumber={50}
      />
    </div>
  );
};

export default OutlinedDatePicker;
