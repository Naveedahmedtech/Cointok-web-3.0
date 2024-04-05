export const IconText = ({ icon, text }) => (
  <div className="flex items-center justify-center">
    <img src={icon} alt="" className="w-8 h-8 mr-2" /> {text}
  </div>
);

export const ColoredNumber = ({ number }) => (
  <span style={{ color: number < 0 ? "red" : "#00FFA3" }}>{number}</span>
);

export const FormatMarketCap = ({ value }) => (
  <span>${value.toLocaleString()}</span>
);

// Assume a function to format date since you didn't specify the format
export const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString();
};
