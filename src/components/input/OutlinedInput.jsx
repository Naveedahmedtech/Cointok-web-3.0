const OutlinedInput = ({
  id,
  label,
  placeholder,
  type = "text",
  required = false,
  onChange,
  error, // New error prop
}) => {
  return (
    <div className="flex flex-col">
      <div
        className={`relative border-2 ${
          error ? "border-red-500" : "border-border-secondary"
        } rounded-md p-2 mt-2`}
      >
        <label
          htmlFor={id}
          className="absolute text-text-light bg-secondary px-1"
          style={{ top: "-10px", left: "10px", fontSize: "0.875rem" }}
        >
          {label} {required && <span className="text-red-500">*</span>}
        </label>
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          className="w-full bg-transparent p-1 text-sm focus:outline-none text-text-light"
          required={required}
          onChange={onChange}
        />
      </div>
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}{" "}
    </div>
  );
};

export default OutlinedInput;
