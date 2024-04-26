import defaultIcon1 from "../../../../assets/icons/default-icon1.png";

export const IconText = ({ icon, text }) => (
  <div className="flex items-center">
    <img
      src={icon}
      alt=""
      className="w-8 h-8 mr-2 rounded-full"
      onError={({ currentTarget }) => {
        currentTarget.onerror = null;
        currentTarget.src = defaultIcon1;
      }}
    />
    <div className="overflow-hidden whitespace-nowrap overflow-ellipsis">
      {text}
    </div>
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
  const currentDate = new Date();
  const timeDifference = currentDate - date;

  // Calculate years and months
  const years = Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 365));
  const months = Math.floor(
    (timeDifference % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30)
  );

  // Format the result
  if (years > 0) {
    return `${years} year${years > 1 ? "s" : ""} ago`;
  } else {
    return `${months} month${months > 1 ? "s" : ""} ago`;
  }
};

