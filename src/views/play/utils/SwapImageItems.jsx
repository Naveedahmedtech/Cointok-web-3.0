const SwapImageItems = ({ platform, subtitle, image, buttonText }) => (
  <div className="bg-secondary flex justify-between items-center rounded-lg my-3">
    <div className="flex items-center space-x-1">
      {" "}
      {/* Adjusted for spacing */}
      <img src={image} alt={platform} className="h-12 w-auto" />
      <div className="flex flex-col justify-center items-start text-left">
        <p className="text-text-light text-sm md:text-base">{platform}</p>{" "}
        <p className="text-text-secondary text-xs md:text-sm">
          {subtitle}
        </p>{" "}
      </div>
    </div>
    <div>
      <button className="bg-text-primary hover:opacity-75 text-text-light font-bold py-2 px-4 md:px-6 rounded-lg transition-opacity duration-150 text-xs md:text-sm">
        {buttonText}
      </button>
    </div>
  </div>
);

export default SwapImageItems;
